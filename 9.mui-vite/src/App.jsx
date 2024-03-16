import { useState } from "react"





function App() {
 const [count, setCount] = useState(0)

  return (
    <div>
     <h1>MUI</h1>
     {count}
     <hr />
     <button onClick={()=>setCount(count + 1)}>artır</button>
    </div>
  )
}

export default App
