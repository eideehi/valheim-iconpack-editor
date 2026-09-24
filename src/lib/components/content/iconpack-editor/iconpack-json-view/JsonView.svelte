<script lang="ts">
  import type {
    AutomaticsIconPackJson,
    AutomaticsJsonEntry,
  } from "@/lib/utils/automatics-iconpack";
  import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
  import { tick } from "svelte";
  import _ from "~lodash";
  import { t } from "@/lib/i18n";
  import { iconpack } from "@/lib/utils/automatics-iconpack";
  import SearchBar from "#/widget/common/SearchBar.svelte";
  import Entry from "#/content/iconpack-editor/iconpack-json-view/Entry.svelte";

  export let ref: Nullable<HTMLElement>;
  export let files: VirtualDirectory;
  export let json: AutomaticsIconPackJson;
  export let activeEntry: AutomaticsJsonEntry;
  export let lastSavedEntry: Nullable<AutomaticsJsonEntry> = null;

  let entriesElement: Nullable<HTMLElement> = null;
  let searchKeyword = "";

  $: hasVisibleEntries = json.some((entry) => isKeywordMatch(entry, searchKeyword));

  $: void scrollToSaved(lastSavedEntry);

  async function scrollToSaved(saved: Nullable<AutomaticsJsonEntry>): Promise<void> {
    if (saved == null) return;
    if (!isKeywordMatch(saved, searchKeyword)) searchKeyword = "";
    await tick();
    entriesElement?.querySelector(".entry-wrapper.selected")?.scrollIntoView({ block: "nearest" });
  }

  function isKeywordMatch(entry: AutomaticsJsonEntry, keyword: string): boolean {
    return entry.target.name.toLowerCase().includes(keyword.toLowerCase());
  }

  function sort(json: AutomaticsIconPackJson): AutomaticsIconPackJson {
    return _.sortBy<AutomaticsJsonEntry>(json, ["target.name", "target.metadata.level"]);
  }
</script>

<div bind:this={ref} class="json-view">
  <div class="search-wrapper">
    <SearchBar bind:keyword={searchKeyword} />
  </div>
  <div bind:this={entriesElement} class="entries">
    {#each sort(json) as entry (entry)}
      {@const selected = iconpack.isTargetEqual(activeEntry, entry)}
      <div class="entry-wrapper" class:active={isKeywordMatch(entry, searchKeyword)} class:selected>
        <Entry {files} {entry} {selected} />
      </div>
    {/each}
  </div>
  {#if json.length === 0}
    <p class="message">{$t("json-view.empty")}</p>
  {:else if !hasVisibleEntries}
    <p class="message">{$t("json-view.no-results")}</p>
  {/if}
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
    @apply flex flex-col gap-0.5 p-4;
  }

  .entry-wrapper {
    @apply rounded border-2 border-transparent p-0.5;
  }

  .entry-wrapper.selected {
    @apply border-ui-blue bg-ui-blue/10;
  }

  .entry-wrapper:not(.active) {
    @apply hidden;
  }

  .message {
    @apply p-4 text-center opacity-50;
  }
</style>
