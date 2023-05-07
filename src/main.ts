import "the-new-css-reset/css/reset.css";
import "./assets/styles/theme.css";
import "./assets/styles/app.css";
import "./init";
import App from "./App.svelte";

const app = new App({
  target: document.body,
});

export default app;
