import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    document.title='You clicked '+count;
  })
  return (
    <div className="App">
     <button onClick={()=>setCount(count+1)}>
      {count}
     </button>

    </div>
  );
}

export default App;
