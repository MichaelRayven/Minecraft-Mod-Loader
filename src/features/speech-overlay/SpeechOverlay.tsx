import React, { useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './SpeechOverlay.css'
import wave from './media/path.svg'

type Props = {
  onResult: (text: string) => void,
  placeholder: string
}

const SpeechOverlay = (props: Props) => {
  const {
    transcript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();
  const [error, setError] = useState<string | null>(null)

  const handleClose = () => {
    SpeechRecognition.stopListening()
    props.onResult('')
  }

  const handleDone = () => {
    SpeechRecognition.stopListening()
    props.onResult(transcript)
  }

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      setError("Your browser doesn't support speech recognition.")
    } else {
      if (isMicrophoneAvailable) {
        SpeechRecognition.startListening({continuous: true})
      } else {
        setError("Please allow microphone usage before using speech to text.")
      }
      
    }
  }, [browserSupportsSpeechRecognition, isMicrophoneAvailable])

  return (
    <div className="speech-overlay">
      <div className="speech-overlay__animation noselect">
        <img src={wave} alt="" className="speech-overlay__wave" />
        <img src={wave} alt="" className="speech-overlay__wave" />
        <img src={wave} alt="" className="speech-overlay__wave" />
      </div>
      <div className="speech-overlay__wrapper">
        { error ? 
          <h3 className="speech-overlay__placeholder">{ error }</h3> : transcript ? 
          <h3 className="speech-overlay__text">{ transcript }</h3> :
          <h3 className="speech-overlay__placeholder">{ props.placeholder }</h3>
        }
        <button className="speech-overlay__button-clear" onClick={handleClose}>
          <span className="material-symbols-rounded">close</span>
        </button>
        <button className="speech-overlay__button" onClick={handleDone}>
          <span className="speech-overlay__icon material-symbols-rounded">keyboard_voice</span>
        </button>
      </div>
    </div>
  )
}

export default SpeechOverlay