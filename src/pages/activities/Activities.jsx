import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import BackButton from '../../components/buttons/backButtons/BackButton'
import SearchBar from '../../components/searcBar/SearchBar'
import ActivityCard from '../../components/activity/ActivityCard'

import { useHistory } from 'react-router'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import {
  createActivity,
  getAllActivities,
  deleteActivityById,
} from '../../services/activities.service'
import { getAllExercices } from '../../services/exercices.service'
import ActivityForm from '../../components/activity/ActivityForm'
import { useSelector } from 'react-redux'
import { getUserId } from '../../store'

function Activities(props) {
  const queryClient = useQueryClient()
  const history = useHistory()
  const userId = useSelector(getUserId)
  const queryActivity = useQuery(['activities', userId], getAllActivities)
  const queryExercice = useQuery('exercices', getAllExercices)
 
  const [showForm, setShowForm] = useState(false)

  const mutationCreate = useMutation(createActivity, {
    onSuccess: () => {
      queryClient.invalidateQueries('activities')
    },
  })

  const mutationDelete = useMutation(deleteActivityById, {
    onSuccess: () => {
      queryClient.invalidateQueries('activities')
    },
  })

  const handleOnBackButtonClick = () => {
    history.push('/home')
  }

  const handleOnToggleAddForm = () => {
    setShowForm(!showForm)
  }

  const handleOnDeleteActivity = async (activityId) => {
    try {
      await mutationDelete.mutateAsync(activityId)
    } catch (err) {
      console.log(err)
    }
  }

  const handleOnCreateActivity = async (activity) => {
    try {
      await mutationCreate.mutateAsync(activity)
    } catch (err) {
      console.log(err)
    }
  }

  if (queryActivity.isLoading) {
    return <div>This is a spinner</div>
  }

  if (queryActivity.isError) {
    return <div>An error occured </div>
  }

  return (
    <div className="p-4">
      <BackButton onClick={handleOnBackButtonClick} label="Back to menu" />

      <div className="text-center display-5 my-4">foodstuffs</div>

      <div className="d-flex flex-column justify-content-between my-5">
        {/* <SearchBar
          items={queryActivity.data}
          onItemsReturns={handleOnFilterReturns}
          keyToSearch="label"
        /> */}

        {queryExercice.isSuccess && (
          <ActivityForm
            onCancel={handleOnToggleAddForm}
            onCreate={handleOnCreateActivity}
            exercices={queryExercice.data}
          />
        )}

        {queryActivity.isSuccess &&
          !showForm &&
          queryActivity.data.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} onDelete={handleOnDeleteActivity} />
          ))}
      </div>
    </div>
  )
}

Activities.propTypes = {}

export default Activities
