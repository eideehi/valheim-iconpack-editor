<script lang="ts">
  import type { IconPackEditorContext } from "#/content/iconpack-editor/context";
  import { getContext } from "svelte";
  import { t } from "@/lib/i18n";
  import { iconPackEditorContextKey } from "#/content/iconpack-editor/context";
  import Button from "#/widget/forms/Button.svelte";
  import AddEntryIcon from "~icons/mdi/content-save-outline";
  import OverwriteIcon from "~icons/mdi/content-save-edit-outline";
  import DeleteIcon from "~icons/mdi/delete-outline";
  import type { JsonEditorContext } from "./context";
  import { jsonEditorContextKey } from "./context";

  const { saveEntry, deleteEntry } = getContext<IconPackEditorContext>(iconPackEditorContextKey);
  const { isValid, isOverwrite } = getContext<JsonEditorContext>(jsonEditorContextKey);
</script>

<div class="buttons">
  {#if $isOverwrite}
    <Button
      icon={OverwriteIcon}
      on:click={saveEntry}
      options={{ disabled: !$isValid }}
      text={$t("iconpack-editor.overwrite-entry")}
    />
    <Button icon={DeleteIcon} on:click={deleteEntry} text={$t("iconpack-editor.delete-entry")} />
  {:else}
    <Button
      icon={AddEntryIcon}
      on:click={saveEntry}
      options={{ disabled: !$isValid }}
      text={$t("iconpack-editor.add-entry")}
    />
  {/if}
</div>

<style lang="postcss">
  .buttons {
    @apply flex flex-col gap-2.5;
  }
</style>
