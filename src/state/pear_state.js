import React, { useState } from 'react'

const initialState = 'pear starts here'

export const PearContext = React.createContext([initialState, () => {}])

export default ({ children }) => {
  const [pear, setPear] = useState(initialState)

  return (
    <PearContext.Provider value={[pear, setPear]}>
      {children}
    </PearContext.Provider>
  )
}
