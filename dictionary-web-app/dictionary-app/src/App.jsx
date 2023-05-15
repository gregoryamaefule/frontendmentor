import { useState } from 'react'
import dictionaryLogo from './assets/iconoir_book.png'
import oval from './assets/oval.png'
import halfmoon from './assets/iconoir_half-moon.png'
import halfmoondark from './assets/iconoir_half-moon-dark.png'
import iconoir_search from './assets/iconoir_search.png'
import audioIcon from './assets/Group4.png'
import './App.css'



function Header ( {isLightMode}){
  const spanLight = <span className='spanLight'><img src={oval} className='oval' /></span>

  const spanDark = <span className='spanDark'>
  <img src={oval} className='oval'  />
  </span>

  const white = {
    color : 'white',
    backgroundColor: 'black'
  }
  const black = {
    color : 'black'
  }

  return(
    <div className='Header'>
      <img src={dictionaryLogo} alt='dictionary-icon' />
      <div className='innerHeader'>
      <select id="fonts" name="fonts" style={isLightMode ? black : white}>
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

function Search ({value, isLightMode}){
  const darkMode = {
    backgroundColor: '#1f1f1f',
    color: 'white'
  }
  return(
    <form style={isLightMode ? null : darkMode}>
      <input 
        type="text" 
        value={value} 
        style={isLightMode ? null : {backgroundColor:'#1f1f1f', color:'white'}}
        placeholder="keyboard"/>
      <button
      style={isLightMode ? null : {backgroundColor:'#1f1f1f'}}
      >
        <img src={iconoir_search} />
      </button>

    </form>
  )
}

function ResultHeader ({word, phonetic}){
  return(
    <div className='resultHeader'>
      <div className='wp'>
        <h1>{word}</h1>
        <span>{phonetic}</span>
      </div>
      <img src={audioIcon} />
    </div>
  )
}

function PartOfSpeech({meaning}){
  if(meaning == undefined){
    return null
  }
  const listitems =  meaning.definitions.map( item => {
    return(
      <>
        <li className='li'>{item.definition}</li>
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
    <span className='ps'>{meaning.partOfSpeech}</span>
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


function App() {
  const [count, setCount] = useState(0)
  const repl = [
    {
      "word": "hello",
      "phonetic": "həˈləʊ",
      "phonetics": [
        {
          "text": "həˈləʊ",
          "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
        },
        {
          "text": "hɛˈləʊ"
        }
      ],
      "origin": "early 19th century: variant of earlier hollo ; related to holla.",
      "meanings": [
        {
          "partOfSpeech": "exclamation",
          "definitions": [
            {
              "definition": "used as a greeting or to begin a phone conversation.",
              "example": "hello there, Katie!",
              "synonyms": [],
              "antonyms": []
            }
          ]
        },
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "an utterance of ‘hello’; a greeting.",
              "example": "she was getting polite nods and hellos from people",
              "synonyms": [],
              "antonyms": []
            }
          ]
        },
        {
          "partOfSpeech": "verb",
          "definitions": [
            {
              "definition": "say or shout ‘hello’.",
              "example": "I pressed the phone button and helloed",
              "synonyms": [],
              "antonyms": []
            }
          ]
        }
      ]
    }
  ]

  const repl1 = [
    {
      "word": "keyboard",
      "phonetic": "/ˈkiːbɔːd/",
      "phonetics": [
        {
          "text": "/ˈkiːbɔːd/",
          "audio": ""
        },
        {
          "text": "/ˈkiːbɔːd/",
          "audio": ""
        },
        {
          "text": "/ˈkibɔɹd/",
          "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3",
          "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=1755168",
          "license": {
            "name": "BY-SA 3.0",
            "url": "https://creativecommons.org/licenses/by-sa/3.0"
          }
        }
      ],
      "meanings": [
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "(etc.) A set of keys used to operate a typewriter, computer etc.",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
              "synonyms": [],
              "antonyms": []
            },
            {
              "definition": "A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
              "synonyms": [],
              "antonyms": []
            }
          ],
          "synonyms": [
            "electronic keyboard"
          ],
          "antonyms": []
        },
        {
          "partOfSpeech": "verb",
          "definitions": [
            {
              "definition": "To type on a computer keyboard.",
              "synonyms": [],
              "antonyms": [],
              "example": "Keyboarding is the part of this job I hate the most."
            }
          ],
          "synonyms": [],
          "antonyms": []
        }
      ],
      "license": {
        "name": "CC BY-SA 3.0",
        "url": "https://creativecommons.org/licenses/by-sa/3.0"
      },
      "sourceUrls": [
        "https://en.wiktionary.org/wiki/keyboard"
      ]
    }
  ]
  

  const word = repl1[0].word;
const phonetic = `${repl1[0].phonetic}`

const partOfSpeech0 = repl1[0].meanings[0];
const partOfSpeech1 = repl1[0].meanings[1];
const partOfSpeech2 = repl1[0].meanings[2];

  return (
    <>
      <Header isLightMode={true}/>
      <Search value='keyboard' isLightMode={true} />
      <ResultHeader word={word} phonetic={phonetic} />
      <PartOfSpeech meaning={partOfSpeech0} />
      <PartOfSpeech meaning={partOfSpeech1} />
      <PartOfSpeech meaning={partOfSpeech2} />
    </>
  )
}

export default App
