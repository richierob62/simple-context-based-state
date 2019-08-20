import AppleState from '../state/apple_state'
import PearState from '../state/pear_state'
import React from 'react'

// add states here
const allStates = [AppleState, PearState]

export default ({ children }) => {
  let output = null

  allStates.forEach(State => {
    if (!output) {
      output = <State>{children}</State>
    } else {
      output = <State>{output}</State>
    }
  })

  return output
}
