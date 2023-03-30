import { useState } from 'react'
import ContactForm from './Components/ContactForm/ContactForm'
import SetLanguage from './Components/SetLanguage/SetLanguage'
import Navbar from './Components/Navbar/Navbar'
import './App.css'

function App() {

  return (
    <div className="Appw-screen p-0 flex flex-col justify-center">
      <Navbar />
      <SetLanguage />
      <ContactForm />
    </div>
  )
}

export default App
