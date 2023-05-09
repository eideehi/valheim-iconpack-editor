<script lang="ts">
  import SearchIcon from "~icons/mdi/magnify";

  export let keyword: string;
</script>

<div class="search">
  <div class="icon">
    <SearchIcon />
  </div>
  <input class="input" bind:value={keyword} type="text" />
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
