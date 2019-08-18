import './App.css'

import App from './App'
import React from 'react'
import Store from './state/store'

const Root = () => {
  return (
    <Store>
      <App />
    </Store>
  )
}

export default Root
