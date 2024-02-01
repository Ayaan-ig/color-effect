import React, { useState } from 'react'
import './ColourBlock.css'
import styled from 'styled-components';

export default function ColourBlock({itscolor,size}) {
  
  return (
<Block onMouseOver={()=>{setColored(true)}} size={size} onMouseLeave={()=>{setColored(false)}}mycolor={itscolor}></Block>
  )
}

const Block = styled.div`
  height: ${props=>`${props.size}rem`};
  width: ${props=>`${props.size}rem`};
  border-radius: 3px;
  transition: background-color 0.9s;
  
  &:hover{
    background-color: ${(props)=>props.mycolor};
    transition: none;
  }
`