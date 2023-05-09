<script lang="ts">
  import type { AutomaticsJsonEntry } from "@/lib/utils/automatics-iconpack";
  import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
  import type { IconPackEditorContext } from "#/content/iconpack-editor/context";
  import { getContext } from "svelte";
  import _ from "~lodash";
  import { t } from "@/lib/i18n";
  import { iconpack } from "@/lib/utils/automatics-iconpack";
  import { iconPackEditorContextKey } from "#/content/iconpack-editor/context";

  export let files: VirtualDirectory;
  export let entry: AutomaticsJsonEntry;

  const { openEntry } = getContext<IconPackEditorContext>(iconPackEditorContextKey);

  let name: string;
  let level: number;

  let url = "";
  $: {
    const icon = iconpack.getSpriteFile(files, entry);
    if (icon != null) {
      url = URL.createObjectURL(new Blob([icon.data], { type: icon.mimeType }));
    }
  }

  $: {
    name = entry.target.name;
    level = _.get(entry.target, "metadata.level", 0);
  }
</script>

<button class="entry" on:click={() => openEntry(entry)}>
  {#if url}
    <img class="icon" src={url} alt={entry.target.name} />
  {/if}
  <span>{name}</span>
  {#if level > 0}
    <span>{$t("json-view.entry.level", { level })}</span>
  {/if}
</button>

<style lang="postcss">
  .entry {
    @apply flex items-center gap-2.5;
  }

  .icon {
    @apply h-[32px] w-[32px] border border-light;
  }
</style>
