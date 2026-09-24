<script lang="ts">
  import type { VirtualDirectory, VirtualFile } from "@/lib/utils/virtual-file-system";
  import type {
    AutomaticsIconPackJson,
    AutomaticsJsonEntry,
  } from "@/lib/utils/automatics-iconpack";
  import type { IconPackEditorContext } from "./context";
  import { setContext, tick } from "svelte";
  import _ from "~lodash";
  import { t } from "@/lib/i18n";
  import { iconpack } from "@/lib/utils/automatics-iconpack";
  import { iconPackEditorContextKey } from "./context";
  import ConfirmDialog from "#/modal/ConfirmDialog.svelte";
  import FilesView from "./files-view/FilesView.svelte";
  import JsonEditor from "./iconpack-json-editor/JsonEditor.svelte";
  import JsonView from "#/content/iconpack-editor/iconpack-json-view/JsonView.svelte";
  import ResizeBar from "./resize-bar/ResizeBar.svelte";

  export let files: VirtualDirectory;

  let filesView: Nullable<HTMLElement> = null;
  let jsonView: Nullable<HTMLElement> = null;
  let confirmDialog: {
    ask(text: string, options?: { confirmLabel?: string; danger?: boolean }): Promise<boolean>;
  };

  let json: AutomaticsIconPackJson = iconpack.readIconPackJson(files);

  let entry: AutomaticsJsonEntry = iconpack.defaultJsonEntry();
  let spriteFile: Nullable<VirtualFile> = null;
  let lastSavedEntry: Nullable<AutomaticsJsonEntry> = null;

  let baseline: { entry: AutomaticsJsonEntry; spriteFile: Nullable<VirtualFile> } = {
    entry: _.cloneDeep(entry),
    spriteFile,
  };

  // Child editors may normalize the entry after it is replaced, so the baseline is taken again once
  // they have settled.
  function resetBaseline(): void {
    baseline = { entry: _.cloneDeep(entry), spriteFile };
    void tick().then(() => {
      baseline = { entry: _.cloneDeep(entry), spriteFile };
    });
  }

  let dirty = false;
  $: dirty = !_.isEqual(entry, baseline.entry) || spriteFile !== baseline.spriteFile;

  let activeEntry: AutomaticsJsonEntry;
  $: activeEntry = lastSavedEntry != null && !dirty ? lastSavedEntry : entry;

  function confirmDiscard(): Promise<boolean> {
    if (!dirty) return Promise.resolve(true);
    return confirmDialog.ask($t("iconpack-editor.confirm.discard.message"), {
      confirmLabel: $t("iconpack-editor.confirm.discard.confirm"),
      danger: true,
    });
  }

  function targetLabel(target: AutomaticsJsonEntry): string {
    const level = _.get(target.target, ["metadata", "level"], null);
    const name = target.target.name;
    return level != null ? `${name} (${$t("json-view.entry.level", { level })})` : name;
  }

  function resetForm(): void {
    entry = iconpack.defaultJsonEntry();
    spriteFile = null;
    resetBaseline();
  }

  async function openEntry(target: AutomaticsJsonEntry): Promise<void> {
    if (!(await confirmDiscard())) return;
    entry = { ..._.cloneDeep(target) };
    spriteFile = iconpack.getSpriteFile(files, entry);
    lastSavedEntry = null;
    resetBaseline();
  }

  async function newEntry(): Promise<void> {
    if (!(await confirmDiscard())) return;
    lastSavedEntry = null;
    resetForm();
  }

  async function deleteEntry(): Promise<void> {
    const target = _.cloneDeep(entry);
    const confirmed = await confirmDialog.ask(
      $t("iconpack-editor.confirm.delete.message", {
        target: targetLabel(target),
        interpolation: { escapeValue: false },
      }),
      { confirmLabel: $t("iconpack-editor.confirm.delete.confirm"), danger: true }
    );
    if (!confirmed) return;
    json = [...iconpack.removeJsonEntry(files, json, target)];
    files = { ...files };
    lastSavedEntry = null;
    resetForm();
  }

  setContext<IconPackEditorContext>(iconPackEditorContextKey, {
    saveEntry: () => {
      if (!spriteFile) return;
      json = [...iconpack.saveJsonEntry(files, json, entry, spriteFile)];
      files = { ...files };
      lastSavedEntry = _.cloneDeep(entry);
      resetForm();
    },
    openEntry: (target) => void openEntry(target),
    newEntry: () => void newEntry(),
    deleteEntry: () => void deleteEntry(),
  });

  function onBeforeUnload(event: BeforeUnloadEvent): Nullable<string> {
    if (!__DEV_MODE__) {
      event.preventDefault();
      return (event.returnValue = "");
    }
    return null;
  }
</script>

<svelte:window on:beforeunload={onBeforeUnload} />

<div class="iconpack-editor">
  <FilesView bind:ref={filesView} {files} />
  <ResizeBar positiveDirection="right" ref={filesView} />
  <JsonEditor bind:entry bind:spriteFile {json} />
  <ResizeBar positiveDirection="left" ref={jsonView} />
  <JsonView bind:ref={jsonView} {activeEntry} {files} {json} {lastSavedEntry} />
</div>

<ConfirmDialog bind:this={confirmDialog} />

<style lang="postcss">
  .iconpack-editor {
    @apply flex h-full w-full select-none overflow-hidden;
  }
</style>
