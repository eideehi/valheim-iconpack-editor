<script lang="ts">
  import { t } from "@/lib/i18n";
  import { createEventDispatcher } from "svelte";
  import { nanoid } from "nanoid";
  import { theme } from "@/lib/store/theme";
  import { getModal } from "#/modal/Modal.svelte";
  import MarkdownDialogModal from "#/modal/MarkdownDialogModal.svelte";
  import CheckboxOutlineIcon from "~icons/mdi/checkbox-blank-outline";
  import CheckedLightIcon from "~icons/mdi/checkbox-outline";
  import CheckedDarkIcon from "~icons/mdi/checkbox-marked";
  import HelpIcon from "~icons/mingcute/question-line";

  export let label: Nullable<string> = null;
  export let value = false;
  export let options: {
    help?: Nullable<string>;
  } = {};

  const id = nanoid();
  const dispatch = createEventDispatcher();

  function toggle(): void {
    value = !value;
    dispatch("change", { value: value });
  }
</script>

<MarkdownDialogModal {id} markdown={options.help} />

<div class="checkbox">
  <button type="button" class="checkbox-input" on:click={toggle}>
    <span class="icon">
      {#if value}
        <svelte:component this={$theme === "light" ? CheckedLightIcon : CheckedDarkIcon} />
      {:else}
        <CheckboxOutlineIcon />
      {/if}
    </span>
    {#if label}
      <span class="label">{label}</span>
    {/if}
  </button>
  {#if options.help}
    <button
      type="button"
      class="help-button"
      aria-label={$t("forms.common.help")}
      title={$t("forms.common.help")}
      on:click={() => getModal(id)?.open()}
    >
      <HelpIcon />
    </button>
  {/if}
</div>

<style lang="postcss">
  .checkbox {
    @apply relative;
  }

  .checkbox-input {
    @apply flex items-center gap-x-1;
  }

  .icon {
    @apply text-xl;
  }

  .checkbox:hover > .help-button,
  .help-button:hover,
  .help-button:focus-visible {
    @apply opacity-100;
  }

  .help-button {
    @apply absolute right-0 top-0 text-xl opacity-50;
  }
</style>
