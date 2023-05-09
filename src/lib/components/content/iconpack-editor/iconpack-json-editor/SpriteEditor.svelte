<script lang="ts">
  import type { AutomaticsJsonEntry } from "@/lib/utils/automatics-iconpack";
  import type { VirtualFile } from "@/lib/utils/virtual-file-system";
  import type { ImageFileData } from "#/widget/forms/ImageFile.svelte";
  import { PNG } from "pngjs/browser";
  import { t } from "@/lib/i18n";
  import { iconpack } from "@/lib/utils/automatics-iconpack";
  import { vfs, path } from "@/lib/utils/virtual-file-system";
  import ImageFile from "#/widget/forms/ImageFile.svelte";
  import { MimeTypes } from "@/lib/utils/virtual-file-system/mimeTypes";

  export let entry: AutomaticsJsonEntry;
  export let spriteFile: Nullable<VirtualFile>;

  let directory = "";
  let image: Nullable<ImageFileData> = null;

  function onImageChanged(
    event: CustomEvent<{ directory: string; image: Nullable<ImageFileData> }>
  ): void {
    const { directory, image } = event.detail;
    if (image == null) {
      spriteFile = null;
      entry.sprite = {
        file: "",
        width: 0,
        height: 0,
      };
    } else {
      const { name, type, data, dimension } = image;
      spriteFile = vfs.newFile({
        parent: vfs.newDirectory(directory),
        name,
        mimeType: type,
        data,
      });
      entry.sprite = {
        file: path.get(spriteFile),
        width: dimension.width,
        height: dimension.height,
      };
    }
  }

  $: if (spriteFile != null) {
    new PNG({}).parse(spriteFile.data, (_, png) => {
      directory = iconpack.getSpritePath(spriteFile).parent;
      image = {
        name: spriteFile.name,
        type: MimeTypes.png,
        data: spriteFile.data,
        dimension: {
          width: png.width,
          height: png.height,
        },
      };
    });
  } else {
    directory = "";
    image = null;
  }
</script>

<div class="sprite-editor">
  <ImageFile
    {directory}
    {image}
    label={$t("iconpack-editor.icon.label")}
    on:change={onImageChanged}
    options={{ required: true, help: $t("iconpack-editor.icon.help") }}
  />
</div>

<style lang="postcss">
  .sprite-editor {
    @apply flex flex-col gap-2.5;
  }
</style>
