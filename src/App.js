import './App.css'

import React, { useContext } from 'react'

import { AppleContext } from './state/apple_state'
import { PearContext } from './state/pear_state'
import SomeComponent from './components/SomeComponent'

const App = () => {
  const [apple] = useContext(AppleContext)
  const [pear] = useContext(PearContext)

  const count = [apple, pear].filter(item => item.includes('start')).length

  return (
    <div className="App">
      <h1>{count} starting</h1>
      <SomeComponent />
    </div>
  )
}

export default App
