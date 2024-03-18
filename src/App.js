//app.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div id="container">

      <form>
      <label>Escala</label><br/>
      <select id="escala" required>
        <option value="vazio">-</option>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
        <option value="K">Kelvin</option>
	    </select><br/>
      <label>Temperatura</label><br/>
      <input id="temperatura" type="number" step={0.01} required></input><br/>
      <button type="submit" onClick={Converter} required>Converter</button>
      </form>

      <hr/>

      <div id="container2">
        <label id="escala1"></label><br/>
        <output id="temp1"></output><br/>
        <label id="escala2"></label><br/>
        <output id="temp2"></output><br/>
      </div>

    </div>
  );

  function Converter(event) {
    event.preventDefault();
    const select = document.getElementById("escala");
    const escala = select.value;
    const input = document.getElementById("temperatura");
    const temperatura = input.value;

    if (!escala || !temperatura || escala === "vazio") {
      alert("Por favor preencha todos os campos");
      return;
    }
    else {
      if (escala === 'C'){
        document.getElementById("escala1").textContent = "Fahrenheit";
        document.getElementById("temp1").textContent = temperatura*1.8 + 32 + "°F";
        document.getElementById("escala2").textContent = "Kelvin";
        document.getElementById("temp2").textContent = temperatura*1 + 273 + "K";
      }
      else if (escala === 'F'){
        document.getElementById("escala1").textContent = "Celsius";
        document.getElementById("temp1").textContent = (temperatura - 32)/1.8 + "°C";
        document.getElementById("escala2").textContent = "Kelvin";
        document.getElementById("temp2").textContent = ((temperatura - 32)/1.8) + 273 + "K";
      }
      else if (escala === 'K'){
        document.getElementById("escala1").textContent = "Fahrenheit";
        document.getElementById("temp1").textContent = (temperatura - 273)*1.8 + 32 + "°F";
        document.getElementById("escala2").textContent = "Celsius";
        document.getElementById("temp2").textContent = temperatura - 273 + "°C";
      }
    }

  }

}

export default App;
