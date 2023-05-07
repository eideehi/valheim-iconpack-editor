export function toPosix(path: string): string {
  return path.replaceAll(/\\/g, "/");
}
