<script lang="ts">
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
  import LanguageSelect from "./LanguageSelect.svelte";
  import GitHub from "./GitHub.svelte";
  import Licenses from "./Licenses.svelte";
</script>

<div class="tools">
  <LanguageSelect />
  <ThemeSwitcher />
  <GitHub />
  <Licenses />
</div>

<style>
  .tools {
    @apply flex items-center justify-center gap-4 py-4 text-2xl;
  }
</style>
