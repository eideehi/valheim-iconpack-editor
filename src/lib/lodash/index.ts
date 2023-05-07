import cloneDeep from "lodash-es/cloneDeep";
import eq from "lodash-es/eq";
import filter from "lodash-es/filter";
import get from "lodash-es/get";
import has from "lodash-es/has";
import includes from "lodash-es/includes";
import isEmpty from "lodash-es/isEmpty";
import isEqual from "lodash-es/isEqual";
import keys from "lodash-es/keys";
import merge from "lodash-es/merge";
import pick from "lodash-es/pick";
import remove from "lodash-es/remove";
import set from "lodash-es/set";
import sortBy from "lodash-es/sortBy";
import toLower from "lodash-es/toLower";
import trimStart from "lodash-es/trimStart";
import unset from "lodash-es/unset";
import without from "lodash-es/without";

function unsetIfEmpty(obj: object, path: PropertyPath): boolean {
  const value: unknown = get(obj, path);
  if (value == null || !isEmpty(value)) return false;
  return unset(obj, path);
}

export default {
  cloneDeep,
  eq,
  filter,
  get,
  has,
  includes,
  isEmpty,
  isEqual,
  keys,
  merge,
  pick,
  remove,
  set,
  sortBy,
  toLower,
  trimStart,
  unset,
  unsetIfEmpty,
  without,
};
