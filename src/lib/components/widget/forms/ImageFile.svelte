<script context="module" lang="ts">
  export interface ImageFileData {
    name: string;
    type: string;
    data: ArrayBuffer;
    dimension: {
      width: number;
      height: number;
    };
  }

  function createObjectURL(image: Nullable<ImageFileData>): string {
    if (image == null) return "";
    return URL.createObjectURL(new Blob([image.data], { type: image.type }));
  }
</script>

<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { nanoid } from "nanoid";
  import { PNG } from "pngjs/browser";
  import _ from "~lodash";
  import { t } from "@/lib/i18n";
  import { MimeType } from "@/lib/utils/virtual-file-system";
  import { getModal } from "#/modal/Modal.svelte";
  import MarkdownDialogModal from "#/modal/MarkdownDialogModal.svelte";
  import CrossIcon from "~icons/mingcute/close-fill";
  import HelpIcon from "~icons/mingcute/question-line";

  export let label = "";
  export let directory = "";
  export let image: Nullable<ImageFileData> = null;
  export let options: {
    required?: boolean;
    help?: string;
  } = {};

  const id = nanoid();
  const dispatch = createEventDispatcher();

  let url: string;
  $: url = createObjectURL(image);

  let invalid = false;
  let error = "";

  const setError = (msg: string) => {
    error = msg;
    invalid = msg.length > 0;
  };

  function validate(file: Nullable<File>): boolean {
    if (file == null) {
      if (options.required) {
        setError("forms.common.error.required");
      }
      return false;
    }
    if (!MimeType.isMatch("png", file.type)) {
      setError("forms.common.error.unsupported-file-format");
      return false;
    }
    setError("");
    return true;
  }

  function dispatchChangeEvent(): void {
    directory = directory.replaceAll(/[^ a-zA-Z0-9_.+-]/g, "");
    dispatch("change", { directory, image });
  }

  async function loadImage(file: Nullable<File>): Promise<void> {
    directory = "";
    if (!validate(file) || file == null) {
      image = null;
      dispatchChangeEvent();
      return Promise.resolve();
    }

    const buffer = await file.arrayBuffer();
    new PNG({}).parse(buffer, (_, png) => {
      image = {
        name: file.name,
        type: file.type,
        data: buffer,
        dimension: {
          width: png.width,
          height: png.height,
        },
      };

      dispatchChangeEvent();
    });
  }

  async function onFileDrop(event: DragEvent): Promise<void> {
    const { dataTransfer } = event;
    if (!dataTransfer) return;

    if (dataTransfer.items) {
      for (const item of dataTransfer.items) {
        if (item.kind === "file") {
          await loadImage(item.getAsFile());
          break;
        }
      }
    } else if (dataTransfer.files) {
      await loadImage(dataTransfer.files[0]);
    }
  }

  async function onFileChange(event: Event): Promise<void> {
    if (event.target instanceof HTMLInputElement) {
      await loadImage(event.target.files?.item(0));
    }
  }

  function clear(): void {
    url = "";
    directory = "";
    image = null;
    validate(null);
    dispatchChangeEvent();
  }
</script>

<MarkdownDialogModal {id} markdown={options.help} />

<div class="image-file">
  {#if label}
    <div class="label-row">
      <span class="label">{label}</span>
      {#if options.required}
        <span class="required"> {$t("forms.common.required-mark")} </span>
      {/if}
    </div>
  {/if}
  <div class="image-row" on:dragover|preventDefault on:drop|preventDefault={onFileDrop}>
    {#if image == null}
      <div class="select-area">
        <span>{$t("forms.image-file.select-area.dnd-files-here-or")}</span>
        <label class="browse">
          <span>{$t("forms.image-file.select-area.browse")}</span>
          <input class="hidden" on:change={onFileChange} type="file" />
        </label>
      </div>
    {:else}
      <div class="image-data">
        <div class="preview-wrapper">
          <button class="clear-button" on:click={clear}>
            <CrossIcon />
          </button>
          <label class="preview">
            <img src={url} alt={image.name} />
            <input class="hidden" on:change={onFileChange} type="file" />
          </label>
        </div>

        <div class="data">
          <label class="data-entry sub-directory">
            <span>{$t("forms.image-file.image-data.sub-directory")}</span>
            <input type="text" bind:value={directory} on:input={dispatchChangeEvent} />
          </label>
          <label class="data-entry filename">
            <span>{$t("forms.image-file.image-data.filename")}</span>
            <input type="text" bind:value={image.name} on:input={dispatchChangeEvent} />
          </label>
          <div class="data-entry width">
            <span>{$t("forms.image-file.image-data.width")}</span>
            <span>{_.get(image, ["dimension", "width"], "")}</span>
          </div>
          <div class="data-entry height">
            <span>{$t("forms.image-file.image-data.height")}</span>
            <span>{_.get(image, ["dimension", "height"], "")}</span>
          </div>
        </div>
      </div>
    {/if}
  </div>
  {#if invalid && error}
    <span class="error">{$t(error)}</span>
  {/if}
  {#if options.help}
    <button class="help-button" on:click={() => getModal(id)?.open()}>
      <HelpIcon />
    </button>
  {/if}
</div>

<style lang="postcss">
  .image-file {
    @apply relative flex flex-col gap-y-0.5;
  }

  .required {
    @apply text-lg font-bold text-ui-red;
  }

  .select-area {
    @apply select-none rounded border-2 border-dashed border-base-color px-8 py-8 text-center text-lg;
  }

  .browse {
    @apply inline-block cursor-pointer rounded bg-ui-blue px-3 py-1.5 font-bold text-ui-white;
  }

  .image-data {
    @apply relative flex gap-4 rounded border-2 border-base-color;
  }

  .sub-directory > span {
    @apply cursor-pointer;
  }

  .preview-wrapper {
    @apply relative w-1/4 border-r-2 border-base-color pb-[25%];
  }

  .clear-button {
    @apply absolute right-2 top-2 cursor-pointer;
  }

  .preview {
    @apply absolute left-1/2 top-1/2 flex h-fit w-fit -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center;
  }

  .preview > img {
    @apply border border-light;
  }

  .data {
    @apply grid flex-grow grid-cols-[max-content_1fr] items-center gap-2 p-4;
  }

  .data-entry {
    @apply contents;
  }

  .data-entry > input {
    @apply rounded border border-base-color px-2 py-1;
  }

  .error {
    @apply font-bold text-ui-red;
  }

  .help-button {
    @apply invisible absolute right-0 top-0 text-xl;
  }

  .image-file:hover > .help-button {
    @apply visible;
  }
</style>
