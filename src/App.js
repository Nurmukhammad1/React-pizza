import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import {Home, Cart} from './pages';




function App() {

  return (
    <>
      <div className='wrapper'>
        <Header /> {/* Добавление функционального компонента Header*/}
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/cart"  element={<Cart />}></Route>    
          </Routes>
        
         
       
        </div>
      </div>
    </>
  );
}

export default App;

