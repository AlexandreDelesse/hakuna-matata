import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getUserId } from '../../store'

import './activityForm.css'

function ActivityForm(props) {
  const { onCreate, exercices, isCreating } = props

  const userId = useSelector(getUserId)

  const [activity, setActivity] = useState({
    exerciceId: '',
    userId,
    series: { repetitions: '', poid: '' },
  })

  const handleOnInputChanges = (e) => {
    const { name, value } = e.target
    setActivity({ ...activity, [name]: value })
  }

  const handleOnInputSerieChange = (e) => {
    const { name, value } = e.target
    setActivity({ ...activity, series: { ...activity.series, [name]: value } })
  }

  const handleOnCreateActivity = () => {
    const { exerciceId, series } = activity
    if (!exerciceId || !series.repetitions || !series.poid) {
      return
    }
    onCreate(activity)
  }

  return (
    <div className="d-flex justify-content-between align-items-end">
      <div className="d-flex flex-column">
        <select
          className="hm-input"
          name="exerciceId"
          value={activity.exerciceId}
          onChange={handleOnInputChanges}
        >
          <option value="">Exercice</option>
          {exercices.map((exercice) => (
            <option key={exercice.id} value={exercice.id}>
              {exercice.label}
            </option>
          ))}
        </select>
      </div>

      <div className="d-flex flex-column">
        <input
          type="number"
          className="hm-input"
          name="poid"
          value={activity.series.poid}
          onChange={handleOnInputSerieChange}
          placeholder='poid'
        />
      </div>
      <div className="d-flex flex-column">
        <input
          type="number"
          className="hm-input"
          name="repetitions"
          value={activity.series.repetitions}
          onChange={handleOnInputSerieChange}
          placeholder='repetitions'
        />
      </div>

      <div className="d-flex flex-column justify-content-end">
        <button className="btn btn-success" onClick={handleOnCreateActivity} disabled={isCreating} >
          Add
        </button>
      </div>
    </div>
  )
}

ActivityForm.propTypes = {
  onCreate: PropTypes.func,
  isCreating: PropTypes.bool,
  exercices: PropTypes.arrayOf(Object),
}

ActivityForm.defaultProps = {
  onCreate: () => {},
  isCreating: false,
  exercices: [],
}

export default ActivityForm
