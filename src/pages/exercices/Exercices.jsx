import React, { useState } from 'react'
// import PropTypes from 'prop-types'

// Componenents
import BackButton from '../../components/buttons/backButtons/BackButton'
import ActivityForm from '../../components/activity/ActivityForm'

// Hooks
import { useHistory } from 'react-router'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useSelector } from 'react-redux'

// Functions
import { getUserId } from '../../store'

// Styles

function Exercices(props) {
  const queryClient = useQueryClient()
  const history = useHistory()
  const userId = useSelector(getUserId)
  //   const queryActivity = useQuery(['activities', userId], getAllActivities)
  //   const queryExercice = useQuery('exercices', getAllExercices)

  //   const mutationCreate = useMutation(createActivity, {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries('activities')
  //     },
  //   })

  //   const mutationDelete = useMutation(deleteActivityById, {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries('activities')
  //     },
  //   })

  const handleOnBackButtonClick = () => {
    history.push('/home')
  }

  //   const handleOnDeleteActivity = async (activityId) => {
  //     try {
  //       await mutationDelete.mutateAsync(activityId)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  //   const handleOnCreateActivity = async (activity) => {
  //     try {
  //       await mutationCreate.mutateAsync(activity)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  return (
    <div className="p-4">
      <BackButton onClick={handleOnBackButtonClick} label="Back to menu" />
    </div>
  )
}

Exercices.propTypes = {}

export default Exercices
