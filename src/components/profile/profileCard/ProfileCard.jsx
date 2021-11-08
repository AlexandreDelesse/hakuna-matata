import React from 'react'
import PropTypes from 'prop-types'

import profilePlaceholder from '../../../assets/images/male-placeholder-image.jpeg'

import './profileCard.css'

function ProfileCard(props) {
  const { user, className, onClick } = props

  const handleOnImageClick = () => {
    onClick(user)
  }

  return (
    <div className={`profileCardContainer ${className}`}>
      <img
        onClick={handleOnImageClick}
        src={profilePlaceholder}
        alt=""
        className="profileCardImage"
      />
      <div className="profileCardLabel mt-3">{user}</div>
    </div>
  )
}

ProfileCard.propTypes = {
  user: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

ProfileCard.defaultProps = {
  className: '',
}

export default ProfileCard
