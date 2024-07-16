// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductsList from './components/ProductsList';
// import Card from './components/Card'
// import Data from './Data'
// import Header from './components/Header'
// import Product from './components/Product';
// import FormClass from './components/Form'
// import Log from './components/LogIn'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <div className='parent'>
  //    <Header imUrl= "./images/menu.png"/>
  //    <div className='cards'>
  //    {Data.map((item, index) => (
  //     <Card
  //       // key={index}
  //       imgUrl={item.imgUrl}
  //       ingrediants={item.ingrediants}
  //       info={item.info}
  //       price={item.price}
  //     />
  //   ))}
  //   </div>
  // <Product name="product 1" description="lorim lorim lorim" price="120$" />
  // <Product name="product 1" description="lorim lorim lorim" price="120$" />
  // <Product name="product 1" description="lorim lorim lorim" price="120$" />
  // <FormClass />
  // </div>
  // < Log In userName="amir" />
  <ProductsList />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
