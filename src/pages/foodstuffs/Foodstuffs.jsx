import React from 'react'
import { useHistory } from 'react-router'

import * as FoodstuffService from '../../services/foodstuffs.service'

export default function Foodstuffs() {
  const history = useHistory()

  const handleOnBackButtonClick = () => {
    history.push('/')
  }

  const getAllFoodstuffs = async () => {
    await FoodstuffService.getAllFoodstuffs()
  }

  const deleteFoodstuff = async () => {
    await FoodstuffService.deleteFoodstuffById('a04694b5-b43d-4303-94bf-575d4b657a77')
  }

  const createFoodstuff = async () => {
    await FoodstuffService.createFoodstuff({
      label: 'my thirth foodstuff',
      trademark: 'an other awesome trademark',
      unit: '100g',
      protein: 12,
      glucid: 32,
      lipid: 4,
    })
  }
  return (
    <div>
      <button type="button" onClick={handleOnBackButtonClick}>
        {' '}
        go back home
      </button>
      <p>hello from foodstuff :)</p>
      <button type="button" onClick={getAllFoodstuffs}>
        get all foodstuffs
      </button>
      <button type="button" onClick={createFoodstuff}>
        add foodstuff
      </button>
      <button type="button" onClick={deleteFoodstuff}>
        delete foodstuff
      </button>
    </div>
  )
}
