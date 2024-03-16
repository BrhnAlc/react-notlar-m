//! React Nedir?
// React, Facebook tarafından geliştirilen ve kullanıcı arayüzleri (UI) oluşturmak için kullanılan bir JavaScript kütüphanesidir. Kullanıcı arayüzlerini parçalar halinde oluşturmaya ve yönetmeye odaklanan açık kaynak kodlu bir araçtır.



// ! Reactın üç tane yapısı var.
//? 1-Component :
//  Bir kod yapısını bir component içerisinde   tanımladıktan sonra istediğiniz zaman çağıra biliyorsunuz.
// React'te component, kullanıcı arayüzünün (UI) tekrar kullanılabilir bir parçasıdır. Bir component, HTML, CSS ve JavaScript kodundan oluşabilir. Componentler, karmaşık UI'ları daha küçük ve yönetilebilir parçalara ayırmaya yardımcı olur.App componenti bütün komponentleri içine barındıran ana componentir..
//? 2-Props :
// Props, React'te componentler arasında veri aktarmak için kullanılan bir yapıdır.
// Tek yönlüdür: Veriler sadece üst component'ten alt component'e aktarılır.
// 
//? 3-State Management

function App() {
  // return üstüne js kodları yazıyoruz...
  const ders="component";
  const vize1=60;
  const vize2=80;
  const sonuc=true;
  const isimler=[
    "burhan",
    "ayşe",
    "umut",
    "delal"
  ];
  return (
    <div>
    React  : {ders} <hr />
    ortalama:{(vize1 + vize2)/2} <hr />
    {sonuc ? <p>Geçtii</p> : <p>Kaldı</p> } <hr /> 
      {
      (vize1 + vize2 )/2 >=50 ? <p>geçtin aferin</p> : <p>kaldın geçmiş olsun</p>
    }<hr /> 
    
    {
      isimler.map((isim,i)=>(
        <div style={{color:"red", border:"1px solid black"}} key={i}>{isim}</div>
      ))
    }
    </div>
    )
}

export default App;
