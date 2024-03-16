//? "useState, React'ta bir Hook'tur ve fonksiyonel bileşenlerde durum yönetimi sağlar. Bu, bileşenlerin durumunu tutmak ve değiştirmek için kullanılır. 

// Örneğin, bir formun giriş değerlerini saklamak veya bir kullanıcının etkileşimlerini izlemek için useState kullanılabilir..

// Bir state'in değerini set metodunu kullanarak değiştirdiğinde component yeniden render edilir...

import { useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(12);
  console.log("component render edildi");
  const [name, setName] = useState("javascript");
  const [firstName, setFirstName] = useState(["burhan", "ayşe" ,"delal","umut"]);
  const [userİnfo, setUserİnfo] = useState({name:"burhanalaca", password:"12mart2016"});
  const [show, setShow] = useState(true);

  

  return (
    <div>
      {count}
      
      <hr />
      <button style={{color:"red" , backgroundColor:"blue"}} onClick={()=>setCount(count + 2)}>
        Artır
      </button>
      <button style={{color:"blue" , backgroundColor:"red"}} onClick={()=>setCount(count -1)}>
        Azalt
      </button>
     <hr />
      <button style={{backgroundColor:"blue"}} onClick={()=>setName("react")}>
        {name}
      </button>

      <hr />

      <button  style={{backgroundColor:"red"}} onClick={()=>setName("css")}>
        {name}
      </button>

      <hr />

      <div>
        {firstName.map((firstName,i)=>(
          <div key={i}>{firstName}</div>
        ))}
      </div>

      <hr />

      <div>
        {userİnfo.name} {userİnfo.password}
      </div>
      <hr />
      <div>
        {show ? <div>{userİnfo.name} {userİnfo.password}</div>  :  <div>{name}</div>}
      </div>
    </div>
  )
}

export default App
