import React, { useState } from 'react'
// import PropTypes from 'prop-types'

// Componenents
import BackButton from '../../components/buttons/backButtons/BackButton'
// import ActivityForm from '../../components/activity/ActivityForm'

// Hooks
import { useHistory } from 'react-router'
import { useMutation, useQuery, useQueryClient } from 'react-query'
// import { useSelector } from 'react-redux'
import {
  createExercice,
  getAllExercices,
  deleteExerciceById,
} from '../../services/exercices.service'

// Functions
// import { getUserId } from '../../store'
import ExerciceForm from '../../components/exercice/ExerciceForm'
import ExerciceList from '../../components/exercice/ExerciceList'

// Styles

function Exercices(props) {
  const queryClient = useQueryClient()
  const history = useHistory()
  // const userId = useSelector(getUserId)

  const [isExerciceFormOpen, setIsExerciceFormOpen] = useState(false)
  //   const queryActivity = useQuery(['activities', userId], getAllActivities)
  const queryExercice = useQuery('exercices', getAllExercices)

  const createExerciceMutation = useMutation(createExercice, {
    onSuccess: () => {
      queryClient.invalidateQueries('exercices')
    },
  })

  const mutationDelete = useMutation(deleteExerciceById, {
    onSuccess: () => {
      queryClient.invalidateQueries('exercices')
    },
  })

  const handleOnBackButtonClick = () => {
    history.push('/home')
  }

  const handleOnDeleteExercice = async (exerciceId) => {
    try {
      await mutationDelete.mutateAsync(exerciceId)
    } catch (err) {
      console.log(err)
    }
  }

  const handleOnCreateExercice = async (exercice) => {
    try {
      await createExerciceMutation.mutateAsync(exercice)
      toggleExerciceForm()
    } catch (err) {
      console.log(err)
    }
  }

  const toggleExerciceForm = () => {
    setIsExerciceFormOpen(!isExerciceFormOpen)
  }

  return (
    <div className="p-4">
      <BackButton onClick={handleOnBackButtonClick} label="Back to menu" />

      <div className="text-center display-5 my-4">Exercices</div>
      <button
        className={
          !isExerciceFormOpen ? 'mb-2 btn btn-success' : 'mb-2 btn btn-danger'
        }
        onClick={toggleExerciceForm}
      >
        {' '}
        {!isExerciceFormOpen ? 'add Exercice' : 'cancel'}
      </button>

      {queryExercice.isSuccess && !isExerciceFormOpen && (
        <ExerciceList
          exercices={queryExercice.data}
          onDeleteExercice={handleOnDeleteExercice}
        />
      )}

      {isExerciceFormOpen && <ExerciceForm onCreate={handleOnCreateExercice} />}
    </div>
  )
}

Exercices.propTypes = {}

export default Exercices
