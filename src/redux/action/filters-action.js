// создание функции Action-creator(по возврату объекта) связанные с фильтрацией

// изменение фильтрации
const setSortBy = (name) => ({
    type: 'SET_SORT_BY',
    payload: name
});



// изменение категории
const setCategory = (cartIndex) =>({
    type: 'SET_CATEGORY',
    payload: cartIndex
});
