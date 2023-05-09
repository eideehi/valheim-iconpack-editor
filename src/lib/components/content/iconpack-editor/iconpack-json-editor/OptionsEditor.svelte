<script lang="ts">
  import type { AutomaticsJsonEntry } from "@/lib/utils/automatics-iconpack";
  import type { VirtualFileSystemNode } from "@/lib/utils/virtual-file-system";
  import _ from "~lodash";
  import { t } from "@/lib/i18n";
  import Checkbox from "#/widget/forms/Checkbox.svelte";
  import NumberInput from "#/widget/forms/NumberInput.svelte";

  export let entry: AutomaticsJsonEntry;
  export let spriteFile: VirtualFileSystemNode;

  let hideNameTag = false;
  let iconScaleLargeMap: Nullable<number> = null;
  let iconScaleSmallMap: Nullable<number> = null;

  const addOption = (key: string, value: unknown): void => {
    entry.options = { ..._.merge(entry.options || {}, { [key]: value }) };
  };

  const removeOption = (key: string): void => {
    _.unset(entry, ["options", key]);
    _.unsetIfEmpty(entry, "options");
    entry = { ...entry };
  };

  const updateOption = (key: string, value: unknown): void => {
    if (typeof value === "boolean") {
      if (value) {
        addOption(key, value);
      } else {
        removeOption(key);
      }
    } else if (value != null) {
      addOption(key, value);
    } else {
      removeOption(key);
    }
  };

  function onHideNameTagChanged({ detail }: CustomEvent<{ value: boolean }>): void {
    updateOption("hideNameTag", detail.value);
  }

  function onIconScaleLargeMapChanged({ detail }: CustomEvent<{ value: number }>): void {
    updateOption("iconScaleLargeMap", detail.value);
  }

  function onIconScaleSmallMapChanged({ detail }: CustomEvent<{ value: number }>): void {
    updateOption("iconScaleSmallMap", detail.value);
  }

  $: {
    hideNameTag = _.get(entry, ["options", "hideNameTag"], false);
    iconScaleLargeMap = _.get(entry, ["options", "iconScaleLargeMap"], null) as Nullable<number>;
    iconScaleSmallMap = _.get(entry, ["options", "iconScaleSmallMap"], null) as Nullable<number>;
  }
  $: if (spriteFile == null) {
    updateOption("iconScaleLargeMap", null);
    updateOption("iconScaleSmallMap", null);
  }
</script>

<div class="options-editor">
  <Checkbox
    label={$t("iconpack-editor.hide-name-tag.label")}
    on:change={onHideNameTagChanged}
    options={{ help: $t("iconpack-editor.hide-name-tag.help") }}
    value={hideNameTag}
  />
  {#if spriteFile != null}
    <NumberInput
      value={iconScaleLargeMap}
      on:change={onIconScaleLargeMapChanged}
      label={$t("iconpack-editor.icon-scale-large-map.label")}
      options={{ min: 0.01, step: 0.1, help: $t("iconpack-editor.icon-scale-large-map.help") }}
    />
    <NumberInput
      value={iconScaleSmallMap}
      on:change={onIconScaleSmallMapChanged}
      label={$t("iconpack-editor.icon-scale-small-map.label")}
      options={{ min: 0.01, step: 0.1, help: $t("iconpack-editor.icon-scale-small-map.help") }}
    />
  {/if}
</div>

<style lang="postcss">
  .options-editor {
    @apply flex flex-col gap-2.5;
  }
</style>
