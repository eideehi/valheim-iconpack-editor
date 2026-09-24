<script lang="ts">
  import { t } from "@/lib/i18n";
  import SearchIcon from "~icons/mdi/magnify";

  export let keyword: string;
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
</div>

<style lang="postcss">
  .search {
    @apply flex;
  }

  .icon {
    @apply text-xl opacity-50;
  }

  .input {
    @apply flex-grow px-1;
  }
</style>
