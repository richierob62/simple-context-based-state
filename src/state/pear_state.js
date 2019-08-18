import React, { useState } from 'react'

import PearContext from '../context/pear_context'

const initialState = 'pear starts here'

export default ({ children }) => {
  const [pear, setPear] = useState(initialState)

  return (
    <PearContext.Provider value={[pear, setPear]}>
      {children}
    </PearContext.Provider>
  )
}
