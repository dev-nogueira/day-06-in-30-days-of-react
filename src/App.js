import Button from './Button'
import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height:95vh;
  }
`;

function App() {
  const [posOne, setPosOne] = useState(0)
  const [posTwo, setPosTwo] = useState(0)

  const randPos = () => {
    setPosOne( Math.floor( Math.random() * 300 ))
    setPosTwo( Math.floor( Math.random() * 300 ))
  }

  return (
    <>
      <Button onMouseEnter={() => randPos()} leftP={`${posOne}px`} topP={`${posTwo}px`}/>
      <GlobalStyles/>
    </>
  );
}

export default App;