// Material UI, Google tarafından geliştirilmiş, açık kaynak kodlu bir React UI kütüphanesidir. Kullanıcı arayüzleri oluşturmayı kolaylaştırmak için tasarlanmıştır ve çeşitli bileşenler, temalar ve araçlar sunar. Material UI'ın temel özellikleri şunlardır:
//? Bileşenler: Material UI, düğmeler, metin girişleri, kartlar ve modallar gibi birçok hazır bileşen içerir. Bu bileşenler, Google'ın Material Design ilkelerine göre tasarlanmıştır ve duyarlı ve erişilebilirdir.
// Temalar: Material UI, önceden tasarlanmış birkaç tema ve kendi temanızı oluşturmak için araçlar içerir. Temalar, renk paleti, tipografi ve gölgeleme gibi UI öğelerinin görünümünü ve hissini kontrol etmenizi sağlar.
//! Araçlar: Material UI, UI geliştirmeyi kolaylaştırmak için çeşitli araçlar sunar. Bu araçlar arasında renk paletleri oluşturucu, tipografi aracı ve gölgeleme aracı bulunur.



import TextFieldComp from "./components/TextFieldComp"
import Typo from "./components/Typo"



function App() {
 
  
  return (
    <div>
    <Typo/>
    <hr />
    <TextFieldComp/>
    </div>
  )
}

export default App
