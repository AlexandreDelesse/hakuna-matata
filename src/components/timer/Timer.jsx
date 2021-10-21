import React, { useState, useEffect } from 'react'

export default function Timer() {
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)

  const resetTimer = () => {
    setTime(0)
  }

  const startTimer = () => {
    setStart(true)
  }

  const stopTimer = () => {
    setStart(false)
  }

  useEffect(() => {
    let interval = null

    if (start) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000)
      }, 1000)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [start])

  return (
    <div className="p-4 d-flex flex-column align-items-center">
      <div className="display-3 d-flex justify-content-center align-items-center w-75 mb-2">
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}</span>
        <span className='mx-3'>:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div className='d-flex justify-content-center w-50'>
        <button className="btn btn-secondary me-2" onClick={resetTimer}>
          RESET
        </button>

        {start ? (
          <button className="btn btn-danger ms-2" onClick={stopTimer}>
            STOP
          </button>
        ) : (
          <button className="btn btn-success ms-2" onClick={startTimer}>
            START
          </button>
        )}
      </div>
    </div>
  )
}
