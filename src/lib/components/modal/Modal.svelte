<script context="module" lang="ts">
  import type { ModalApi } from "#/modal/Modal.svelte";

  const modals: Record<string, ModalApi> = {};

  export function getModal(id: string): Nullable<ModalApi> {
    return modals[id];
  }
</script>

<script lang="ts">
  import { onDestroy } from "svelte";
  import { modal } from "@/lib/store/modal";

  export let id = "";

  let container: HTMLElement;
  let visible = false;
  let onCloseCallback: Nullable<Callback>;

  if (modals[id]) {
    modals[id].close();
  }

  export function open(onClose?: Callback): void {
    visible = true;
    modal.set("show");
    onCloseCallback = onClose;
  }

  export function close(): void {
    visible = false;
    modal.set("hidden");
    if (onCloseCallback != null) {
      onCloseCallback();
    }
  }

  modals[id] = { open, close };

  $: if (visible && container) {
    container.parentNode?.removeChild(container);
    document.body.append(container);
  }

  onDestroy(() => {
    delete modals[id];
  });
</script>

{#if visible}
  <div class="modal-container" bind:this={container}>
    <slot />
  </div>
{/if}

<style lang="postcss">
  .modal-container {
    @apply absolute left-0 top-0 z-50 h-[100vh] w-[100vw];
  }
</style>
