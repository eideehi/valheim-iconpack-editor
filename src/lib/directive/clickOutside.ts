import type { Action } from "svelte/action";

export const clickOutside: Action<HTMLElement, Callback1<Node>> = (node, callback) => {
  const onClick = ({ target }: MouseEvent) => {
    if (!callback) return;
    if (!(target instanceof Node)) return;
    if (!node.contains(target)) {
      callback(target);
    }
  };

  document.addEventListener("click", onClick);
  return {
    destroy: () => {
      document.removeEventListener("click", onClick);
    },
  };
};
