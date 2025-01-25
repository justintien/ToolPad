import { initColorConverter } from "./tools/colorConverter.js";
import { initJsonBeautifier } from "./tools/jsonBeautifier.js";
import { initUnitConverter } from "./tools/unitConverter.js";

document
  .getElementById("btn-color-converter")
  .addEventListener("click", function () {
    updateContent(this.id);
  });
document
  .getElementById("btn-json-beautifier")
  .addEventListener("click", function () {
    updateContent(this.id);
  });

document
  .getElementById("btn-unit-converter")
  .addEventListener("click", function () {
    updateContent(this.id);
  });

// 動態更新 #content
function updateContent(btnId) {
  const content = document.getElementById("content");

  switch (btnId) {
    case "btn-color-converter":
      initColorConverter(content);
      break;
    case "btn-json-beautifier":
      initJsonBeautifier(content);
      break;
    case "btn-unit-converter":
      initUnitConverter(content);
      break;
  }
}
