import api from './api.config'

const createFoodstuff = async (foodstuff) => {
  try {
    const result = await api.post('/foodstuffs', foodstuff)
    console.log(result.data)
  } catch (err) {
    console.log(err)
  }
}

const getAllFoodstuffs = async () => {
  try {
    const result = await api.get('/foodstuffs')
    return result.data;
  } catch (err) {
    console.log(err)
  }
}

const deleteFoodstuffById = async (foodstuffId) => {
  try {
    const result = await api.delete(`/foodstuffs/${foodstuffId}`)
    return result
  } catch (err) {
    console.log(err)
  }
}

export { createFoodstuff, getAllFoodstuffs, deleteFoodstuffById }
