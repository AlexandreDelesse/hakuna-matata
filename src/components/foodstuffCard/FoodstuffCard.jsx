import React from 'react'
import PropTypes from 'prop-types'

import { GrClose } from 'react-icons/gr'

import './foodstuffCard.css'

function FoodstuffCard(props) {
  const { foodstuff, onDelete } = props

  const handleOnDeleteCard = () => {
    onDelete(foodstuff.id)
  }

  return (
    <div className="foodstuffCard">
      <GrClose className="foodstuff-close-icon" onClick={handleOnDeleteCard} />
      <div className="foodstuffCard-title">{foodstuff.label}</div>
      <div className="foodstuffCard-content">{foodstuff.trademark}</div>
    </div>
  )
}

FoodstuffCard.propTypes = {
  foodstuff: PropTypes.instanceOf(Object).isRequired,
  onDelete: PropTypes.func,
}

FoodstuffCard.defaultProps = {
  onDelete: () => {},
}

export default FoodstuffCard
