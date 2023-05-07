<script lang="ts">
  import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
  import { t } from "@/lib/i18n";
  import { iconpack } from "@/lib/utils/automatics-iconpack";
  import Button from "#/widget/forms/Button.svelte";
  import TextInput from "#/widget/forms/TextInput.svelte";

  export let files: VirtualDirectory;

  function validateIconPackName(name: string): boolean {
    return /^[ a-zA-Z0-9_.+-]+$/g.test(name.trim());
  }

  let iconPackName = "";
  let createButtonDisabled: boolean;

  $: {
    createButtonDisabled = iconPackName.trim().length === 0;
  }

  function create(): void {
    files = iconpack.createIconPack(iconPackName.trim());
  }
</script>

<div class="create-iconpack">
  <h2 class="caption">{$t("start-page.create-iconpack.caption")}</h2>
  <TextInput
    bind:value={iconPackName}
    label={$t("start-page.create-iconpack.iconpack-name.label")}
    options={{
      required: true,
      help: $t("start-page.create-iconpack.iconpack-name.help"),
      validation: validateIconPackName,
    }}
  />
  <Button
    on:click={create}
    options={{ disabled: createButtonDisabled }}
    text={$t("start-page.create-iconpack.create-iconpack")}
  />
</div>

<style>
  .create-iconpack {
    @apply flex flex-col gap-y-4;
  }

  .caption {
    @apply text-xl;
  }
</style>
