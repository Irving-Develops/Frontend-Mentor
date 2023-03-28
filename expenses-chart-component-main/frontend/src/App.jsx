import React, { useState } from 'react'
import './App.css'
import MyBalance from './components/MyBalance/MyBalance.jsx'
import MySpending from './components/MySpending/MySpending.jsx'
function App() {

  return (
    <div className="App">
      <MyBalance />
      <MySpending />
    </div>
  )
}

export default App
