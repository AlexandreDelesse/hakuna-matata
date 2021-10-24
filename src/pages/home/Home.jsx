import React from 'react'
import { useHistory } from 'react-router-dom'
import IconComponent from '../../components/iconComponent/IconComponent'
import { IoFastFood } from 'react-icons/io5'
import { IoIosFitness } from 'react-icons/io'

// import { useDispatch } from 'react-redux'
// import { setUserId } from '../../store'

import '../../fonts/HakunaMatata.ttf'
import './home.css'

export default function Home() {
  const history = useHistory()
  // const dispatch = useDispatch()

  const handleOnIconClick = (label) => {
    history.push(`/${label}`)
  }

  return (
    <div className="p-4">
      <div className="mb-4 mt-3 display-6 text-center homeTitle">
        * Hakuna matata %
      </div>
      <div className="mt-5 d-flex">
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
      </div>
    </div>
  )
}
