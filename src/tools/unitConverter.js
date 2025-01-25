// unitConverter.js
export function initUnitConverter(content) {
  // 單位轉換工具的內容
  content.innerHTML = `
    <div>
        <h2>Unit Converter</h2>
        
        <!-- 長度轉換 -->
        <h3>Length Converter</h3>
        <input type="number" id="length-input" placeholder="Enter value" />
        <select id="length-from">
            <option value="meters">Meters</option>
            <option value="kilometers">Kilometers</option>
            <option value="miles">Miles</option>
        </select>
        to
        <select id="length-to">
            <option value="meters">Meters</option>
            <option value="kilometers">Kilometers</option>
            <option value="miles">Miles</option>
        </select>
        <button id="convert-length">Convert</button>
        <p id="length-result">Result: </p>
        
        <!-- 重量轉換 -->
        <h3>Weight Converter</h3>
        <input type="number" id="weight-input" placeholder="Enter value" />
        <select id="weight-from">
            <option value="kilograms">Kilograms</option>
            <option value="grams">Grams</option>
            <option value="pounds">Pounds</option>
        </select>
        to
        <select id="weight-to">
            <option value="kilograms">Kilograms</option>
            <option value="grams">Grams</option>
            <option value="pounds">Pounds</option>
        </select>
        <button id="convert-weight">Convert</button>
        <p id="weight-result">Result: </p>
        
        <!-- 溫度轉換 -->
        <h3>Temperature Converter</h3>
        <input type="number" id="temperature-input" placeholder="Enter value" />
        <select id="temperature-from">
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
        </select>
        to
        <select id="temperature-to">
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
        </select>
        <button id="convert-temperature">Convert</button>
        <p id="temperature-result">Result: </p>
    </div>
`;

  // 長度轉換邏輯
  document
    .getElementById("convert-length")
    .addEventListener("click", function () {
      const value = parseFloat(document.getElementById("length-input").value);
      const fromUnit = document.getElementById("length-from").value;
      const toUnit = document.getElementById("length-to").value;

      let result;
      if (fromUnit === "meters") {
        if (toUnit === "kilometers") result = value / 1000;
        else if (toUnit === "miles") result = value * 0.000621371;
        else result = value;
      } else if (fromUnit === "kilometers") {
        if (toUnit === "meters") result = value * 1000;
        else if (toUnit === "miles") result = value * 0.621371;
        else result = value;
      } else if (fromUnit === "miles") {
        if (toUnit === "meters") result = value / 0.000621371;
        else if (toUnit === "kilometers") result = value / 0.621371;
        else result = value;
      }
      document.getElementById("length-result").innerText = `Result: ${result}`;
    });

  // 重量轉換邏輯
  document
    .getElementById("convert-weight")
    .addEventListener("click", function () {
      const value = parseFloat(document.getElementById("weight-input").value);
      const fromUnit = document.getElementById("weight-from").value;
      const toUnit = document.getElementById("weight-to").value;

      let result;
      if (fromUnit === "kilograms") {
        if (toUnit === "grams") result = value * 1000;
        else if (toUnit === "pounds") result = value * 2.20462;
        else result = value;
      } else if (fromUnit === "grams") {
        if (toUnit === "kilograms") result = value / 1000;
        else if (toUnit === "pounds") result = value / 453.592;
        else result = value;
      } else if (fromUnit === "pounds") {
        if (toUnit === "kilograms") result = value / 2.20462;
        else if (toUnit === "grams") result = value * 453.592;
        else result = value;
      }
      document.getElementById("weight-result").innerText = `Result: ${result}`;
    });

  // 溫度轉換邏輯
  document
    .getElementById("convert-temperature")
    .addEventListener("click", function () {
      const value = parseFloat(
        document.getElementById("temperature-input").value
      );
      const fromUnit = document.getElementById("temperature-from").value;
      const toUnit = document.getElementById("temperature-to").value;

      let result;
      if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") result = (value * 9) / 5 + 32;
        else if (toUnit === "kelvin") result = value + 273.15;
        else result = value;
      } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") result = ((value - 32) * 5) / 9;
        else if (toUnit === "kelvin") result = ((value - 32) * 5) / 9 + 273.15;
        else result = value;
      } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") result = value - 273.15;
        else if (toUnit === "fahrenheit")
          result = ((value - 273.15) * 9) / 5 + 32;
        else result = value;
      }
      document.getElementById("temperature-result").innerText =
        `Result: ${result}`;
    });
}
