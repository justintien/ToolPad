// colorConverter.js
export function initColorConverter(content) {
  content.innerHTML = `
        <h2>Hex to RGBA Converter</h2>
        <label for="hex">Hex Color:</label>
        <input type="text" id="hex" placeholder="#ff5733">
        <button id="convert-hex-to-rgba">Convert</button>
        <div id="result"></div>

        <h2>RGBA to Hex Converter</h2>
        <label for="rgba">RGBA Color:</label>
        <input type="text" id="rgba" placeholder="rgba(255, 87, 51, 1)">
        <button id="convert-rgba-to-hex">Convert</button>
        <div id="result-rgba"></div>
    `;

  document
    .getElementById("convert-hex-to-rgba")
    .addEventListener("click", convertHexToRgba);
  document
    .getElementById("convert-rgba-to-hex")
    .addEventListener("click", convertRgbaToHex);
}

function convertHexToRgba() {
  const hex = document.getElementById("hex").value;
  const rgba = hexToRgba(hex);
  document.getElementById("result").innerHTML = `RGBA: ${rgba}`;
}

function convertRgbaToHex() {
  const rgba = document.getElementById("rgba").value;
  const hex = rgbaToHex(rgba);
  document.getElementById("result-rgba").innerHTML = `Hex: ${hex}`;
}

function hexToRgba(hex) {
  hex = hex.replace(/^#/, "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map(function (hex) {
        return hex + hex;
      })
      .join("");
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, 1)`;
}

function rgbaToHex(rgba) {
  const result = rgba.match(
    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(\.\d+)?))?\)$/
  );
  if (!result) {
    return "Invalid RGBA format";
  }
  const r = parseInt(result[1]).toString(16).padStart(2, "0");
  const g = parseInt(result[2]).toString(16).padStart(2, "0");
  const b = parseInt(result[3]).toString(16).padStart(2, "0");
  return `#${r}${g}${b}`;
}
