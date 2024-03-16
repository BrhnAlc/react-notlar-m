// !  Axios, JavaScript'te kullanılan bir HTTP istemci kütüphanesidir. 
// Genellikle tarayıcıda veya Node.js ortamında kullanılarak sunucularla HTTP istekleri yapmak için kullanılır.
// Axios, modern tarayıcılar ve Node.js tarafından desteklenen tüm popüler HTTP özelliklerini destekler.
// ! Bu, GET, POST, PUT, DELETE gibi HTTP metotlarını ve HTTPS desteğini içerir.


import './App.css';
import axios from "axios";
// import { axios } from 'axios';
import { useEffect } from 'react';

const BASE_URL="https://jsonplaceholder.typicode.com/posts/1"

function App() {
  
  const getAllUser=async()=>{
  const response = await axios.get(BASE_URL + "/users" );
  console.log(response.data);
  }
  useEffect(() => {
     getAllUser();
  }, [])
  
  
  return (
    <div>
      axios
    </div>
  )
}

export default App
