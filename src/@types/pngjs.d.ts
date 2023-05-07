declare module "pngjs/browser" {
  import { PNG as Original, PNGOptions } from "pngjs";

  type PNG = Omit<typeof Original, "parse"> & {
    parse(data: string | ArrayBuffer | Buffer, callback: Callback2<Nullable<string>, PNG>): PNG;
    data: Buffer;
    gamma: number;
    height: number;
    width: number;
  };

  const PNG: new (options: PNGOptions) => PNG;

  export { PNG };
}
