import React from 'react'
import PropTypes from 'prop-types'

function ActivityCard(props) {
  const { activity, onDelete } = props

  const handleOnDelete = () => {
    onDelete(activity.id)
  }
  return (
    <div className="m-2 border">
      <div>{activity.exercice.label}</div>
      <div>
        {activity.series && activity.series.map((serie) => (
          <div>
            repetitions: {serie.repetitions}
            <div>poid : {serie.poid}</div>
          </div>
        ))}
      </div>
      <button onClick={handleOnDelete}>delete</button>
    </div>
  )
}

ActivityCard.propTypes = {
  activity: PropTypes.instanceOf(Object).isRequired,
  onDelete: PropTypes.func,
}
ActivityCard.defaultProps = {
  onDelete: () => {},
}

export default ActivityCard
