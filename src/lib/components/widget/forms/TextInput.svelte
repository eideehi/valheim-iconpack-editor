<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import pick from "lodash-es/pick";
  import get from "lodash-es/get";
  import { nanoid } from "nanoid";
  import { t } from "@/lib/i18n";
  import { getModal } from "#/modal/Modal.svelte";
  import MarkdownDialogModal from "#/modal/MarkdownDialogModal.svelte";
  import CloseIcon from "~icons/mingcute/close-fill";
  import HelpIcon from "~icons/mingcute/question-line";

  export let label = "";
  export let value: string;
  export let options: {
    disabled?: boolean;
    required?: boolean;
    placeholder?: string;
    validation?: Predicate1<string>;
    help?: string;
  } = {};

  const inputOptions = pick(options, ["disabled", "required"]);
  const validation = get(options, "validation", () => true);

  const id = nanoid();
  const dispatcher = createEventDispatcher();

  let invalid = false;
  let error = "";

  const setError = (msg: string) => {
    error = msg;
    invalid = msg.length > 0;
  };

  function update({ target }: Event): void {
    if (target instanceof HTMLInputElement) {
      ({ value } = target);
      dispatcher("change", { value });
      validate();
    }
  }

  function validate(): void {
    let isEmpty = !value;
    if (isEmpty && options.required) {
      setError("forms.common.error.required");
      return;
    }
    if (!isEmpty && !validation(value)) {
      setError("forms.common.error.invalid-text-format");
      return;
    }
    setError("");
  }

  function clear(): void {
    value = undefined;
    dispatcher("change", { value });
    validate();
  }
</script>

<MarkdownDialogModal {id} markdown={options.help} />

<div class="input-container" class:disabled={options.disabled}>
  {#if label}
    <div class="label-row">
      <span class="label">{label}</span>
      {#if options.required}
        <span class="required"> {$t("forms.common.required-mark")} </span>
      {/if}
    </div>
  {/if}
  <div class="input-row" class:invalid>
    <input
      {...inputOptions}
      bind:value
      class="input"
      on:focusout={validate}
      on:input={update}
      on:keydown
      on:keyup
      type="text"
    />
    {#if options.placeholder && !value}
      <span class="placeholder">{options.placeholder}</span>
    {/if}
    {#if !options.required}
      <button class="clear-button" on:click={clear}>
        <CloseIcon />
      </button>
    {/if}
  </div>
  {#if invalid && error}
    <span class="error">{$t(error)}</span>
  {/if}
  {#if !options.disabled && options.help}
    <button class="help-button" on:click={() => getModal(id)?.open()}>
      <HelpIcon />
    </button>
  {/if}
</div>

<style lang="postcss">
  .input-container {
    @apply relative flex flex-col gap-y-0.5;
  }

  .input-container.disabled {
    @apply opacity-50;
  }

  .required {
    @apply text-lg font-bold text-ui-red;
  }

  .input-row {
    @apply relative flex rounded border-2 border-base-color;
  }

  .input-row:hover {
    @apply border-hover;
  }

  .input-row:focus-within {
    @apply border-ui-blue;
  }

  .input-row.invalid {
    @apply border-ui-red;
  }

  .input {
    @apply flex-grow p-2;
  }

  .input-container.disabled .input {
    @apply cursor-not-allowed;
  }

  .placeholder {
    @apply pointer-events-none absolute p-2 opacity-40;
  }

  .clear-button {
    @apply mr-2;
  }

  .input-container:hover > .help-button {
    @apply visible;
  }

  .error {
    @apply font-bold text-ui-red;
  }

  .help-button {
    @apply invisible absolute right-0 top-0 text-xl;
  }
</style>
