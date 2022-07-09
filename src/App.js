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
        <Countdown date={new Date("2022-08-12T18:30:00")} 
        precision={2}
        zeroPadTime={2}
        zeroPadDays={2}
        now={Date().now}
        renderer={ renderer }
        />
      <a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=NmhwY2hoM3VmNnY4NjJsNDNxcHN0NTZyZHMga2lxdWlub0Bt&amp;tmsrc=kiquino%40gmail.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_es.gif" alt=""/>AGREGAR A CALENDAR</a>
      </div>
    </div>
  );
}

export default App;
