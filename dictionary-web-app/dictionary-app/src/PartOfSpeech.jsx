import { useState } from 'react'
import dictionaryLogo from './assets/iconoir_book.png'
import oval from './assets/ovalwhite.png'
import ovalpurp from './assets/oval.png'
import halfmoon from './assets/iconoir_half-moon.png'
import halfmoondark from './assets/iconoir_half-moon-dark.png'
import iconoir_search from './assets/iconoir_search.png'
import audioIcon from './assets/Group4.png'
import './App.css'

export default function PartOfSpeech({isLightMode, fontSpecified, meaning}){
    if(meaning == undefined){
      return null
    }
    const listitems =  meaning.definitions.map( item => {
      return(
        <>
          <li className='li' style={isLightMode ? null : {color: 'white'}}>{item.definition}</li>
          <span className='ex'>{item.example}</span>
        </>
      )
    }
    )
    const synonyms = meaning.synonyms.length != 0 ? 
    <p className='syn'>
      <span>Synonyms</span>
      <span className='sy'>{meaning.synonyms}</span>
    </p> : null
  
    
    return(
      <div className='POS'>
      <div className='hd'>
      <span className='ps' style={isLightMode ? null : {color: 'white'}}>{meaning.partOfSpeech}</span>
      <hr></hr>
      </div>
        <span className='MNG'>Meaning</span>
      <ul>
        {listitems}
      </ul>
      {synonyms}
      </div>
    )
  }