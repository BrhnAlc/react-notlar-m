

import { useState } from 'react';
import './App.css'

function App() {
  const [vize1, setVize1] = useState(0);
  const [vize2, setVize2] = useState(0);
   console.log(vize1);
   const ortalamaBul=()=>{

   }
  return (
    <div>
      <div>
        <input type="number" placeholder='BUL' value={vize1} onChange={(e)=>setVize1(Number(e.target.value))}/>
      </div>
      <div>
        <input type="number" placeholder='BUL'  value={vize2} onChange={(e)=>setVize2(Number(e.target.value))} />
      </div>
      <div>
        <button>Ortalamayı Bul</button>
      </div>
    </div>
  )
}

export default App
