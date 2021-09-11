import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { MdAdd } from 'react-icons/md'

import FoodstuffCard from '../../components/foodstuffCard/FoodstuffCard'

import * as FoodstuffService from '../../services/foodstuffs.service'
import './foodstuffs.css'

export default function Foodstuffs() {
  const [inputFilter, setInputFilter] = useState('')
  const queryClient = useQueryClient()
  const history = useHistory()
  const query = useQuery('foodstuffs', FoodstuffService.getAllFoodstuffs)

  const mutationCreate = useMutation(FoodstuffService.createFoodstuff, {
    onSuccess: () => {
      queryClient.invalidateQueries('foodstuffs')
    },
  })

  const mutationDelete = useMutation(FoodstuffService.deleteFoodstuffById, {
    onSuccess: () => {
      queryClient.invalidateQueries('foodstuffs')
    },
  })

  const handleOnBackButtonClick = () => {
    history.push('/')
  }

  const deleteFoodstuff = async (foodstuffId) => {
    mutationDelete.mutate(foodstuffId)
  }

  const createFoodstuff = () => {
    mutationCreate.mutate({
      label: 'my thirth foodstuff',
      trademark: 'an other awesome trademark',
      unit: '100g',
      protein: 12,
      glucid: 32,
      lipid: 4,
    })
  }

  const handleOnInputChange = (e) => {
    const value = e.target.value
    setInputFilter(value)
  }

  if (query.isLoading) {
    return <div>loading...</div>
  }

  if (query.isError) {
    return <div>An error occured</div>
  }

  return (
    <div>
      <button
        className="btn btn-primary m-3"
        type="button"
        onClick={handleOnBackButtonClick}
      >
        go back home
      </button>

      <button type="button" onClick={createFoodstuff}>
        add foodstuff
      </button>

      <div className="text-center display-5 m-5">foodstuffs</div>
      <div className="d-flex justify-content-between m-5">
        <input type="text" value={inputFilter} onChange={handleOnInputChange} />

        <MdAdd className="foodstuffAddIcon" />
      </div>
      {query.data &&
        query.data.map((foodstuff) => (
          <FoodstuffCard
            key={foodstuff.id}
            foodstuff={foodstuff}
            onDelete={deleteFoodstuff}
          />
        ))}
    </div>
  )
}
