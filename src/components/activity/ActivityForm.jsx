import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getUserId } from '../../store'

function ActivityForm(props) {
  const { onCreate, exercices } = props

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
    <div className="d-flex justify-content-between">
      <div className="d-flex flex-column">
        <label className="form-label">Exercice</label>
        <select
          className="form-control"
          name="exerciceId"
          value={activity.exerciceId}
          onChange={handleOnInputChanges}
        >
          <option value="">Selectionner un exercice</option>
          {exercices.map((exercice) => (
            <option key={exercice.id} value={exercice.id}>
              {exercice.label}
            </option>
          ))}
        </select>
      </div>

      <div className="d-flex flex-column">
        <label className="form-label">Repetitions</label>
        <input
          type="text"
          className="form-control"
          name="repetitions"
          value={activity.series.repetitions}
          onChange={handleOnInputSerieChange}
        />
      </div>

      <div className="d-flex flex-column">
        <label className="form-label">poid</label>
        <input
          type="text"
          className="form-control"
          name="poid"
          value={activity.series.poid}
          onChange={handleOnInputSerieChange}
        />
      </div>

      <div className="d-flex flex-column justify-content-end">
        <button className="btn btn-success" onClick={handleOnCreateActivity}>
          Add
        </button>
      </div>
    </div>
  )
}

ActivityForm.propTypes = {
  onCreate: PropTypes.func,
  exercices: PropTypes.arrayOf(Object),
}

ActivityForm.defaultProps = {
  onCreate: () => {},
  exercices: [],
}

export default ActivityForm
