<script lang="ts">
  import type { AutomaticsJsonEntry } from "@/lib/utils/automatics-iconpack";
  import _ from "~lodash";
  import { t } from "@/lib/i18n";
  import TextInput from "#/widget/forms/TextInput.svelte";
  import NumberInput from "#/widget/forms/NumberInput.svelte";

  export let entry: AutomaticsJsonEntry;

  let target = "";
  let level: Nullable<number> = null;

  function onTargetChanged({ detail }: CustomEvent<{ value: string }>): void {
    entry.target.name = detail.value;
  }

  function onLevelChanged({ detail }: CustomEvent<{ value: Nullable<number> }>): void {
    if (detail.value == null) {
      _.unset(entry.target, ["metadata", "level"]);
      _.unsetIfEmpty(entry.target, "metadata");
    } else {
      _.set(entry.target, ["metadata", "level"], detail.value);
    }
    entry = entry;
  }

  $: {
    target = entry.target.name;
    level = _.get(entry.target, ["metadata", "level"], null) as Nullable<number>;
  }
</script>

<div class="target-editor">
  <TextInput
    label={$t("iconpack-editor.target.label")}
    on:change={onTargetChanged}
    options={{
      required: true,
      help: $t("iconpack-editor.target.help"),
      placeholder: "$enemy_boar",
    }}
    value={target}
  />

  <div class="metadata">
    <NumberInput
      label={$t("iconpack-editor.level.label")}
      on:change={onLevelChanged}
      options={{
        min: 1,
        max: 3,
        help: $t("iconpack-editor.level.help"),
        placeholder: $t("iconpack-editor.level.placeholder"),
      }}
      value={level}
    />
  </div>
</div>

<style>
  .target-editor {
    @apply flex flex-col gap-2.5;
  }
</style>
