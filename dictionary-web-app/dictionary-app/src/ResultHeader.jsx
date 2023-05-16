import { useState } from 'react'
import dictionaryLogo from './assets/iconoir_book.png'
import oval from './assets/oval.png'
import halfmoon from './assets/iconoir_half-moon.png'
import halfmoondark from './assets/iconoir_half-moon-dark.png'
import iconoir_search from './assets/iconoir_search.png'
import audioIcon from './assets/Group4.png'
import './App.css'

export default function ResultHeader ({isLightMode, fontSpecified, word, phonetic}){
    return(
      <div className='resultHeader'>
        <div className='wp'>
          <h1 style={isLightMode ? null : {color:'white'}}>{word}</h1>
          <span>{phonetic}</span>
        </div>
        <img src={audioIcon} />
      </div>
    )
  }