<script lang="ts">
  import type { Component } from "svelte";

  export let text: Nullable<string> = null;
  export let icon: Nullable<Component> = null;
  export let options: {
    disabled?: boolean;
    variant?: "danger";
  } = {};
</script>

<button
  class="button"
  class:danger={options.variant === "danger"}
  disabled={options.disabled}
  on:click
>
  {#if icon}
    <svelte:component this={icon} />
  {/if}
  {#if text}
    <span>{text}</span>
  {/if}
</button>

<style lang="postcss">
  .button {
    @apply flex items-center justify-center gap-x-1 rounded border-2 border-base-color px-2 py-1.5 font-bold text-base-color;
  }

  .button[disabled] {
    @apply opacity-40;
  }

  .button:not([disabled]):hover {
    @apply border-hover text-hover;
  }

  .button:not([disabled]):focus {
    @apply border-ui-blue;
  }

  .button.danger {
    @apply border-ui-red text-ui-red;
  }

  .button.danger:not([disabled]):hover {
    @apply border-ui-red bg-ui-red/10 text-ui-red;
  }

  .button.danger:not([disabled]):focus {
    @apply border-ui-blue;
  }
</style>
