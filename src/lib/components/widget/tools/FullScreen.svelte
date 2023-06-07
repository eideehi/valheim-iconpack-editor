<script lang="ts">
  import { fullscreen } from "@/lib/store/fullscreen";
  import FullScreenIcon from "~icons/ooui/full-screen";
  import ExitIcon from "~icons/ooui/exit-fullscreen";

  function toggleFullScreen(): void {
    if ($fullscreen) {
      fullscreen.set(false);
      void document.exitFullscreen();
    } else {
      fullscreen.set(true);
      void document.documentElement.requestFullscreen();
    }
  }
</script>

<button on:click={toggleFullScreen}>
  {#if $fullscreen}
    <ExitIcon />
  {:else}
    <FullScreenIcon />
  {/if}
</button>
