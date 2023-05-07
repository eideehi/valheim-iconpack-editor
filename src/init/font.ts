if (navigator.language == "ja") {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Noto+Sans+JP:ital,wght@0,400;0,700;1,400;1,700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
}

export {};
