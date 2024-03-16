// ? React da   en çok kullanılan hooklardan bir tanesi de useEffect tir
// sayfa yüklendiğinde bir şeyler yaptırmak istiyorsak burada kulllanmamız gereken hook useEffect hook'u dur..
//! useEffect, React bileşeninin her render işleminden sonra çalışır.
// Yan etkiler, bileşenin render'ı dışındaki işlemlerdir. Örneğin, API'den veri alma, DOM'a değişiklik yapma...
//? NOT ? stat'lerle beraber artırma işlemlerini her yaptırdığımızda sayfamızı tekrardan render ederiz...ancak useRef'lerde current ayarlama yapıldığında her seferinde render edilmesinden kurtuluruz...
// ! useState ile useRef arasındaki  fark:
//useState: Durum yönetimi için kullanılır. Bileşenin durumunu tutmak ve güncellemek için kullanılır. Durum değiştiğinde, bileşen yeniden render edilir.
// useState: Durum değiştiğinde, bileşen yeniden render edilir.
// useState: Değerler, durumun bir parçasıdır ve setState fonksiyonu aracılığıyla erişilir ve güncellenir.
// ! useRef: Bileşenin render sonrasında bile aynı kalacak olan bir değeri veya bir referansı saklamak için kullanılır. Bu, bileşenin durumu olarak kabul edilmez ve bileşenin yeniden render edilmesini tetiklemez.
// useRef: Referansın kendisi değiştiğinde bile bileşen yeniden render edilmez. useRef ile oluşturulan referans, bileşenin yeniden render edilmesiyle sıfırlanmaz.
// useRef: .current özelliği aracılığıyla referansa erişilir. Bu özellik, referans edilen değeri içerir ve bu değer okunabilir veya güncellenebilir.


import { useEffect, useState } from 'react'
import './App.css'



function App() {
  const [count, setCount] = useState(122);
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [name, setName] = useState("useEffect");




const handleclick=()=>{
  setCount(count   +  12)
  console.log(count);
}

useEffect(() => {
  console.log("ilk render edildiğinde  çalışır");

}, [])

useEffect(() => {
  console.log("her zaman çalışır");
})

useEffect(() => {
 console.log("ilk render edildiğinde ve  firstName state değeri  değiştiğinde çalışır.")
  
}, [firstName]);

useEffect(()=>{
  console.log("ilk render edildiğinde ve  lastName state değeri  değiştiğinde çalışır.");
}, [lastName]);


useEffect(() => {
  setName("useEffect uygulandı")
}, []);


useEffect(() => {
  setTimeout(()=>{
    setName("dört saniye sonra")
  }, 4000);
}, []);




  return (
    <>
    <div>{count}</div>
     <button style={{backgroundColor:"red"}} onClick={handleclick}>
      artır
     </button>
     <hr />
     <div>
     <button onClick={()=>setFirstName("Burhan")}>ADI Değiştir</button>
     <button onClick={()=>setLastName("ALACA")}>SOYADI Değiştir</button>
     </div>
     <hr />
     <div>{name}</div>
    </>
  )
}

export default App
