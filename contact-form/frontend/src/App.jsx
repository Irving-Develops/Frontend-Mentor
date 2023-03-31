import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import ContactForm from './Components/ContactForm/ContactForm'
import SetLanguage from './Components/SetLanguage/SetLanguage'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Hero from './Components/Hero/Hero'

function App() {
  return (
    <div className="App w-screen p-0 flex flex-col justify-center">
      <Routes>
        <Route path="/" element={
        <>
          <Navbar />
          <Hero />
          <SetLanguage />
          <ContactForm />
        </>
      } />
      </Routes>
    </div>
  )
}

export default App
