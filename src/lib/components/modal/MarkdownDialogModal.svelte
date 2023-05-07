<script lang="ts">
  import Markdown from "markdown-it";
  import DialogModal from "#/modal/DialogModal.svelte";

  export let id: string;
  export let markdown: string;
</script>

{#if markdown}
  <DialogModal {id}>
    <div class="markdown">
      {@html new Markdown().render(markdown)}
    </div>
  </DialogModal>
{/if}
