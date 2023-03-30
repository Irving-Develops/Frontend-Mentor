import { useState } from 'react'
import ContactForm from './Components/ContactForm/ContactForm'
import SetLanguage from './Components/SetLanguage/SetLanguage'
import './App.css'

function App() {

  return (
    <div className="Appw-screen p-0 flex flex-col justify-center">
      <SetLanguage />
      <ContactForm />
    </div>
  )
}

export default App
