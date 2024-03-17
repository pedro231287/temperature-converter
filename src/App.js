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

    if (escala === 'C'){
      const input = document.getElementById("temperatura");
      const temperatura = input.value;

      document.getElementById("escala1").textContent = "Fahrenheit";
      document.getElementById("temp1").textContent = temperatura*1.8 + 32 + "°F";
      document.getElementById("escala2").textContent = "Kelvin";
      document.getElementById("temp2").textContent = temperatura*1 + 273 + "K";
    }
    else if (escala === 'F'){
      const input = document.getElementById("temperatura");
      const temperatura = input.value;

      document.getElementById("escala1").textContent = "Celsius";
      document.getElementById("temp1").textContent = (temperatura - 32)/1.8 + "°C";
      document.getElementById("escala2").textContent = "Kelvin";
      document.getElementById("temp2").textContent = ((temperatura - 32)/1.8) + 273 + "K";
    }
    else if (escala === 'K'){
      const input = document.getElementById("temperatura");
      const temperatura = input.value;

      document.getElementById("escala1").textContent = "Fahrenheit";
      document.getElementById("temp1").textContent = (temperatura - 273)*1.8 + 32 + "°F";
      document.getElementById("escala2").textContent = "Celsius";
      document.getElementById("temp2").textContent = temperatura - 273 + "°C";
    }
    else if (escala == null || escala == " "){
      document.getElementById("escala1").textContent = " ";
      document.getElementById("temp1").textContent = " ";
      document.getElementById("escala2").textContent = " ";
      document.getElementById("temp2").textContent = " ";
      alert("Por favor preencha todos os campos");
    }

  }

}

export default App;
