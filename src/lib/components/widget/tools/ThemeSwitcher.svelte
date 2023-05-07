<script lang="ts">
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

<button on:click={toggleTheme}>
  <ThemeIcon />
</button>
