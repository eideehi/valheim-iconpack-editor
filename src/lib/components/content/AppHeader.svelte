<script lang="ts">
  import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
  import Tools from "#/widget/tools/Tools.svelte";
  import ExportButton from "#/content/iconpack-editor/files-view/ExportButton.svelte";

  export let files: Nullable<VirtualDirectory>;
</script>

<header class="app-header">
  <h1 class="title">Valheim IconPack Editor</h1>
  <div class="actions">
    <Tools />
    {#if files != null}
      <ExportButton {files} />
    {/if}
  </div>
</header>

<style lang="postcss">
  .app-header {
    @apply relative z-10 flex shrink-0 items-center justify-between gap-6 border-b border-base-color px-6 py-3;
  }

  .title {
    @apply whitespace-nowrap text-lg font-bold;
  }

  .actions {
    @apply flex items-center gap-6;
  }
</style>
