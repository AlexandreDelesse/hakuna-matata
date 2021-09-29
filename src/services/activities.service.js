import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5001/api',
  timeout: 1000,
})

const createActivity = async (activity) => {
  try {
    const result = await instance.post('/activities', activity)
    console.log(result.data)
  } catch (err) {
    console.log(err)
  }
}

const getAllActivities = async () => {
  try {
    const result = await instance.get('/activities')
    return result.data;
  } catch (err) {
    console.log(err)
  }
}

const deleteActivityById = async (activityId) => {
  try {
    const result = await instance.delete(`/activities/${activityId}`)
    return result
  } catch (err) {
    console.log(err)
  }
}

export { createActivity, getAllActivities, deleteActivityById }
