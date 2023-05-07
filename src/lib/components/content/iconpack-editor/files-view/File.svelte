<script lang="ts">
  import type { VirtualFile } from "@/lib/utils/virtual-file-system";
  import { MimeType } from "@/lib/utils/virtual-file-system";
  import MarkerFileIcon from "~icons/bxs/file-blank";
  import ImageFileIcon from "~icons/bxs/file-image";
  import JsonFileIcon from "~icons/bxs/file";

  export let file: VirtualFile;
</script>

<div class="file">
  {#if MimeType.isMatch("png", file.mimeType)}
    <ImageFileIcon />
  {:else if MimeType.isMatch("json", file.mimeType)}
    <JsonFileIcon />
  {:else if MimeType.isMatch("text", file.mimeType)}
    <MarkerFileIcon />
  {/if}

  <span class="name">{file.name}</span>
</div>

<style>
  .file {
    @apply inline-flex items-center gap-x-1 whitespace-pre;
  }
</style>
