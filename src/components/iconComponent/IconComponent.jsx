import React from 'react'
import PropTypes from 'prop-types'

import './iconComponent.css'

function IconComponent(props) {
  const { appName, onClick, icon, className } = props
  const handleOnAppClick = () => {
    onClick(appName)
  }

  return (
    <div onClick={handleOnAppClick} className={`iconContainer ${className}`}>
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
  className: PropTypes.string,
}

IconComponent.defaultProps = {
  onClick: () => {},
  className: '',
}

export default IconComponent
