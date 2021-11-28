import React from 'react'
import PropTypes from 'prop-types'
import { GrClose } from 'react-icons/gr'

function ExerciceList(props) {
  const { exercices, onDeleteExercice } = props

  const handleOnDeleteExercice = (exercice) => {
    onDeleteExercice(exercice.id)
  }

  return (
    <div className="dflex flex-column align-items-center  p-2">
      {exercices.map((exercice) => (
        <div className="my-3 rounded bg-light p-2">
          <div className="my-1 d-flex justify-content-between">
            {exercice.label}{' '}
            <GrClose onClick={() => handleOnDeleteExercice(exercice)} />
          </div>
          <div>
            {exercice.categories.map((category) => (
              <div className="ms-2 rounded  p-2">{category}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

ExerciceList.propTypes = {
  exercices: PropTypes.array.isRequired,
  onDeleteExercice: PropTypes.func.isRequired,
}

export default ExerciceList
