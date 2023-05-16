import { useState } from 'react'
import dictionaryLogo from './assets/iconoir_book.png'
import oval from './assets/oval.png'
import halfmoon from './assets/iconoir_half-moon.png'
import halfmoondark from './assets/iconoir_half-moon-dark.png'
import iconoir_search from './assets/iconoir_search.png'
import audioIcon from './assets/Group4.png'
import './App.css'

export default function Search ({value, isLightMode, fontSpecified}){
    const darkMode = {
      backgroundColor: 'inherit',
      color: 'white',
    }
    return(
      <form style={isLightMode ? null : darkMode}>
        <input 
          type="text" 
          value={value} 
          style={isLightMode ? {fontFamily:fontSpecified == 'San Serif' ? 'San Serif' : fontSpecified == 'Serif' ? 'Serif' : 'Monospace'} : {backgroundColor:'#1f1f1f', color:'white', fontFamily:fontSpecified == 'San Serif' ? 'San Serif' : fontSpecified == 'Serif' ? 'Serif' : 'Monospace'}}
          
          placeholder="keyboard"/>
        <button
        style={isLightMode ? null : {backgroundColor:'#1f1f1f'}}
        >
          <img src={iconoir_search} />
        </button>
  
      </form>
    )
  }