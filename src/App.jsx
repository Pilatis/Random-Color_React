import React, { useState } from 'react'
import './css/App.css'

function App() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const [clicked, setClicked] = useState(false);

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length)
  }

  const handleRandomHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }

    setColor(hexColor);
  }

  const handleRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <main className="main-container">
        <div className="container" style={{ background: color }}>
      <h1>Generate Random Color</h1>
      <div className="container-buttons">
        <button className="button-color" onClick={() => {setTypeOfColor('hex'); setClicked(true)}}>Create HEX Color</button>
        <button className="button-color" onClick={() => {setTypeOfColor('rgb'); setClicked(true)}}>Create RGB Color</button>
      </div>
        {clicked && (
          <button 
            className="button-color" 
            onClick={
              typeOfColor === 'hex' 
              ? handleRandomHexColor 
              : handleRandomRgbColor
            }
            >
              Generate Random Color
            </button>
          )}
        <div className="container-title-color">
          <h3>{typeOfColor === 'hex' ? 'HEX Color' : 'RGB Color'}</h3>
          <h1>{color}</h1>
        </div>
    </div>
    </main>
  )
}

export default App
