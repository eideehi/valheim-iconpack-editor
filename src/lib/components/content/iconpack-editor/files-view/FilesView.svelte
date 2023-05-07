<script lang="ts">
  import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
  import Directory from "./Directory.svelte";
  import Tools from "#/content/iconpack-editor/files-view/Tools.svelte";

  export let ref: HTMLElement;
  export let files: VirtualDirectory;
</script>

<div bind:this={ref} class="file-tree">
  <Tools {files} />
  <div class="files">
    <Directory directory={files} />
  </div>
</div>

<style>
  .file-tree {
    @apply flex w-[clamp(17rem,20vw,20rem)] min-w-[clamp(17rem,20vw,20rem)] flex-col overflow-auto;
  }

  .files {
    @apply h-full select-none whitespace-nowrap px-6 pb-4;
  }
</style>
