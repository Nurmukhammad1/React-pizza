
const initialState = {
   items:[],
   isLoaded: false //начальный процесс загрузки приложения
};


const pizzas = (state = initialState, action) =>{
    if (action.type === 'SET_PIZZAS'){
        return{
            ...state, //старые данные
            items: action.payload, //замена на новые
            isLoaded: true //после отображения содержимого
        };
    }
    return state; //возврат старого state если не произошла замена на новый state
}

export default pizzas;