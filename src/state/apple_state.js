import React, { useState } from 'react'

const initialState = 'apple starts here'

export const AppleContext = React.createContext([initialState, () => {}])

export default ({ children }) => {
  const [apple, setApple] = useState(initialState)

  return (
    <AppleContext.Provider value={[apple, setApple]}>
      {children}
    </AppleContext.Provider>
  )
}
