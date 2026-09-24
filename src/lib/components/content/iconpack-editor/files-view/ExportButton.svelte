<script lang="ts">
  import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
  import { t } from "@/lib/i18n";
  import { vfs } from "@/lib/utils/virtual-file-system";
  import Icon from "~icons/mdi/download";

  export let files: VirtualDirectory;

  let exporting = false;
  let download: HTMLAnchorElement;

  async function exportIconPack(): Promise<void> {
    if (!download || exporting) return;
    exporting = true;
    try {
      const value = await vfs.zip(files);
      const url = URL.createObjectURL(value);
      download.href = url;
      download.click();
      setTimeout(() => URL.revokeObjectURL(url), 40_000);
    } finally {
      exporting = false;
    }
  }
</script>

<div class="export-iconpack">
  <button on:click={exportIconPack} disabled={exporting}>
    <Icon />
    <span>{$t("iconpack-editor.export")}</span>
  </button>
  <a
    bind:this={download}
    class="download"
    aria-hidden="true"
    download="{files.name}.zip"
    href="#download"
    tabindex="-1"
  >
    dummy
  </a>
</div>

<style lang="postcss">
  .export-iconpack > button {
    @apply flex items-center gap-2 whitespace-nowrap rounded border border-base-color px-3 py-1 text-sm font-bold;
  }

  .export-iconpack > button:hover {
    @apply bg-dark;
  }

  .export-iconpack > button:disabled {
    @apply cursor-wait opacity-50;
  }

  .download {
    @apply absolute -left-[128px] -top-[128px];
  }
</style>
