import React from 'react'
import PropTypes from 'prop-types'

import profilePlaceholder from '../../../assets/images/male-placeholder-image.jpeg'

import './profileMenuCard.css'

function ProfileMenuCard(props) {
  const { user, className } = props

  return (
    <div className={`profileMenuCardContainer ${className}`}>
      <div className="profileMenuCardLabel me-2">{user}</div>
      <img
        // onClick={handleOnImageClick}
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
}

ProfileMenuCard.defaultProps = {
  className: '',
}

export default ProfileMenuCard
