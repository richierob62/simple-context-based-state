import React, { useContext } from 'react'

import AppleState from '../context/apple_context'
import PearState from '../context/pear_context'

export default () => {
  const [apple, setApple] = useContext(AppleState)
  const [pear] = useContext(PearState)

  return (
    <div>
      <h2
        onClick={() =>
          setApple(
            apple.indexOf('starts') > 0
              ? 'apple ends here'
              : 'apple starts here'
          )
        }
      >
        {apple}
      </h2>

      <h2>{pear}</h2>
    </div>
  )
}
