import api from './api.config'

const createExercice = async (exercice) => {
  try {
    const result = await api.post('/exercices', exercice)
  } catch (err) {
    console.log(err)
  }
}

const getAllExercices = async () => {
  try {
    const result = await api.get('/exercices')
    return result.data
  } catch (err) {
    console.log(err)
    return []
  }
}

const deleteExerciceById = async (exerciceId) => {
  try {
    const result = await api.delete(`/exercices/${exerciceId}`)
    return result
  } catch (err) {
    console.log(err)
  }
}

const getAllCategories = async () => {
  try {
    const result = await api.get('/exercices/categories')
    return result.data
  } catch (err) {
    console.log(err)
    return []
  }
}

export { createExercice, getAllExercices, deleteExerciceById, getAllCategories }
