import React, { useState } from 'react'

import { setUserId } from '../../store'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import packageJson from '../../../package.json'

import './login.css'

export default function Login() {
  const history = useHistory()
  const dispatch = useDispatch()

  const [userInput, setUserInput] = useState('')

  const handleOnUserInputChange = (e) => {
    const { value } = e.target
    setUserInput(value)
  }

  const handleOnLoginButtonClick = () => {
    if (!userInput) return
    dispatch(setUserId(userInput))
    history.push('/home')
  }
  return (
    <div className="loginBackground">
      <div className="position-absolute top-0 left-0 fs-6 fw-light ms-1">
        v{packageJson.version}
      </div>
      <div className="d-flex justify-content-center align-items-center loginContainer border rounded p-4">
        <div>
          <label>Username</label>
          <input
            className="form-control"
            type="text"
            value={userInput}
            name="id"
            placeholder="Who are you ? "
            onChange={handleOnUserInputChange}
          />
          <button
            type="text"
            className="btn btn-primary mt-3"
            onClick={handleOnLoginButtonClick}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
