import React from 'react'

import { setUserId } from '../../store'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import packageJson from '../../../package.json'

import './login.css'
import ProfileCard from '../../components/profile/profileCard/ProfileCard'

export default function Login() {
  const history = useHistory()
  const dispatch = useDispatch()

  const users = ['alexandre', 'alexia']

  const handleOnProfileClick = (user) => {
    if (!user) return
    dispatch(setUserId(user))
    history.push('/home')
  }

  return (
    <div className="loginBackground">
      <div className="position-absolute top-0 left-0 fs-6 fw-light ms-1">
        v{packageJson.version} nom : {packageJson.name}
      </div>
      <div className="d-flex justify-content-center align-items-center loginContainer ">
        {users.map((user) => (
          <ProfileCard
            key={user}
            user={user}
            className="mx-4"
            onClick={handleOnProfileClick}
          />
        ))}
      </div>
    </div>
  )
}
