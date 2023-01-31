import React from 'react'
import Home from './pages/Home'
import { createGlobalStyle } from "styled-components";
export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const App = () => {
  return (
    <>
    <GlobalStyled/>
    <Home/>
    </>
  )
}

export default App;