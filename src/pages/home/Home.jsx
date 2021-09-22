import React from 'react'
import { useHistory } from 'react-router-dom'
import IconComponent from '../../components/iconComponent/IconComponent'
import { IoFastFood } from 'react-icons/io5'

export default function Home() {
  const history = useHistory()

  const handleOnIconClick = (label) => {
    history.push(`/${label}`)
  }

  return (
    <div className="p-5">
      <div className="d-flex">
        <IconComponent
          onClick={handleOnIconClick}
          appName="foodstuffs"
          icon={<IoFastFood width="80px" height="80px" />}
        />
      </div>
    </div>
  )
}
