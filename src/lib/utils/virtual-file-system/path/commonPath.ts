import { segments } from "./segments";

export function commonPath(path1: string, path2: string): string {
  const segments1 = segments(path1);
  const segments2 = segments(path2);
  const minLength = Math.min(segments1.length, segments2.length);
  const common: string[] = [];
  for (let i = 0; i < minLength; i++) {
    if (segments1[i] !== segments2[i]) break;
    common.push(segments1[i]);
  }
  return common.join("/");
}
