declare module "#/modal/Modal.svelte" {
  export { SvelteComponent as default } from "svelte";

  export interface ModalApi {
    open(onClose?: Callback): void;
    close(): void;
  }

  export function getModal(id: string): Nullable<ModalApi>;
}

declare module "#/widget/forms/ImageFile.svelte" {
  export { SvelteComponent as default } from "svelte";

  export interface ImageFileData {
    name: string;
    type: string;
    data: ArrayBuffer;
    dimension: {
      width: number;
      height: number;
    };
  }
}
