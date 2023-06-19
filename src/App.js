import React from 'react';
import {Routes, Route} from 'react-router-dom';
import  axios from 'axios';
import {connect} from 'react-redux';

import Header from './components/Header';
import {Home, Cart} from './pages';
import { setPizzas as setPizzasAction } from './redux/action/pizzas-action';



// function App() {
//   // // fetch запрос по получению данных по товарам
//   // React.useEffect(() =>{
//   //   fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json =>{
//   //       setPizzas(json.pizzas);
//   //   });
//   // },[]);

//   // axios запрос по получению данных по товаров из json 
//   React.useEffect(() =>{
//     axios.get('http://localhost:3000/db.json').then(({data}) => {
//      setPizzas(data.pizzas)
//     });
//   },[]);

//   // return (
//   //   <>
//   //     <div className='wrapper'>
//   //       <Header /> {/* Добавление функционального компонента Header*/}
//   //       <div className='content'>
//   //         <Routes>
//   //           <Route path="/"  element={<Home items={pizzas}/>}></Route>
//   //           <Route path="/cart"  element={Cart}></Route>    
//   //         </Routes>
        
         
       
//   //       </div>
//   //     </div>
//   //   </>
//   // );
// }

class App extends React.Component{
  componentDidMount(){
    axios.get('http://localhost:3000/db.json').then(({data}) => {
           this.props.setPizzas(data.pizzas);
          });
  }
  render(){
      return (
    <>
      <div className='wrapper'>
        <Header /> {/* Добавление функционального компонента Header*/}
        <div className='content'>
          <Routes>
            <Route path="/"  element={<Home items={this.props.items} />}></Route>
            <Route path="/cart"  element={Cart}></Route>    
          </Routes>
        
         
       
        </div>
      </div>
    </>
  );
  }
}


const mapStateToProps = (state) =>{
 return {
  items: state.pizzas.items
 }
};


// функция для внедрения action-creator во внутрь props
const mapDispatchToProps = (dispatch) =>{
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items))
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (App);

