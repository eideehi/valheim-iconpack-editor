<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  export let ref: Nullable<HTMLElement>;
  export let positiveDirection: "left" | "right";

  const left = positiveDirection === "left";
  const right = !left;

  let dragged = false;
  let baseX = -1;
  let baseW = -1;

  function dragStart(event: MouseEvent): void {
    if (!ref) return;
    dragged = true;
    baseX = event.clientX;
    baseW = ref.clientWidth;
  }

  function dragging(event: MouseEvent): void {
    if (!ref) return;
    if (!dragged) return;

    let movementX = event.movementX;
    if (movementX === 0) return;

    if (positiveDirection === "right") {
      let w = baseW + (event.clientX - baseX);
      ref.style.width = `${w}px`;
      ref.style.minWidth = `${w}px`;
    } else if (positiveDirection === "left") {
      let w = baseW + (baseX - event.clientX);
      ref.style.width = `${w}px`;
      ref.style.minWidth = `${w}px`;
    }
  }

  function dragEnd(): void {
    dragged = false;
  }

  onMount(() => {
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("mousemove", dragging);
  });

  onDestroy(() => {
    document.removeEventListener("mouseup", dragEnd);
    document.removeEventListener("mousemove", dragging);
  });
</script>

{#if ref}
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="resize-bar" class:left class:right on:mousedown={dragStart}>
    <div class="vertical-border" />
  </div>
{/if}

<style lang="postcss">
  .resize-bar {
    @apply flex h-full w-1.5 min-w-[0.375rem] cursor-ew-resize select-none justify-center;
  }

  .resize-bar > .vertical-border {
    @apply h-full w-[1px] border-l border-base-color;
  }
</style>
