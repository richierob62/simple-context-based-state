import React, { useContext } from 'react'

import { AppleContext } from '../state/apple_state'
import { PearContext } from '../state/pear_state'
import alert from '../async/alert'

export default () => {
  const { apple, setApple } = useContext(AppleContext)
  const { pear, setPear } = useContext(PearContext)

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

      <h2 onClick={() => alert(pear, setPear)}>{pear}</h2>
    </div>
  )
}
