<script lang="ts">
  import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
  import { vfs } from "@/lib/utils/virtual-file-system";
  import Icon from "~icons/mdi/download";

  export let files: VirtualDirectory;

  let fileName: string = files.name;
  let download: HTMLAnchorElement;

  async function exportIconPack(): Promise<void> {
    if (!download) return;
    await vfs.zip(files).then((value) => {
      const url = URL.createObjectURL(value);
      download.href = url;
      download.click();
      setTimeout(() => URL.revokeObjectURL(url), 40_000);
    });
  }
</script>

<div class="export-iconpack">
  <button on:click={exportIconPack}>
    <Icon />
  </button>
  <a bind:this={download} class="download" download="{fileName}.zip" href="#download" tabindex="-1">
    dummy
  </a>
</div>

<style lang="postcss">
  .export-iconpack {
    @apply flex items-center justify-center p-0.5;
  }

  .export-iconpack:hover {
    @apply rounded bg-dark;
  }

  .download {
    @apply absolute -left-[128px] -top-[128px];
  }
</style>
