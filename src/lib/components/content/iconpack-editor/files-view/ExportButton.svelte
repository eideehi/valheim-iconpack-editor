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
      download.href = URL.createObjectURL(value);
      download.click();
    });
  }
</script>

<div class="export-iconpack">
  <button on:click={exportIconPack}>
    <Icon />
  </button>
  <a bind:this={download} download="{fileName}.zip" href="#download" />
</div>

<style>
  .export-iconpack {
    @apply flex items-center justify-center p-0.5;
  }

  .export-iconpack:hover {
    @apply rounded bg-dark;
  }
</style>
