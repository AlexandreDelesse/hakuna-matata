import React from 'react'
import PropTypes from 'prop-types'

function DateFormat(props) {
  const { isoDate, className } = props

  const date = new Date(isoDate)
  
  return <div className={className}>{date.toLocaleDateString()}</div>
}

DateFormat.propTypes = {
  isoDate: PropTypes.string.isRequired,
  className: PropTypes.string,
}

DateFormat.defaultProps = {
  className: '',
}

export default DateFormat
