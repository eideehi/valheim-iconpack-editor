<script lang="ts">
  import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
  import { t } from "@/lib/i18n";
  import { iconpack } from "@/lib/utils/automatics-iconpack";
  import Button from "#/widget/forms/Button.svelte";
  import TextInput from "#/widget/forms/TextInput.svelte";

  export let files: VirtualDirectory;

  function validateIconPackName(name: Nullable<string>): boolean {
    if (name == null) return false;
    return /^[ a-zA-Z0-9_.+-]+$/g.test(name.trim());
  }

  let iconPackName = "";
  let createButtonDisabled: boolean;

  $: {
    createButtonDisabled = !validateIconPackName(iconPackName);
  }

  function create(): void {
    // Defensive: re-check validity here too, not just via the disabled button.
    if (createButtonDisabled) return;
    files = iconpack.createIconPack(iconPackName.trim());
  }
</script>

<div class="create-iconpack">
  <h2 class="caption">{$t("start-page.create-iconpack.caption")}</h2>
  <form class="form" novalidate on:submit|preventDefault={create}>
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
      options={{ disabled: createButtonDisabled, type: "submit" }}
      text={$t("start-page.create-iconpack.create-iconpack")}
    />
  </form>
</div>

<style lang="postcss">
  .create-iconpack {
    @apply flex flex-col gap-y-4;
  }

  .form {
    @apply flex flex-col gap-y-4;
  }

  .caption {
    @apply text-xl;
  }
</style>
