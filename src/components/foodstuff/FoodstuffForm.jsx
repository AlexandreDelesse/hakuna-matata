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
      <div className="d-flex flex-column justify-content-between col-6 offset-3">
        <label className="form-label">Label</label>
        <input
          type="text"
          className="form-control"
          name="label"
          value={foodstuff.label}
          onChange={handleOnInputChanges}
        />

        <label className="form-label">Trademark</label>
        <input
          type="text"
          className="form-control"
          name="trademark"
          value={foodstuff.trademark}
          onChange={handleOnInputChanges}
        />

        <label className="form-label">Unit</label>
        <input
          type="text"
          className="form-control"
          name="unit"
          value={foodstuff.unit}
          onChange={handleOnInputChanges}
        />

        <label className="form-label">Protein</label>
        <input
          type="number"
          className="form-control"
          name="protein"
          value={foodstuff.protein}
          onChange={handleOnInputChanges}
        />
        <label className="form-label">Glucid</label>
        <input
          type="number"
          className="form-control"
          name="glucid"
          value={foodstuff.glucid}
          onChange={handleOnInputChanges}
        />
        <label className="form-label">Lipid</label>
        <input
          type="number"
          className="form-control"
          name="lipid"
          value={foodstuff.lipid}
          onChange={handleOnInputChanges}
        />
        <div className='my-3'>
          <button className="btn btn-success me-4 w-25" onClick={handleOnCreateFoodstuff}>
            Create
          </button>
          <button className="btn btn-secondary w-25" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
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
