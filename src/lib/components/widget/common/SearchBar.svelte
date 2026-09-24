<script lang="ts">
  import { t } from "@/lib/i18n";
  import SearchIcon from "~icons/mdi/magnify";
  import CloseIcon from "~icons/mingcute/close-fill";

  export let keyword: string;

  function clear(): void {
    keyword = "";
  }
</script>

<div class="search">
  <div class="icon">
    <SearchIcon />
  </div>
  <input
    aria-label={$t("json-view.search")}
    title={$t("json-view.search")}
    class="input"
    bind:value={keyword}
    type="text"
  />
  {#if keyword}
    <button
      type="button"
      class="clear-button"
      aria-label={$t("json-view.clear-search")}
      title={$t("json-view.clear-search")}
      on:click={clear}
    >
      <CloseIcon />
    </button>
  {/if}
</div>

<style lang="postcss">
  .search {
    @apply flex items-center;
  }

  .icon {
    @apply text-xl opacity-50;
  }

  .input {
    @apply flex-grow px-1;
  }

  .clear-button {
    @apply opacity-50;
  }

  .clear-button:hover,
  .clear-button:focus-visible {
    @apply opacity-100;
  }
</style>
