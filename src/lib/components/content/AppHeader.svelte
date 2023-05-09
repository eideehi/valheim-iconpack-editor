<script lang="ts">
  import { header } from "@/lib/store/header";
  import CloseIcon from "~icons/mingcute/close-fill";
</script>

<header class="app-header" class:closed={$header === "hidden"}>
  <button class="close-button" on:click={() => header.set("hidden")}>
    <CloseIcon />
  </button>
  <h1 class="title">Valheim IconPack Editor</h1>
</header>

<style lang="postcss">
  .app-header {
    @apply relative;
  }

  .app-header.closed {
    @apply hidden;
  }

  .app-header > .close-button {
    @apply invisible absolute right-4 top-4;
  }

  .app-header:hover > .close-button {
    @apply visible;
  }

  .app-header > .title {
    @apply py-6 text-center text-3xl font-bold;
  }
</style>
