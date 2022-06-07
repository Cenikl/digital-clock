import './App.css';
import React, {useState,useEffect} from 'react';

function Clock(){ 
const [time,setTime] = useState(new Date().getHours() + ":" +new Date().getMinutes() + ":" +new Date().getSeconds());
useEffect(() => {
  setInterval(() => setTime(new Date().getHours() + ":" +new Date().getMinutes() + ":" +new Date().getSeconds()), 1000);
}, []);
  return (
    <>
    <span class="time">
      {time.toLocaleString()}
    </span>
    </>
  )
}

function Timer(){
  const [seconds,setSeconds] = useState(0);
  const [minutes,setMinutes] = useState(0);
  const [hours,setHours] = useState(0);

  const begin = () => {
  let interval = setInterval(function(){setSeconds(seconds => seconds + 1)},1000);
  let interva = setInterval(function(){setMinutes(minutes => minutes + 1)},60000);
  let interv = setInterval(function(){setHours(hours => hours + 1)},3600000);
    
    return () => { 
      clearInterval(interval);
      clearInterval(interva);
      clearInterval(interv);}
  
};
  
  const stop = () => {
    clearInterval(begin);
    setSeconds(0);
  }

  return (
    <>
    <br></br>
          <button onClick={begin}>Begin</button>
    <br></br>
      <button onClick={stop}>Stop</button>
    <span class="time">
    {hours.toLocaleString()}:{minutes.toLocaleString()}:{seconds.toLocaleString()}
    </span>
    </>
  )

  }
function App(){
   return (
    <>
    <div>
    <Clock />
    </div>
    <div>
    <Timer />
    </div>
    </>
   )
}
 export default App;