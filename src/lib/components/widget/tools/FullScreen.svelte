<script lang="ts">
  import { onMount } from "svelte";
  import { fullscreen } from "@/lib/store/fullscreen";
  import FullScreenIcon from "~icons/ooui/full-screen";
  import ExitIcon from "~icons/ooui/exit-fullscreen";

  function updateFullScreen(): void {
    fullscreen.set(document.fullscreenElement != null);
  }

  onMount(updateFullScreen);

  async function toggleFullScreen(): Promise<void> {
    try {
      if (document.fullscreenElement != null) {
        await document.exitFullscreen();
      } else {
        await document.documentElement.requestFullscreen();
      }
    } catch {
      updateFullScreen();
    }
  }
</script>

<svelte:document on:fullscreenchange={updateFullScreen} />

<button on:click={toggleFullScreen}>
  {#if $fullscreen}
    <ExitIcon />
  {:else}
    <FullScreenIcon />
  {/if}
</button>
