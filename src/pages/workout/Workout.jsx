import React, { useState } from 'react'
// import { Spinner } from 'reactstrap'
// import PropTypes from 'prop-types'

import BackButton from '../../components/buttons/backButtons/BackButton'
// import SearchBar from '../../components/searcBar/SearchBar'
// import ActivityCard from '../../components/activity/ActivityCard'
import ActivityForm from '../../components/activity/ActivityForm'
import CategoryList from '../../components/category/CategoryList'

import { useHistory } from 'react-router'
import { useMutation, useQuery, useQueryClient } from 'react-query'
// import { useSelector } from 'react-redux'

import { createActivity } from '../../services/activities.service'
import { getAllExercices } from '../../services/exercices.service'
import { getAllCategories } from '../../services/exercices.service'

// import { getUserId } from '../../store'

import Timer from '../../components/timer/Timer'

function Workout(props) {
  const queryClient = useQueryClient()
  const history = useHistory()
  // const userId = useSelector(getUserId)
  const queryCategory = useQuery(['categories'], getAllCategories)
  const queryExercice = useQuery('exercices', getAllExercices)

  const [categoryList, setCategoryList] = useState([])

  const mutationCreate = useMutation(createActivity, {
    onSuccess: () => {
      queryClient.invalidateQueries('activities')
    },
  })

  const handleOnBackButtonClick = () => {
    history.push('/home')
  }

  const handleOnCreateActivity = async (activity) => {
    try {
      await mutationCreate.mutateAsync(activity)
    } catch (err) {
      console.log(err)
    }
  }

  const handleOnCategorySelectedChange = (categories) => {
    setCategoryList(categories)
  }

  if (queryExercice.isLoading) {
    return <div>This is a spinner</div>
  }

  if (queryExercice.isError) {
    return <div>An error occured </div>
  }

  return (
    <div className="p-4">
      <BackButton onClick={handleOnBackButtonClick} label="Back to menu" />

      <div className="text-center display-5 my-4">Workout</div>

      <div className="d-flex flex-column justify-content-between my-5">
        {queryCategory.isSuccess && (
          <CategoryList
            categories={queryCategory.data}
            onCategoriesSelectedChanges={handleOnCategorySelectedChange}
          />
        )}
        <ActivityForm
          onCreate={handleOnCreateActivity}
          exercices={queryExercice.data.filter(
            (exercice) =>
              !categoryList.some(
                (category) => !exercice.category.includes(category),
              ),
          )}
          isCreating={mutationCreate.isLoading}
        />

        <Timer />
      </div>
    </div>
  )
}

Workout.propTypes = {}

export default Workout
