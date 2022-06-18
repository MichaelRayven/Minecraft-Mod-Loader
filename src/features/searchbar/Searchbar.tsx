import React, { FC, useEffect, useState } from 'react'
import SpeechOverlay from '../speech-overlay/SpeechOverlay';
import './Searchbar.css'

interface SearchProps {
    placeholder?: string;
}

const Searchbar: FC<SearchProps> = ({ placeholder }) => {  
    const [text, setText] = useState<string>('')
    const [listening, setListening] = useState<boolean>(false)

    const handleClear = () => {
        setText('')
    }

    const handleSpeech = () => {
        setListening(true)
    }
    
    const handleSpeechResult = () => {
        setListening(false)
    }

    return (
        <>
            <div className="searchbar">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} className="searchbar__input" placeholder={ placeholder }/>
                <span className="searchbar__leading-icon material-symbols-rounded">search</span>
                { text.length ? 
                    <span className="searchbar__trailing-icon material-symbols-rounded" onClick={handleClear}>clear</span> : 
                    <span className="searchbar__trailing-icon material-symbols-rounded" onClick={handleSpeech}>keyboard_voice</span>
                }

            </div>
            { listening && <SpeechOverlay placeholder='Waiting...' onResult={handleSpeechResult}/> }
        </>
    )
}

export default Searchbar