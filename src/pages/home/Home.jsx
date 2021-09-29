import React from 'react'
import { useHistory } from 'react-router-dom'
import IconComponent from '../../components/iconComponent/IconComponent'
import { IoFastFood } from 'react-icons/io5'
import { IoIosFitness } from 'react-icons/io'

export default function Home() {
  const history = useHistory()

  const handleOnIconClick = (label) => {
    history.push(`/${label}`)
  }

  return (
    <div className="p-5 d-flex">
      <IconComponent
        onClick={handleOnIconClick}
        appName="foodstuffs"
        icon={<IoFastFood width="80px" height="80px" />}
        className="m-2"
      />
      <IconComponent
        onClick={handleOnIconClick}
        appName="activities"
        icon={<IoIosFitness width="80px" height="80px" />}
        className="m-2"
      />
    </div>
  )
}
