// создание объекта 'SET_PIZZAS' с получением массива пицц
export const setPizzas = (items) =>({
    type: 'SET_PIZZAS',
    payload: items
});
