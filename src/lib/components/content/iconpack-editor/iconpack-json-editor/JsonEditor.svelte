<script lang="ts">
  import type { VirtualFile } from "@/lib/utils/virtual-file-system";
  import type {
    AutomaticsIconPackJson,
    AutomaticsJsonEntry,
  } from "@/lib/utils/automatics-iconpack";
  import type { JsonEditorContext } from "./context";
  import Tools from "#/widget/tools/Tools.svelte";
  import TargetEditor from "./TargetEditor.svelte";
  import SpriteEditor from "./SpriteEditor.svelte";
  import OptionsEditor from "./OptionsEditor.svelte";
  import Buttons from "./Buttons.svelte";
  import { iconpack } from "@/lib/utils/automatics-iconpack";
  import { writable } from "svelte/store";
  import { setContext } from "svelte";
  import { jsonEditorContextKey } from "./context";

  export let json: AutomaticsIconPackJson;
  export let entry: AutomaticsJsonEntry;
  export let spriteFile: Nullable<VirtualFile>;

  const isOverwrite = writable(false);
  const isValid = writable(false);

  setContext<JsonEditorContext>(jsonEditorContextKey, {
    isOverwrite,
    isValid,
  });

  $: {
    isOverwrite.set(json.some(iconpack.isTargetEqual(entry)));
    isValid.set(iconpack.isValidJsonEntry(entry) && spriteFile != null);
  }
</script>

<div class="editor-wrapper">
  <div class="editor">
    <TargetEditor bind:entry />
    <SpriteEditor bind:entry bind:spriteFile />
    <OptionsEditor bind:entry {spriteFile} />
    <Buttons />
  </div>
  <div class="tools-wrapper">
    <Tools />
  </div>
</div>

<style lang="postcss">
  .editor-wrapper {
    @apply flex h-full flex-grow flex-col items-center overflow-y-auto;
  }

  .editor {
    @apply flex h-full w-full max-w-[clamp(30rem,60vw,54rem)] flex-col gap-8 p-8 pb-0;
  }

  .tools-wrapper {
    @apply mt-8 justify-end;
  }
</style>
