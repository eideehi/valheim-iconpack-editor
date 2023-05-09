<script lang="ts">
  import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
  import Icon from "~icons/mdi/alpha-t-box";

  export let files: VirtualDirectory;
  let active = false;

  function convert(): void {
    console.log("do convert");
  }
</script>

<div class="convert-to-thunderstore" class:active>
  <button disabled={active} on:click={convert}>
    <Icon />
  </button>
</div>

<style lang="postcss">
  .convert-to-thunderstore {
    @apply flex items-center justify-center rounded p-0.5;
  }

  .convert-to-thunderstore.active {
    @apply bg-dark text-white;
  }

  .convert-to-thunderstore:not(.active):hover {
    @apply bg-dark;
  }
</style>
