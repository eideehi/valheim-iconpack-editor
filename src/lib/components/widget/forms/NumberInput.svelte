<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import _ from "~lodash";
  import { nanoid } from "nanoid";
  import Decimal from "decimal.js-light";
  import { t } from "@/lib/i18n";
  import { getModal } from "#/modal/Modal.svelte";
  import MarkdownDialogModal from "#/modal/MarkdownDialogModal.svelte";
  import DownIcon from "~icons/bxs/chevron-down";
  import UpIcon from "~icons/bxs/chevron-up";
  import CrossIcon from "~icons/mingcute/close-fill";
  import HelpIcon from "~icons/mingcute/question-line";

  export let label: Nullable<string> = null;
  export let value: Nullable<number> = null;
  export let options: {
    disabled?: boolean;
    required?: boolean;
    placeholder?: Nullable<string>;
    max?: Nullable<number>;
    min?: Nullable<number>;
    step?: Nullable<number>;
    help?: Nullable<string>;
  } = {};

  const id = nanoid();
  const dispatch = createEventDispatcher();

  let textValue: string;
  $: textValue = value == null ? "" : (value as number).toString();

  let min: number;
  $: min = options.min != null ? options.min : 0;

  let max: number;
  $: max = options.max != null ? options.max : Number.MAX_SAFE_INTEGER;

  let step = 1;
  $: step = options.step != null ? options.step : 1;

  const clamp = (decimal: Decimal): Decimal => {
    if (decimal.gt(max)) return new Decimal(max);
    if (decimal.lt(min)) return new Decimal(min);
    return decimal;
  };

  function validate(event: Event): void {
    let target = event.target;
    if (target instanceof HTMLInputElement) {
      if (target.value === "-") {
        return;
      }
      if (/^-?\d+(\.(\d+)?)?$/g.test(target.value)) {
        value = clamp(new Decimal(target.value)).toNumber();
        dispatch("change", { value });
      } else {
        target.value = target.value.slice(0, -1);
        textValue = target.value;
        if (_.isEmpty(textValue)) {
          value = null;
          dispatch("change", { value });
        }
      }
    }
  }

  function clear(): void {
    value = null;
    dispatch("change", { value });
  }

  function stepValue(increment: boolean): void {
    if (value == null) {
      value = step;
    } else if (increment) {
      value = clamp(new Decimal(value).plus(step)).toNumber();
    } else {
      value = clamp(new Decimal(value).minus(step)).toNumber();
    }
    dispatch("change", { value });
  }
</script>

<MarkdownDialogModal {id} markdown={options.help} />

<div class="number-input">
  {#if label}
    <div class="label-row">
      <span class="label">{label}</span>
      {#if options.required}
        <span class="required"> {$t("forms.common.required-mark")} </span>
      {/if}
    </div>
  {/if}
  <div class="input-row">
    <div class="input-container">
      <input
        bind:value={textValue}
        class="input"
        inputmode="decimal"
        on:input={validate}
        type="text"
      />
      {#if options.placeholder && !textValue}
        <span class="placeholder">{options.placeholder}</span>
      {/if}
      {#if !options.required}
        <button class="clear-button" on:click={clear}>
          <CrossIcon />
        </button>
      {/if}
    </div>
    <div class="spinner-container">
      <button on:click={() => stepValue(true)}>
        <UpIcon />
      </button>
      <button on:click={() => stepValue(false)}>
        <DownIcon />
      </button>
    </div>
  </div>
  {#if !options.disabled && !_.isEmpty(options.help)}
    <button class="help-button" on:click={() => getModal(id)?.open()}>
      <HelpIcon />
    </button>
  {/if}
</div>

<style lang="postcss">
  .number-input {
    @apply relative flex flex-col gap-y-0.5;
  }

  .label-row {
    @apply pt-1;
  }

  .required {
    @apply text-lg font-bold text-ui-red;
  }

  .input-row {
    @apply flex rounded border-2 border-base-color;
  }

  .input-row:hover {
    @apply border-hover;
  }

  .input-row:focus-within {
    @apply border-ui-blue;
  }

  .input-container {
    @apply relative flex grow border-r-2 border-base-color;
  }

  .input-row:hover > .input-container {
    @apply border-hover;
  }

  .input-row:focus-within > .input-container {
    @apply border-ui-blue;
  }

  .input {
    @apply grow py-2 pl-2 pr-8;
  }

  .placeholder {
    @apply pointer-events-none absolute p-2 opacity-40;
  }

  .clear-button {
    @apply absolute inset-y-0 right-2;
  }

  .spinner-container {
    @apply flex flex-col;
  }

  .spinner-container > button {
    @apply text-base;
  }

  .spinner-container > button:last-child {
    @apply border-t-2 border-base-color;
  }

  .input-row:hover .spinner-container > button:last-child {
    @apply border-hover;
  }

  .input-row:focus-within > .spinner-container > button:last-child {
    @apply border-ui-blue;
  }

  .number-input:hover > .help-button {
    @apply visible;
  }

  .help-button {
    @apply invisible absolute right-0 top-0 text-xl;
  }
</style>
