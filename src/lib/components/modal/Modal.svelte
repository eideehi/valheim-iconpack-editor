<script context="module" lang="ts">
  import type { ModalApi } from "#/modal/Modal.svelte";

  const modals: Record<string, ModalApi> = {};
  const openStack: string[] = [];

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

  function removeFromStack(): void {
    const index = openStack.lastIndexOf(id);
    if (index >= 0) openStack.splice(index, 1);
  }

  export function open(onClose?: Callback): void {
    removeFromStack();
    openStack.push(id);
    visible = true;
    modal.set("show");
    onCloseCallback = onClose;
  }

  export function close(): void {
    removeFromStack();
    visible = false;
    modal.set("hidden");
    const callback = onCloseCallback;
    onCloseCallback = null;
    if (callback != null) {
      callback();
    }
  }

  function onKeyDown(event: KeyboardEvent): void {
    if (!visible || event.key !== "Escape" || event.defaultPrevented) return;
    if (openStack[openStack.length - 1] !== id) return;
    event.preventDefault();
    close();
  }

  modals[id] = { open, close };

  $: if (visible && container) {
    container.parentNode?.removeChild(container);
    document.body.append(container);
  }

  onDestroy(() => {
    if (visible) removeFromStack();
    delete modals[id];
  });
</script>

<svelte:window on:keydown={onKeyDown} />

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
