<script lang="ts">
  import type { IconPackEditorContext } from "#/content/iconpack-editor/context";
  import { getContext } from "svelte";
  import { t } from "@/lib/i18n";
  import { iconPackEditorContextKey } from "#/content/iconpack-editor/context";
  import Button from "#/widget/forms/Button.svelte";
  import AddEntryIcon from "~icons/mdi/content-save-outline";
  import OverwriteIcon from "~icons/mdi/content-save-edit-outline";
  import DeleteIcon from "~icons/mdi/delete-outline";
  import NewEntryIcon from "~icons/mdi/file-plus-outline";
  import type { JsonEditorContext } from "./context";
  import { jsonEditorContextKey } from "./context";

  const { saveEntry, newEntry, deleteEntry } =
    getContext<IconPackEditorContext>(iconPackEditorContextKey);
  const { isValid, isOverwrite } = getContext<JsonEditorContext>(jsonEditorContextKey);
</script>

<div class="buttons">
  {#if $isOverwrite}
    <Button
      icon={OverwriteIcon}
      on:click={saveEntry}
      options={{ disabled: !$isValid }}
      text={$t("iconpack-editor.save-changes")}
    />
  {:else}
    <Button
      icon={AddEntryIcon}
      on:click={saveEntry}
      options={{ disabled: !$isValid }}
      text={$t("iconpack-editor.add-entry")}
    />
  {/if}
  <Button icon={NewEntryIcon} on:click={newEntry} text={$t("iconpack-editor.new-entry")} />
  {#if $isOverwrite}
    <Button
      icon={DeleteIcon}
      on:click={deleteEntry}
      options={{ variant: "danger" }}
      text={$t("iconpack-editor.delete-entry")}
    />
  {/if}
</div>

<style lang="postcss">
  .buttons {
    @apply flex flex-col gap-2.5;
  }
</style>
