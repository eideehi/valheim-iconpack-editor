<script lang="ts">
  import { nanoid } from "nanoid";
  import _ from "~lodash";
  import { t } from "@/lib/i18n";
  import { clickOutside } from "@/lib/directive";
  import Modal, { getModal } from "#/modal/Modal.svelte";
  import CopyrightIcon from "~icons/mdi/copyright";
  import CloseIcon from "~icons/mingcute/close-circle-line";
  import licenses from "@/assets/data/licenses.json";

  let id = nanoid();
  let container: HTMLElement;

  function onClickOutside(target: Node): void {
    if (container == null) return;
    if (!container.contains(target)) {
      getModal(id)?.close();
    }
  }
</script>

<Modal {id}>
  <div class="modal" use:clickOutside={onClickOutside}>
    <button class="close-button" on:click={() => getModal(id)?.close()}>
      <CloseIcon />
    </button>
    <ul class="license-list">
      <li class="caption">
        <span>{$t("licenses.caption")}</span>
      </li>
      {#each _.keys(licenses) as key}
        <li class="license-item">
          <table class="license">
            <tr>
              <th>{$t("licenses.library.name")}</th>
              <td>{_.get(licenses[key], ["name"], "")}</td>
            </tr>
            <tr>
              <th>{$t("licenses.library.version")}</th>
              <td>{_.get(licenses[key], ["version"], "")}</td>
            </tr>
            <tr>
              <th>{$t("licenses.library.publisher")}</th>
              <td>{_.get(licenses[key], ["publisher"], "")}</td>
            </tr>
            <tr>
              <th>{$t("licenses.library.license")}</th>
              <td>{_.get(licenses[key], ["licenseText"], "")}</td>
            </tr>
          </table>
        </li>
      {/each}
    </ul>
  </div>
</Modal>

<div bind:this={container} class="licenses">
  <button on:click={() => getModal(id)?.open()}>
    <CopyrightIcon />
  </button>
</div>

<style lang="postcss">
  .licenses {
    @apply flex items-center justify-center;
  }

  .modal {
    @apply relative h-full w-1/2 translate-x-1/2 bg-base-color;
  }

  .close-button {
    @apply fixed right-10 top-2.5 rounded-full bg-base-color text-3xl;
  }

  .license-list {
    @apply h-full overflow-auto;
  }

  .caption {
    @apply my-8 flex justify-center text-xl;
  }

  .license-item {
    @apply p-4;
  }

  .license {
    @apply border-separate border-spacing-x-4 border-spacing-y-0.5;
  }

  th {
    @apply whitespace-nowrap;
  }
</style>
