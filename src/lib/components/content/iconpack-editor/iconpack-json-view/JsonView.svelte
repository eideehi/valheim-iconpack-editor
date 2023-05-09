<script lang="ts">
  import type {
    AutomaticsIconPackJson,
    AutomaticsJsonEntry,
  } from "@/lib/utils/automatics-iconpack";
  import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
  import _ from "~lodash";
  import SearchBar from "#/widget/common/SearchBar.svelte";
  import Entry from "#/content/iconpack-editor/iconpack-json-view/Entry.svelte";

  export let ref: HTMLElement;
  export let files: VirtualDirectory;
  export let json: AutomaticsIconPackJson;

  let searchKeyword = "";

  function isKeywordMatch(entry: AutomaticsJsonEntry, keyword: string): boolean {
    return entry.target.name.includes(keyword);
  }

  function sort(json: AutomaticsIconPackJson): AutomaticsIconPackJson {
    return _.sortBy<AutomaticsJsonEntry>(json, ["target.name", "target.metadata.level"]);
  }
</script>

<div bind:this={ref} class="json-view">
  <div class="search-wrapper">
    <SearchBar bind:keyword={searchKeyword} />
  </div>
  <div class="entries">
    {#each sort(json) as entry}
      <div class="entry-wrapper" class:active={isKeywordMatch(entry, searchKeyword)}>
        <Entry {files} {entry} />
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .json-view {
    @apply flex w-[clamp(17rem,20vw,20rem)] min-w-[clamp(17rem,20vw,20rem)] flex-col overflow-auto;
  }

  .search-wrapper {
    @apply m-1.5 rounded border-2 border-base-color p-1;
  }

  .search-wrapper:hover {
    @apply border-hover;
  }

  .search-wrapper:focus-within {
    @apply border-ui-blue;
  }

  .entries {
    @apply flex flex-col gap-2.5 p-5;
  }

  .entry-wrapper:not(.active) {
    @apply hidden;
  }
</style>
