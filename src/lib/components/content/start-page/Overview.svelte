<script lang="ts">
  import { t } from "@/lib/i18n";
  import Markdown from "markdown-it";
</script>

<div class="overview markdown">
  {@html new Markdown().render($t("start-page.overview"))}
</div>
