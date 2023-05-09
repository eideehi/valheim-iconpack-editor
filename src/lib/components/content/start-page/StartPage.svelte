<script lang="ts">
  import type { VirtualDirectory } from "@/lib/utils/virtual-file-system";
  import CreateIconPack from "#/content/start-page/CreateIconPack.svelte";
  import Tools from "#/widget/tools/Tools.svelte";
  import Overview from "#/content/start-page/Overview.svelte";
  import LoadIconPack from "#/content/start-page/LoadIconPack.svelte";

  export let files: VirtualDirectory;
</script>

<div class="start-page">
  <div class="content">
    <Overview />
    <CreateIconPack bind:files />
    <LoadIconPack bind:files />
  </div>
  <Tools />
</div>

<style lang="postcss">
  .start-page {
    @apply mx-auto flex h-full w-[clamp(20rem,60vw,54rem)] flex-col justify-between;
  }

  .content {
    @apply flex flex-col gap-16 p-8;
  }
</style>
