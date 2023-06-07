<script lang="ts">
  import FullScreen from "./FullScreen.svelte";
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
  import LanguageSelect from "./LanguageSelect.svelte";
  import GitHub from "./GitHub.svelte";
  import Licenses from "./Licenses.svelte";
</script>

<div class="tools">
  <FullScreen />
  <LanguageSelect />
  <ThemeSwitcher />
  <GitHub />
  <Licenses />
</div>

<style lang="postcss">
  .tools {
    @apply flex items-center justify-center gap-4 py-4 text-2xl;
  }
</style>
