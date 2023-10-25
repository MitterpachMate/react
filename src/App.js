import './App.css';
import React, {useState , useEffect} from 'react';

function App() {

  const [clickCount, setClickCount] = useState(0);
  useEffect(()=> {document.title = "Kattintások szma: " + clickCount;
console.log(clickCount);

}, [clickCount])

  return (
  <div className='card w-25'>
    Kattintások száma {clickCount}
    <button className='btn btn-primary' onClick={() => {setClickCount((elozo)=> elozo +1);}}>Kattintás!</button>
  </div>


  );
}

export default App;
