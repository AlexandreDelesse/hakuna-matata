import React from 'react'
import PropTypes from 'prop-types'
import { IoFastFood } from 'react-icons/io5'

import './iconComponent.css'

function IconComponent(props) {
  const { appName, onClick, icon } = props
  const handleOnAppClick = () => {
    onClick(appName)
  }

  return (
    <div onClick={handleOnAppClick} className="iconContainer">
      <div className="icon d-flex justify-content-center align-items-center">
        {icon}
      </div>
      <div className="iconLabel">{appName}</div>
    </div>
  )
}

IconComponent.propTypes = {
  appName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.instanceOf(Object).isRequired,
}

IconComponent.defaultProps = {
  onClick: () => {},
}

export default IconComponent
