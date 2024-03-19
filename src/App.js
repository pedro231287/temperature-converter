import React, {Component} from "react";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
      this.state = { 
          escala: "",
          temperatura: "",
          escala1: "",
          temp1: "",
          escala2: "",
          temp2: ""
          }
  }

  changeInput = (event) => {
    this.setState({
      escala: document.getElementById("escala").value,
      temperatura: document.getElementById("temperatura").value
      });
  }

  converter = (event) => {
      event.preventDefault(); 
      let escala = this.state.escala, temperatura = this.state.temperatura, escala1, temp1, escala2, temp2;

      if (!escala || !temperatura) {
          alert("Por favor, preencha todos os campos");
          return;
      }

      if (escala === "C") {
          temp1 = (parseFloat(temperatura) * 1.8 + 32).toFixed(2); // Celsius para Fahrenheit
          temp2 = (parseFloat(temperatura) + 273.15).toFixed(2);   // Celsius para Kelvin
          escala1 = "Fahrenheit";
          escala2 = "Kelvin";
      } 
      else if (escala === "F") {
          temp1 = ((parseFloat(temperatura) - 32) / 1.8).toFixed(2); // Fahrenheit para Celsius
          temp2 = ((parseFloat(temperatura) - 32) / 1.8 + 273.15).toFixed(2); // Fahrenheit para Kelvin
          escala1 = "Celsius";
          escala2 = "Kelvin";
      } 
      else if (escala === "K") {
          temp1 = ((parseFloat(temperatura) - 273.15) * 1.8 + 32).toFixed(2); // Kelvin para Fahrenheit
          temp2 = (parseFloat(temperatura) - 273.15).toFixed(2); // Kelvin para Celsius
          escala1 = "Fahrenheit";
          escala2 = "Celsius";
      }

      if (escala2 === "Kelvin") {
          this.setState({
            escala1,
            temp1: `${temp1}°${escala1.charAt(0)}`,
            escala2,
            temp2: `${temp2}${escala2.charAt(0)}` 
          });
      }
      else {
          this.setState({
            escala1,
            temp1: `${temp1}°${escala1.charAt(0)}`,
            escala2,
            temp2: `${temp2}°${escala2.charAt(0)}` 
          });
      }

      
    
  };

  render() {

    return (
      <div id="container">

          <form onSubmit={this.converter}>
              <label>Escala</label><br/>
                  <select id="escala" value={this.state.escala} onChange={this.changeInput} required>
                      <option value="vazio">-</option>
                      <option value="C">Celsius</option>
                      <option value="F">Fahrenheit</option>
                      <option value="K">Kelvin</option>
                  </select><br/>
              <label>Temperatura</label><br/>
                  <input id="temperatura" type="number" step={0.01} value={this.state.temperatura} onChange={this.changeInput} required></input><br/>
              <button type="submit">Converter</button>
          </form>

          <hr/>

          <div id="container2">
              <label id="escala1">{this.state.escala1}</label><br/>
                  <output id="temp1">{this.state.temp1}</output><br/>
              <label id="escala2">{this.state.escala2}</label><br/>
                  <output id="temp2">{this.state.temp2}</output><br/>
          </div>

      </div>
    );

  }

}

export default App;