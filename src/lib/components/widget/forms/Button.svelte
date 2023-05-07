<script lang="ts">
  import type { SvelteComponent } from "svelte";

  export let text = "";
  export let icon: typeof SvelteComponent = undefined;
  export let options: {
    disabled?: boolean;
  } = {};
</script>

<button {...options} class="button" on:click>
  {#if icon}
    <svelte:component this={icon} />
  {/if}
  {#if text.length > 0}
    <span>{text}</span>
  {/if}
</button>

<style>
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
</style>
