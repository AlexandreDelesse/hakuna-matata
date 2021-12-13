import React from 'react'
import { useHistory } from 'react-router-dom'
import IconComponent from '../../components/iconComponent/IconComponent'
import { IoFastFood } from 'react-icons/io5'
import { IoIosFitness } from 'react-icons/io'

import { getUser } from '../../redux/userRedux'

// import { useDispatch } from 'react-redux'
// import { setUserId } from '../../store'

import '../../fonts/HakunaMatata.ttf'
import './home.css'
import ProfileMenuCard from '../../components/profile/profileMenuCard/ProfileMenuCard'
import { useSelector } from 'react-redux'
import UserMenu from '../../components/menu/userMenu/UserMenu'

export default function Home() {
  const history = useHistory()
  const userMenuLabels = ['Exercices', 'Preferences']
  // const dispatch = useDispatch()

  const handleOnIconClick = (label) => {
    history.push(`/${label}`)
  }

  const handleOnProfileIconClick = () => {
    alert('coucou')
  }

  const user = useSelector(getUser)

  return (
    <div className="p-4 position-relative">
      <ProfileMenuCard user={user.id} onClick={handleOnProfileIconClick} />
      {/* <UserMenu className="position-absolute" labels={userMenuLabels} /> */}
      <div className="mb-4 mt-3 display-6">
        Hakuna matata
      </div>
      <div className="mt-5 d-flex flex-wrap">
        <IconComponent
          onClick={handleOnIconClick}
          appName="foodstuffs"
          icon={<IoFastFood width="80px" height="80px" />}
          className="m-2"
        />

        <IconComponent
          onClick={handleOnIconClick}
          appName="workout"
          icon={<IoIosFitness width="80px" height="80px" />}
          className="m-2"
        />

        <IconComponent
          onClick={handleOnIconClick}
          appName="activities"
          icon={<IoIosFitness width="80px" height="80px" />}
          className="m-2"
        />

        <IconComponent
          onClick={handleOnIconClick}
          appName="exercices"
          icon={<IoIosFitness width="80px" height="80px" />}
          className="m-2"
        />
      </div>
    </div>
  )
}
