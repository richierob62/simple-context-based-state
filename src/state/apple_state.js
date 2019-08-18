import React, { useState } from 'react'

import AppleContext from '../context/apple_context'

const initialState = 'apple starts here'

export default ({ children }) => {
  const [apple, setApple] = useState(initialState)

  return (
    <AppleContext.Provider value={[apple, setApple]}>
      {children}
    </AppleContext.Provider>
  )
}
