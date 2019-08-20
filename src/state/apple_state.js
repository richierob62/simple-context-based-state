import React, { useMemo, useState } from 'react'

const initialState = 'apple starts here'

export const AppleContext = React.createContext([initialState, () => {}])

export default ({ children }) => {
  const [apple, setApple] = useState(initialState)

  const appleState = useMemo(() => ({ apple, setApple }), [apple, setApple])

  return (
    <AppleContext.Provider value={appleState}>{children}</AppleContext.Provider>
  )
}
