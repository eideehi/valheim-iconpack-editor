import "the-new-css-reset/css/reset.css";
import "./assets/styles/theme.css";
import "./assets/styles/app.css";
import { mount } from "svelte";
import "./init";
import App from "./App.svelte";

const app = mount(App, {
  target: document.body,
});

export default app;
