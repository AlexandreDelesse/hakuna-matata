import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory();

  const handleOnIconClick = (label) => {
      history.push(label);
  }

  return (
    <div>
      <p>Welcom home :)</p>
      <button type='button' onClick={() => handleOnIconClick('/foodstuffs')}>
        click me to go at foodstuff
      </button>
    </div>
  )
}
