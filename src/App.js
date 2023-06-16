import React from 'react';
import {Routes, Route} from 'react-router-dom';
import  axios from 'axios';

import Header from './components/Header';
import {Home, Cart} from './pages';




function App() {
  const [pizzas, setPizzas] = React.useState([]);

  // // fetch запрос по получению данных по товарам
  // React.useEffect(() =>{
  //   fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json =>{
  //       setPizzas(json.pizzas);
  //   });
  // },[]);

  // axios запрос по получению данных по товаров из json 
  React.useEffect(() =>{
    axios.get('http://localhost:3000/db.json').then(({data}) => {
     setPizzas(data.pizzas)
    });
  },[]);

  return (
    <>
      <div className='wrapper'>
        <Header /> {/* Добавление функционального компонента Header*/}
        <div className='content'>
          <Routes>
            <Route path="/"  element={<Home items={pizzas}/>}></Route>
            <Route path="/cart"  element={Cart}></Route>    
          </Routes>
        
         
       
        </div>
      </div>
    </>
  );
}

export default App;

