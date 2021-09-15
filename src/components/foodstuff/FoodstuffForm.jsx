import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Toast } from 'react-bootstrap'

function FoodstuffForm(props) {
  const { onCreate, onCancel } = props

  const [foodstuff, setFoodstuff] = useState({
    label: '',
    trademark: '',
    unit: '',
    protein: 0,
    lipid: 0,
    glucid: 0,
  })

  const handleOnInputChanges = (e) => {
    const { name, value } = e.target
    console.log(name)
    setFoodstuff({ ...foodstuff, [name]: value })
  }

  const handleOnCreateFoodstuff = () => {
    const { label, trademark, unit, protein, lipid, glucid } = foodstuff
    if (!label || !trademark || !unit || !protein || !lipid || !glucid) {
      return
    }
    onCreate(foodstuff)
  }

  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className="mb-3 w-100">
          <label className="form-label">Label</label>
          <input
            type="text"
            className="form-control"
            name="label"
            value={foodstuff.label}
            onChange={handleOnInputChanges}
          />
        </div>
        <div className="mb-3 w-100 mx-5">
          <label className="form-label">Trademark</label>
          <input
            type="text"
            className="form-control"
            name="trademark"
            value={foodstuff.trademark}
            onChange={handleOnInputChanges}
          />
        </div>
        <div className="mb-3 w-100">
          <label className="form-label">Unit</label>
          <input
            type="text"
            className="form-control"
            name="unit"
            value={foodstuff.unit}
            onChange={handleOnInputChanges}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="mb-3 w-100">
          <label className="form-label">Protein</label>
          <input
            type="number"
            className="form-control"
            name="protein"
            value={foodstuff.protein}
            onChange={handleOnInputChanges}
          />
        </div>
        <div className="mb-3 w-100 mx-5">
          <label className="form-label">Glucid</label>
          <input
            type="number"
            className="form-control"
            name="glucid"
            value={foodstuff.glucid}
            onChange={handleOnInputChanges}
          />
        </div>
        <div className="mb-3 w-100">
          <label className="form-label">Lipid</label>
          <input
            type="number"
            className="form-control"
            name="lipid"
            value={foodstuff.lipid}
            onChange={handleOnInputChanges}
          />
        </div>
      </div>
      <button className="btn btn-secondary" onClick={onCancel}>
        Cancel
      </button>
      <button className="btn btn-success" onClick={handleOnCreateFoodstuff}>
        Create
      </button>
    </div>
  )
}

FoodstuffForm.propTypes = {
  onCreate: PropTypes.func,
  onCancel: PropTypes.func,
}

FoodstuffForm.defaultProps = {
  onCreate: () => {},
  onCancel: () => {},
}

export default FoodstuffForm
