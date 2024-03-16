

import './App.css'
import Hello from './Hello';
import Login from './Login';
import {users} from './Login'
// export default yaptıklarımızı süslü parantez kullanmadan import ediyoruz ve dilediğimiz isimle kullanabiliyoruz.
// Sadece export olarak kullandıklarımızı import ederken süslü parantez kullanmak zorundayız ve aynı isimle çağırmak zorundayız...

function App() {
 console.log(users);
  return (
    <div>
    
      <Hello/>
      <Login/>
      
    </div>
  )
}

export default App




// Bir componentin uzantısı jsx ise   js  kodları daha rahat yazmamızı  sağlar...

// export disarı çıkarmak ,açmak anlamına geliyor...