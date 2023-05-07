import _ from "~lodash";
import { commonPath } from "./commonPath";
import { toPosix } from "./toPosix";

export function relative(base: string, target: string): string {
  const common = commonPath(base, target);
  if (_.isEmpty(common)) return "";
  return _.trimStart(toPosix(target).replace(common, ""), "/");
}
