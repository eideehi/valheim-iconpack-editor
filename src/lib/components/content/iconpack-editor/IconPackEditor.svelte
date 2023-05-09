<script lang="ts">
  import type { VirtualDirectory, VirtualFile } from "@/lib/utils/virtual-file-system";
  import type {
    AutomaticsIconPackJson,
    AutomaticsJsonEntry,
  } from "@/lib/utils/automatics-iconpack";
  import type { IconPackEditorContext } from "./context";
  import { setContext } from "svelte";
  import _ from "~lodash";
  import { header } from "@/lib/store/header";
  import { iconpack } from "@/lib/utils/automatics-iconpack";
  import { iconPackEditorContextKey } from "./context";
  import FilesView from "./files-view/FilesView.svelte";
  import JsonEditor from "./iconpack-json-editor/JsonEditor.svelte";
  import JsonView from "#/content/iconpack-editor/iconpack-json-view/JsonView.svelte";
  import ResizeBar from "./resize-bar/ResizeBar.svelte";

  export let files: VirtualDirectory;

  let filesView: Nullable<HTMLElement> = null;
  let jsonView: Nullable<HTMLElement> = null;

  let json: AutomaticsIconPackJson = iconpack.readIconPackJson(files);

  let entry: AutomaticsJsonEntry = iconpack.defaultJsonEntry();
  let spriteFile: Nullable<VirtualFile> = null;

  setContext<IconPackEditorContext>(iconPackEditorContextKey, {
    saveEntry: () => {
      json = [...iconpack.saveJsonEntry(files, json, entry, spriteFile)];
      files = { ...files };
      entry = iconpack.defaultJsonEntry();
      spriteFile = null;
    },
    openEntry: (target) => {
      entry = { ..._.cloneDeep(target) };
      spriteFile = iconpack.getSpriteFile(files, entry);
    },
    deleteEntry: () => {
      json = [...iconpack.removeJsonEntry(files, json, entry)];
      files = { ...files };
      entry = iconpack.defaultJsonEntry();
      spriteFile = null;
    },
  });

  function onBeforeUnload(event: BeforeUnloadEvent): string {
    if (!__DEV_MODE__) {
      event.preventDefault();
      return (event.returnValue = "");
    }
    return null;
  }
</script>

<svelte:window on:beforeunload={onBeforeUnload} />

<div class="iconpack-editor" class:has-header={$header === "show"}>
  <FilesView bind:ref={filesView} {files} />
  <ResizeBar positiveDirection="right" ref={filesView} />
  <JsonEditor bind:entry bind:spriteFile {json} />
  <ResizeBar positiveDirection="left" ref={jsonView} />
  <JsonView bind:ref={jsonView} {files} {json} />
</div>

<style lang="postcss">
  .iconpack-editor {
    @apply flex h-full w-full select-none overflow-hidden;
  }

  .iconpack-editor.has-header {
    @apply border-t border-base-color;
  }
</style>
