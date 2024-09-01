

export default function App() {
  let a=15;
  const firsName="Burhan alaca"
  const vize1 =60;
  const vize2 =80;
  const sonuç =true;

  const isimler=[
    "burhan",
    "ayşe",
    "umut",
    "delal"
  ]

  // javascript kodları yazıyoruz..
  return (
    // html kodlarını yazıyoruz
    <div>
      a değişkeninin değeri={a}
      <p>
      müşterini adı :  {firsName}
      </p>
      <p>
        ortalama = {(vize1 + vize2)/2}
      </p>
      {
        sonuç ? <p>geçtiniz</p> : <p>kaldınız</p>
      }
     {
      (vize1 + vize2)/2 >=60 ? <p> aferin geçtiniz</p> : <p>malasefv   kaldınız</p>
     }
     {
      isimler.map((isim , index)=>(
        <div key={index} style={{color:"red", background:"orange", border:"1px solid black"}}>{isim}</div>
      ))
     }
    </div>
  )
}
