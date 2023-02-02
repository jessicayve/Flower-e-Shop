import React from 'react'
import Home from './pages/Home';
import { createGlobalStyle } from "styled-components";
import ProductList from './pages/ProductList';
import Product from './pages/Product';



export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

const App = () => {
  return (
    <>
    <GlobalStyled/>
   <Product/>

    </>
  )
}

export default App;