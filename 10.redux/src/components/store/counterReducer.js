// State'lerin başlangıç durumlarının belirlenmesi...
const initialState={
    count:0,
}
// ? Pure Function (reducer)
export const counterReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "INC":
        return {count:state.count + 1 }; 
            
        case "DEC":
            return{count:state.count - 1}
            case "CLR":
                return{count:0}
        default:
            return state
            // ! Reducer fonksiyonu daima bir state objesi dödürmelidir..Yanlış bir type gelse bile state'in ilk halini döndürmelidir...
    }
}