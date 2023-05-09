<script lang="ts">
  import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
  import ExportButton from "#/content/iconpack-editor/files-view/ExportButton.svelte";

  export let files: VirtualDirectory;
</script>

<div class="tools">
  <ExportButton {files} />
</div>

<style lang="postcss">
  .tools {
    @apply flex justify-end gap-4 px-4 py-2.5 text-2xl;
  }
</style>
