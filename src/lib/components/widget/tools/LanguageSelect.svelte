<script lang="ts">
  import { language, t } from "@/lib/i18n";
  import { clickOutside } from "@/lib/directive";
  import LanguageIcon from "~icons/mdi/translate";

  const languages = ["en", "ja"] as const;
  type Language = (typeof languages)[number];

  let active = false;

  function setActive(newValue: boolean): void {
    active = newValue;
  }

  function changeLanguage(newLanguage: Language): void {
    language.set(newLanguage);
  }
</script>

<div class="language-select" use:clickOutside={() => setActive(false)}>
  <div class="languages" class:active>
    {#each languages as language}
      <button class="language" on:click={() => changeLanguage(language)}
        >{$t(`languages.${language}`)}</button
      >
    {/each}
  </div>
  <button on:click={() => setActive(!active)}>
    <LanguageIcon />
  </button>
</div>

<style lang="postcss">
  .language-select {
    @apply relative flex items-center justify-center;
  }

  .languages {
    @apply absolute -top-4 left-4 flex w-max -translate-x-1/2 -translate-y-full flex-col gap-0.5 rounded border-2 border-base-color bg-base-color p-2 text-lg shadow;
  }

  .languages:not(.active) {
    @apply hidden;
  }

  .language {
    @apply rounded p-1.5;
  }

  .language:hover {
    @apply bg-dark bg-opacity-50;
  }
</style>
