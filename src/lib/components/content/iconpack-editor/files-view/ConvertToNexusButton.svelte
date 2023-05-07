<script lang="ts">
  import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
  import Icon from "~icons/mdi/alpha-n-box";

  export let files: VirtualDirectory;
  let active = true;

  function convert(): void {
    console.log("do convert");
  }
</script>

<div class="convert-to-nexus" class:active>
  <button disabled={active} on:click={convert}>
    <Icon />
  </button>
</div>

<style>
  .convert-to-nexus {
    @apply flex items-center justify-center rounded p-0.5;
  }

  .convert-to-nexus.active {
    @apply opacity-50;
  }

  .convert-to-nexus:not(.active):hover {
    @apply bg-dark;
  }
</style>
