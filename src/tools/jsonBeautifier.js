// jsonBeautifier.js
export function initJsonBeautifier(content) {
  content.innerHTML = `
        <h2>JSON Beautifier</h2>
        <label for="json-input">Paste your JSON here:</label>
        <textarea id="json-input" rows="10" cols="50" placeholder="Paste your JSON string here"></textarea>
        <button id="beautify-json">Beautify</button>
        <h3>Beautified JSON:</h3>
        <pre id="beautified-json"></pre>
    `;

  document
    .getElementById("beautify-json")
    .addEventListener("click", beautifyJson);
}

function beautifyJson() {
  const jsonInput = document.getElementById("json-input").value;
  try {
    const jsonObj = JSON.parse(jsonInput);
    const beautified = JSON.stringify(jsonObj, null, 2); // 美化 JSON
    document.getElementById("beautified-json").textContent = beautified;
  } catch (e) {
    document.getElementById("beautified-json").textContent =
      "Invalid JSON format";
  }
}
