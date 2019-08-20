import React, { useMemo, useState } from 'react'

const initialState = 'pear starts here'

export const PearContext = React.createContext([initialState, () => {}])

export default ({ children }) => {
  const [pear, setPear] = useState(initialState)

  const pearState = useMemo(() => ({ pear, setPear }), [pear, setPear])

  return (
    <PearContext.Provider value={pearState}>{children}</PearContext.Provider>
  )
}
