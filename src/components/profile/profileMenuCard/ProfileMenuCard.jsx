import React from 'react'
import PropTypes from 'prop-types'

import profilePlaceholder from '../../../assets/images/male-placeholder-image.jpeg'

import './profileMenuCard.css'

function ProfileMenuCard(props) {
  const { user, className, onClick } = props

  const handleOnImageClick = () => {
    onClick()
  }

  return (
    <div className={`profileMenuCardContainer ${className}`}>
      <div className="profileMenuCardLabel me-2">{user}</div>
      <img
        onClick={handleOnImageClick}
        src={profilePlaceholder}
        alt=""
        className="profileMenuCardImage"
      />
    </div>
  )
}

ProfileMenuCard.propTypes = {
  user: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

ProfileMenuCard.defaultProps = {
  className: '',
  onClick: () => {},
}

export default ProfileMenuCard
