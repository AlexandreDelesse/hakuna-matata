import React from 'react'
import PropTypes from 'prop-types'

import { IoIosArrowBack } from 'react-icons/io'
import '../buttons.css'

function BackButton(props) {
  const { onClick, label } = props
  return (
    <div className='backButton d-flex align-items-center' onClick={onClick}>
      <IoIosArrowBack className='me-2' />
      {label}
    </div>
  )
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default BackButton
