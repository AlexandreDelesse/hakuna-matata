import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CategoriesSelector from './CategoriesSelector'

function ExerciceForm(props) {
  const { onCreate, exercices, isCreating } = props

  const [exercice, setExercice] = useState({
    label: '',
    category: [],
  })

  const handleOnLabelChanges = (e) => {
    const { name, value } = e.target
    if (value) setExercice({ ...exercice, [name]: value })
  }

  const handleOnCreateExercice = () => {
    const { label, category } = exercice
    if (!label | !category.length) {
      return
    }
    onCreate(exercice)
  }

  const handleOnCategoriesChange = (category) => {
    setExercice({ ...exercice, category })
  }

  const onAddedCategory = () => [setExercice({ ...exercice, label: '' })]

  return (
    <div className="d-flex flex-column  align-items-center rounded bg-light p-2">
      <input
        type="text"
        className="hm-input w-50"
        name="label"
        value={exercice.label}
        onChange={handleOnLabelChanges}
        placeholder="Nom de l'exercice"
      />

      <CategoriesSelector
        className="w-50 mt-2"
        onCategoriesChanged={handleOnCategoriesChange}
      />

      <button
        className="btn btn-success w-50 mt-2"
        onClick={handleOnCreateExercice}
        disabled={isCreating}
      >
        Add
      </button>
    </div>
  )
}

ExerciceForm.propTypes = {
  onCreate: PropTypes.func,
  isCreating: PropTypes.bool,
}

ExerciceForm.defaultProps = {
  onCreate: () => {},
  isCreating: false,
}

export default ExerciceForm
