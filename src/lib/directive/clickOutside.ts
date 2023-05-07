import type { Action } from "svelte/types/runtime/action";

export const clickOutside: Action<HTMLElement, Callback1<Node>> = (node, callback) => {
  const onClick = (event: MouseEvent) => {
    if (!(event.target instanceof Node)) return;
    if (!node.contains(event.target)) {
      callback(event.target);
    }
  };

  document.addEventListener("click", onClick);
  return {
    destroy: () => {
      document.removeEventListener("click", onClick);
    },
  };
};
