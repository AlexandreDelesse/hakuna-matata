import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5001/api',
  timeout: 1000,
})

const createFoodstuff = async (foodstuff) => {
  try {
    const result = await instance.post('/foodstuffs', foodstuff)
    console.log(result.data)
  } catch (err) {
    console.log(err)
  }
}

const getAllFoodstuffs = async () => {
  try {
    const result = await instance.get('/foodstuffs')
    console.log(result.data)
  } catch (err) {
    console.log(err)
  }
}

const deleteFoodstuffById = async (foodstuffId) => {
  try {
    const result = await instance.delete(`/foodstuffs/${foodstuffId}`)
    console.log(result.data)
  } catch (err) {
    console.log(err)
  }
}

export { createFoodstuff, getAllFoodstuffs, deleteFoodstuffById }
