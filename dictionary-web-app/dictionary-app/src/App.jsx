import { useState } from 'react'
import dictionaryLogo from './assets/iconoir_book.png'
import oval from './assets/oval.png'
import halfmoon from './assets/iconoir_half-moon.png'
import halfmoondark from './assets/iconoir_half-moon-dark.png'
import iconoir_search from './assets/iconoir_search.png'
import audioIcon from './assets/Group4.png'
import './App.css'
import PartOfSpeech from './PartOfSpeech'
import Search from './Search'
import ResultHeader from './ResultHeader'
import Header from './Header'
import repl1 from './data'



function App() {
  const [isLightModee, setIsLightMode] = useState(true);
  const [fontSpecifiedd, setfontSpecifiedd] = useState('San Serif');
  const [valuee, setvaluee] = useState('keyboard');
  const [replyy, setReply] = useState(repl1);

  function handleSubmit(e){
    e.preventDefault();
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${valuee}`)
    .then((result) => result.json() )
    .then((data) => {
        console.log(data)
        setReply(data == null ? null : data)
    })
    .catch((err) => {
      console.error(err);
    })
  }
  
  function handleClick(){
    setIsLightMode(!isLightModee);
  }

  function handleOnFontChange(e){
    setfontSpecifiedd(e)
  }

  function handleSearchWordChange(e){
    setvaluee(e)
  }

  document.querySelector('body').style.backgroundColor = isLightModee ? 'white' : 'black';
  document.querySelector('body').style.fontFamily = fontSpecifiedd == 'San Serif' ? 'San Serif' : fontSpecifiedd == 'Serif' ? 'Serif' : 'Monospace';


  
const word = replyy[0].word;
const phonetic = `${replyy[0].phonetic}`

const partOfSpeech0 = replyy[0].meanings[0];
const partOfSpeech1 = replyy[0].meanings[1];
const partOfSpeech2 = replyy[0].meanings[2];

  return (
    <>
      <Header isLightMode={isLightModee} fontSpecified={fontSpecifiedd} onToggle={handleClick} onFontChange={handleOnFontChange} />
      <Search value={valuee} isLightMode={false} fontSpecified={fontSpecifiedd} onSearchWordChange={handleSearchWordChange} onSubmit={handleSubmit}/>
      <ResultHeader isLightMode={isLightModee} fontSpecified={fontSpecifiedd} word={word} phonetic={phonetic} />
      <PartOfSpeech isLightMode={isLightModee} fontSpecified={fontSpecifiedd} meaning={partOfSpeech0} />
      <PartOfSpeech isLightMode={isLightModee} fontSpecified={fontSpecifiedd} meaning={partOfSpeech1} />
      <PartOfSpeech isLightMode={isLightModee} fontSpecified={fontSpecifiedd} meaning={partOfSpeech2} />
    </>
  )
}

export default App
