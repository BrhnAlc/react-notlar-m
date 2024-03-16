
import './App.css'
import Product from './Product'


function App() {
  

  return (
    <div>
    <Product productName="ayakabı"  price="3200"/> 
    <hr />
    <Product productName="pantolon"  price={950}/>
    <hr />
    <Product productName="pantolon"  price={1000}/>

    </div>
  )
}

export default App


// Bir componenten bir componente veri taşımaya denir
// Props, React'te componentler arasında veri aktarmak için kullanılan bir nesnedir.

//! Props'un Özellikleri:

// Props, {} süslü parantezlerle tanımlanır.
// Her prop, bir anahtar ve bir değere sahip olabilir.
// Anahtarlar, string türünde olmalıdır.
// Değerler, herhangi bir JavaScript türünde olabilir.
// Props, component'in içinde değiştirilemez.
// Props, component'e tek yönlü olarak aktarılır.

//! Props Kullanmanın Faydaları:

// Kodun tekrar kullanılabilirliğini artırır.
// Componentleri birbirinden bağımsız hale getirir.
// Kodun daha modüler ve organize olmasını sağlar.
// Veri akışını takip etmeyi kolaylaştırır.