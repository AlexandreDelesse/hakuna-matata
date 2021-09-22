import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useMutation, useQuery, useQueryClient } from 'react-query'
// import { MdAdd } from 'react-icons/md'

import FoodstuffCard from '../../components/foodstuffCard/FoodstuffCard'
import FoodstuffForm from '../../components/foodstuff/FoodstuffForm'

import * as FoodstuffService from '../../services/foodstuffs.service'
import './foodstuffs.css'
import SearchBar from '../../components/searcBar/SearchBar'

export default function Foodstuffs() {
  const [dataFiltered, setDataFiltered] = useState([])
  const [isCreatingFoodstuff, setIsCreationFoodstuff] = useState(false)

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
    try {
      await mutationDelete.mutateAsync(foodstuffId)
    } catch (err) {
      console.log(err)
    }
  }

  const createFoodstuff = async (foodstuff) => {
    try {
      await mutationCreate.mutateAsync(foodstuff)
      setIsCreationFoodstuff(false)
    } catch (err) {
      console.log(err)
    }
  }

  const handleOnShowForm = () => {
    setIsCreationFoodstuff(true)
  }

  const handleOnHideForm = () => {
    setIsCreationFoodstuff(false)
  }

  const handleOnFilterReturns = (newData) => {
    setDataFiltered(newData)
  }

  useEffect(() => {
    if (query.isSuccess) {
      setDataFiltered(query.data)
    }
  }, [query.data])

  if (query.isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        loading...
      </div>
    )
  }

  if (query.isError) {
    return <div>An error occured</div>
  }

  return (
    <div className="p-4">
      <button
        className="btn btn-primary"
        type="button"
        onClick={handleOnBackButtonClick}
      >
        Home
      </button>

      <div className="text-center display-5 my-4">foodstuffs</div>

      {!isCreatingFoodstuff && (
        <div className="d-flex justify-content-between my-5">
          <SearchBar
            items={query.data}
            onItemsReturns={handleOnFilterReturns}
            keyToSearch="label"
          />

          <button
            type="button"
            className="btn btn-success"
            onClick={handleOnShowForm}
          >
            New
          </button>
        </div>
      )}
      <div>
        {!isCreatingFoodstuff &&
          dataFiltered.map((foodstuff) => (
            <FoodstuffCard
              key={foodstuff.id}
              foodstuff={foodstuff}
              classname="my-3"
              onDelete={deleteFoodstuff}
            />
          ))}
        {isCreatingFoodstuff && (
          <FoodstuffForm
            onCreate={createFoodstuff}
            onCancel={handleOnHideForm}
          />
        )}
      </div>
    </div>
  )
}
