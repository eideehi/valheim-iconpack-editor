<script lang="ts">
  import type { VirtualDirectory } from "./lib/utils/virtual-file-system";
  import { i18nInitialization } from "./init/i18n";
  import { modal } from "@/lib/store/modal";
  import Modal from "#/modal/Modal.svelte";
  import AppHeader from "#/content/AppHeader.svelte";
  import StartPage from "#/content/start-page/StartPage.svelte";
  import IconPackEditor from "#/content/iconpack-editor/IconPackEditor.svelte";

  let files: VirtualDirectory;
</script>

<Modal />
<div class="valheim-iconpack-editor" class:show-modal={$modal === "show"}>
  {#await i18nInitialization() then _}
    <AppHeader {files} />
    <main class="main">
      {#if files == null}
        <StartPage bind:files />
      {:else}
        <IconPackEditor bind:files />
      {/if}
    </main>
  {/await}
</div>

<style lang="postcss">
  .valheim-iconpack-editor {
    @apply flex h-[100vh] w-[100vw] flex-col;
  }

  .valheim-iconpack-editor.show-modal {
    @apply blur-[2px];
  }

  .main {
    @apply flex min-h-0 w-full flex-1 flex-col overflow-auto;
  }
</style>
