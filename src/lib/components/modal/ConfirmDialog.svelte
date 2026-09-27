<script lang="ts">
  import { nanoid } from "nanoid";
  import { t } from "@/lib/i18n";
  import { getModal } from "#/modal/Modal.svelte";
  import DialogModal from "#/modal/DialogModal.svelte";
  import Button from "#/widget/forms/Button.svelte";

  const id = nanoid();

  let message = "";
  let confirmLabel = "";
  let danger = false;
  let cancelable = true;
  let confirmed = false;
  let pending = false;

  // Resolves true only when the confirm button is pressed; any other close means cancel.
  export function ask(
    text: string,
    options: { confirmLabel?: string; danger?: boolean; cancelable?: boolean } = {}
  ): Promise<boolean> {
    if (pending) getModal(id)?.close();
    message = text;
    confirmLabel = options.confirmLabel ?? $t("confirm-dialog.ok");
    danger = options.danger ?? false;
    cancelable = options.cancelable ?? true;
    confirmed = false;
    return new Promise((resolve) => {
      const modal = getModal(id);
      if (modal == null) {
        resolve(false);
        return;
      }
      pending = true;
      modal.open(() => {
        pending = false;
        resolve(confirmed);
      });
    });
  }

  function close(): void {
    getModal(id)?.close();
  }

  function confirm(): void {
    confirmed = true;
    close();
  }
</script>

<DialogModal {id}>
  <div class="confirm-dialog">
    <p class="message">{message}</p>
    <div class="buttons">
      {#if cancelable}
        <Button on:click={close} text={$t("confirm-dialog.cancel")} />
      {/if}
      <Button
        on:click={confirm}
        options={{ variant: danger ? "danger" : undefined }}
        text={confirmLabel}
      />
    </div>
  </div>
</DialogModal>

<style lang="postcss">
  .confirm-dialog {
    @apply flex flex-col gap-6;
  }

  .message {
    @apply whitespace-pre-wrap break-words;
  }

  .buttons {
    @apply flex justify-end gap-2.5;
  }
</style>
