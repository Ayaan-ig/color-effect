import React from 'react'
import ColourBlock from './ColourBlock'

export default function ColourEffect({blockcount,size}) {
  function getRandomHexColor() {
    // Generate random RGB values
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    // Convert RGB to hex format
    const hexColor = `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1)}`;
  
    return hexColor;
  }
  const colorArray = []
  for (let index = 0; index < blockcount; index++) {
    colorArray.push(getRandomHexColor())
    
  }

  return (
    <>
        {/* <ColourBlock itscolor= "blue"/>
        <ColourBlock itscolor= "red"/>
        <ColourBlock itscolor= "green"/> */}
      {colorArray.map((elem)=>(<ColourBlock key={colorArray.indexOf(elem)} size={size} itscolor={elem}/>))}
    </>
  )
}
