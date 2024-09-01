
// export default yaptıklarımızı süslü parantez kullanmadan import ediyoruz ve dilediğimiz isimle kullanabiliyoruz.
// Sadece export olarak kullandıklarımızı import ederken süslü parantez kullanmak zorundayız ve aynı isimle çağırmak zorundayız...

import Login from "./Login"

function App() {
 
  return (
    <div>
      <Login/>
      
    </div>
  )
}

export default App




// Bir componentin uzantısı jsx ise   js  kodları daha rahat yazmamızı  sağlar...

// export disarı çıkarmak ,açmak anlamına geliyor...