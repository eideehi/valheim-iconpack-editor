<script lang="ts">
  import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
  import { nanoid } from "nanoid";
  import { t } from "@/lib/i18n";
  import { iconpack } from "@/lib/utils/automatics-iconpack";
  import { MimeType } from "@/lib/utils/virtual-file-system";
  import Modal, { getModal } from "#/modal/Modal.svelte";

  export let files: VirtualDirectory;

  let invalid = false;
  let error = "";

  const setError = (msg: string) => {
    error = msg;
    invalid = msg.length > 0;
  };

  function validate(file: Nullable<File>): boolean {
    if (file == null) {
      setError("");
      return false;
    }
    if (!MimeType.isMatch("zip", file.type)) {
      setError("forms.common.error.unsupported-file-format");
      return false;
    }
    setError("");
    return true;
  }

  function loadIconPack(file: Nullable<File>): Promise<void> {
    getModal(id)?.close();
    if (!validate(file) || file == null) return Promise.resolve();

    return iconpack.loadIconPack(file.arrayBuffer()).then((loaded) => {
      if (loaded == null) {
        setError("start-page.load-iconpack.failed-to-load-iconpack");
        return;
      }
      files = loaded;
    });
  }

  async function onFileDrop({ dataTransfer }: DragEvent): Promise<void> {
    if (!dataTransfer) return;
    if (dataTransfer.items) {
      for (const item of dataTransfer.items) {
        if (item.kind === "file") {
          await loadIconPack(item.getAsFile());
          break;
        }
      }
    } else if (dataTransfer.files) {
      await loadIconPack(dataTransfer.files[0]);
    }
  }

  async function onFileChange(event: Event): Promise<void> {
    if (event.target instanceof HTMLInputElement) {
      await loadIconPack(event.target.files?.item(0));
    }
  }

  const id = nanoid();

  function showDropZone(): void {
    getModal(id)?.open();
  }

  function closeDropZone(event: DragEvent): void {
    if (event.x <= 0 || event.y <= 0) {
      getModal(id)?.close();
    }
  }
</script>

<svelte:body on:dragenter|preventDefault={showDropZone} />

<Modal {id}>
  <div
    class="drop-zone"
    on:dragleave={closeDropZone}
    on:dragover|preventDefault
    on:drop|preventDefault={onFileDrop}
  >
    <div class="message-wrapper">
      <span class="caption">{$t("start-page.load-iconpack.drop-to-load-iconpack")}</span>
    </div>
  </div>
</Modal>

<div class="load-iconpack">
  <h2 class="caption">{$t("start-page.load-iconpack.description")}</h2>
  <div class="load-button-wrapper">
    <label class="load-button" role="button" tabindex="0">
      <span>{$t("start-page.load-iconpack.load-iconpack")}</span>
      <input class="hidden" on:change={onFileChange} type="file" />
    </label>
    {#if invalid && error}
      <span class="error">{$t(error)}</span>
    {/if}
  </div>
</div>

<style lang="postcss">
  .drop-zone {
    @apply flex h-full w-full items-center justify-center;
  }

  .message-wrapper {
    @apply m-8 flex items-center justify-center rounded border-2 border-dashed border-base-color bg-base-color px-16 py-8;
  }

  .load-iconpack {
    @apply flex flex-col gap-y-4;
  }

  .caption {
    @apply text-xl;
  }

  .load-button-wrapper {
    @apply flex flex-col gap-y-0.5;
  }

  .load-button {
    @apply flex cursor-pointer items-center justify-center gap-x-1 rounded border-2 border-base-color px-2 py-1.5 font-bold text-base-color;
  }

  .load-button:hover {
    @apply border-hover text-hover;
  }

  .load-button:focus {
    @apply border-ui-blue;
  }

  .error {
    @apply font-bold text-ui-red;
  }
</style>
