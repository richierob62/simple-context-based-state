import AppleState from '../state/apple_state'
import PearState from '../state/pear_state'
import React from 'react'

export default ({ children }) => (
  <PearState>
    <AppleState>{children}</AppleState>
  </PearState>
)
