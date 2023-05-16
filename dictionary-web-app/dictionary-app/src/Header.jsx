import { useState } from 'react'
import dictionaryLogo from './assets/iconoir_book.png'
import oval from './assets/ovalwhite.png'
import halfmoon from './assets/iconoir_half-moon.png'
import halfmoondark from './assets/iconoir_half-moon-dark.png'
import iconoir_search from './assets/iconoir_search.png'
import audioIcon from './assets/Group4.png'
import './App.css'

export default function Header ( {isLightMode, fontSpecified, onToggle, onFontChange}){
  const spanLight = <span className='spanLight' onClick={ () => onToggle()}  ><img src={oval} className='oval' /></span>

  const spanDark = <span className='spanDark' onClick={ () => onToggle()}  >
  <img src={oval} className='oval'  />
  </span>

  const white = {
    color : 'white',
    backgroundColor: 'black',
    fontFamily: fontSpecified == 'San Serif' ? 'San Serif' : fontSpecified == 'Serif' ? 'Serif' : 'Monospace'
  }
  const black = {
    color : 'black',
    fontFamily: fontSpecified == 'San Serif' ? 'San Serif' : fontSpecified == 'Serif' ? 'Serif' : 'Monospace'
  }

  return(
    <div className='Header'>
      <img src={dictionaryLogo} alt='dictionary-icon' />
      <div className='innerHeader'>
      <select id="fonts" name="fonts" onChange={(e) => onFontChange(e.target.value)} style={isLightMode ? black : white}>
          <option value="San Serif">San Serif</option>
          <option value="Serif">Serif</option>
          <option value="Mono">Mono</option>
      </select>
      <div className='innHeader'>
      {isLightMode ? spanLight : spanDark}
      {isLightMode ? <img src={halfmoon} /> : <img src={halfmoondark} /> }
      </div>
      </div>
    </div>
  )
}