<script lang="ts">
  import Modal, { getModal } from "#/modal/Modal.svelte";
  import CloseIcon from "~icons/mingcute/close-circle-line";

  export let id: string;

  let dialog: HTMLElement;

  function closeModal(): void {
    getModal(id)?.close();
  }

  function clickOutside(event: MouseEvent): void {
    if (!(event.target instanceof Node)) return;
    if (!dialog.contains(event.target)) {
      closeModal();
    }
  }
</script>

{#if id}
  <Modal {id}>
    <div class="outside" on:click={clickOutside}>
      <div bind:this={dialog} class="dialog">
        <button class="close-button" on:click={closeModal}>
          <CloseIcon />
        </button>
        <div class="modal-content">
          <slot />
        </div>
      </div>
    </div>
  </Modal>
{/if}

<style>
  .outside {
    @apply flex h-full w-full items-center justify-center bg-black/10;
  }

  .dialog {
    @apply relative w-[clamp(30rem,50vw,50rem)] rounded border-2 border-base-color bg-base-color px-10 py-6;
  }

  .close-button {
    @apply absolute right-1.5 top-1.5 text-2xl;
  }
</style>
