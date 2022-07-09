import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import './App.css';

function App() {

  const renderer = ({ days,hours, minutes, seconds }) =>{
    return <div className='contador'><h1>Faltan <br/> {days} días -{hours}:{minutes}:{seconds} Hs</h1></div>
  }
  return (
    <div className="App">

      <div className="App-header">
        <h1 className='title'>
          NOCHE DE JUEGOS!!
        </h1>
        <Countdown date={new Date("2022-08-11T00:00:00")} 
        precision={2}
        zeroPadTime={2}
        zeroPadDays={2}
        now={Date().now}
        renderer={ renderer }
        />
      <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=Game+Night&details=Son+elegidos+para+ser+aventureros%2C+exploradores%2C+monstruos%2C+guerros+y+monjes+en+esta+NOCHE+DE+JUEGOS%21&location=Casa+Villegas&dates=20220712T014900Z%2Fundefined">AGREGAR A CALENDAR</a>
      </div>
    </div>
  );
}

export default App;
