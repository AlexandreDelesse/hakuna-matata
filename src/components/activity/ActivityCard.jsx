import React from 'react'
import PropTypes from 'prop-types'

function ActivityCard(props) {
  const { activity } = props
  return (
    <div className="m-2 border">
      <div className="m-1">{activity.exerciceId}</div>
      <div className="m-1">{activity.reps}</div>
      <div className="m-1">{activity.weight}</div>
      <div className="m-1">{activity.createdAt}</div>
    </div>
  )
}

ActivityCard.propTypes = {
  activity: PropTypes.instanceOf(Object),
}

export default ActivityCard
