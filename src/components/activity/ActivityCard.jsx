import React from 'react'
import PropTypes from 'prop-types'

import { GrClose } from 'react-icons/gr'
import { IoIosStats, IoIosFitness } from 'react-icons/io'

import './activityCard.css'

function ActivityCard(props) {
  const { activity, onDelete } = props

  const handleOnDelete = () => {
    onDelete(activity.id)
  }
  return (
    <div className="p-2 rounded bg-light my-2 border position-relative">
      <GrClose className="activity-close-icon" onClick={handleOnDelete} />
      <div className='cardTitle'>{activity.exercice.label}</div>
      <div>
        {activity.series &&
          activity.series.map((serie) => (
            <div className='d-flex align-items-center'>
              <div className='me-5'>
                <IoIosStats className='me-2' />
                {serie.repetitions}
              </div>
              <div>
                <IoIosFitness className='me-2' /> {serie.poid}
              </div>
            </div>
          ))}
      </div>
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
