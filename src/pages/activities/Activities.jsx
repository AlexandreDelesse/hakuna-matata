import React, { useEffect } from 'react'
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

function Activities(props) {
  const queryClient = useQueryClient()
  const history = useHistory()
  const queryActivity = useQuery('activities', getAllActivities)

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
    history.push('/')
  }

  useEffect(() => {
    if (queryActivity.isSuccess) {
      console.log(queryActivity.data)
    }
  }, [queryActivity])

  if (queryActivity.isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        loading...
      </div>
    )
  }

  if (queryActivity.isError) {
    return <div>An error occured</div>
  }

  return (
    <div className="p-4">
      <BackButton onClick={handleOnBackButtonClick} label="Back to menu" />

      <div className="text-center display-5 my-4">foodstuffs</div>

      <div className="d-flex justify-content-between my-5">
        {/* <SearchBar
          items={queryActivity.data}
          onItemsReturns={handleOnFilterReturns}
          keyToSearch="label"
        /> */}
        {queryActivity.isSuccess &&
          queryActivity.data.map((activity) => (
            <ActivityCard activity={activity} />
          ))}

        <button type="button" className="btn btn-success" onClick={() => {}}>
          New
        </button>
      </div>
    </div>
  )
}

Activities.propTypes = {}

export default Activities
