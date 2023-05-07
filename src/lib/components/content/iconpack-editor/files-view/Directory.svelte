<script lang="ts">
  import type { VirtualDirectory, VirtualFileSystemNode } from "@/lib/utils/virtual-file-system";
  import _ from "~lodash";
  import { vfs } from "@/lib/utils/virtual-file-system";
  import File from "./File.svelte";
  import OpenedFolderIcon from "~icons/bxs/folder-open";
  import FolderIcon from "~icons/bxs/folder";

  export let directory: VirtualDirectory;
  export let expanded = true;

  function sort(dir: VirtualDirectory): VirtualFileSystemNode[] {
    return _.sortBy<VirtualFileSystemNode>(dir.files, [
      (file) => (vfs.isDirectory(file) ? 0 : 1),
      "name",
    ]);
  }
</script>

<button class="directory" on:click={() => (expanded = !expanded)}>
  {#if expanded}
    <OpenedFolderIcon class="icon" />
  {:else}
    <FolderIcon />
  {/if}

  <span class="name">{directory.name}</span>
</button>

{#if expanded}
  <ul class="children">
    {#each sort(directory) as file}
      <li>
        {#if file.type === "directory"}
          <svelte:self directory={file} />
        {:else}
          <File {file} />
        {/if}
      </li>
    {/each}
  </ul>
{/if}

<style>
  .directory {
    @apply inline-flex items-center gap-x-1 whitespace-pre;
  }

  .children {
    @apply ml-2 border-l pl-2;
  }
</style>
