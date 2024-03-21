// ?COUNTER TYPE DECLARATİON
export const INC =  "INC"
export const CLR = 'CLR'
export const DEC = 'DEC'

// State'lerin başlangıç durumlarının belirlenmesi. başlangıç ​​durumu tanımlanması.Bu durum, count adında bir özellik içeriyor ve başlangıçta 10 değerini alıyor.
const initialState={
    count:0,
}

// counterReducer fonksiyonu, state ve action parametrelerini alır. state parametresi, uygulamanın mevcut durumunu temsil ederken, action parametresi, gerçekleştirilmek istenen eylemi belirtir.
// ? Pure Function (reducer)
export const counterReducer=(state=initialState,action)=>{
    switch (action.type) {

        case INC:
        return {count:state.count + 1 }; 
            
        case DEC:
            return{count:state.count - 1}

            case CLR:
                return{count:0}
        default:
            return state
            // ! Reducer fonksiyonu daima bir state objesi dödürmelidir..Yanlış bir type gelse bile state'in ilk halini döndürmelidir...
    }
}