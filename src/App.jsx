import { useState } from 'react'
import './App.css'
import ColourEffect from './components/ColourEffect'
import styled from 'styled-components'

function App() {

  return (
  
    
        <EffectContainer>

      <ColourEffect size= {0.6} blockcount={800}/> 
    </EffectContainer>
    
  )
}

export default App;





const EffectContainer = styled.div`
  width: 15rem;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
  border: 3px solid rgb(60, 59, 59);
  border-radius: 8px;
 `
const Container = styled.div`

 `
