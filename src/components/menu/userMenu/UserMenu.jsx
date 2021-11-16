import React from 'react'
import PropTypes from 'prop-types'

function UserMenu(props) {
  const { labels, className } = props
  return (
    <div className={className}>
      {labels.map((label) => (
        <div>{label}</div>
      ))}
    </div>
  )
}

UserMenu.propTypes = {
  labels: PropTypes.array.isRequired,
  className: PropTypes.string,
}

UserMenu.defaultProps = {
  className: '',
}

export default UserMenu
