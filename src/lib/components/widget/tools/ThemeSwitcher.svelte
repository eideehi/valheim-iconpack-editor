<script lang="ts">
  import { t } from "@/lib/i18n";
  import { theme } from "@/lib/store/theme";
  import ThemeIcon from "~icons/mdi/theme-light-dark";

  function toggleTheme(): void {
    if ($theme === "dark") {
      theme.set("light");
    } else {
      theme.set("dark");
    }
  }
</script>

<button aria-label={$t("tools.theme")} title={$t("tools.theme")} on:click={toggleTheme}>
  <ThemeIcon />
</button>
