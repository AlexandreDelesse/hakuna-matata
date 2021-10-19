import api from './api.config'


const createActivity = async (activity) => {
  try {
    const result = await api.post('/activities', activity)
  } catch (err) {
    console.log(err)
  }
}

const getAllActivities = async (queryKey) => {
  const userId = queryKey.queryKey[1]
  try {
    const result = await api.get('/activities', { params: {userId}})
    return result.data
  } catch (err) {
    console.log(err)
    return []
  }
}

const deleteActivityById = async (activityId) => {
  try {
    const result = await api.delete(`/activities/${activityId}`)
    return result
  } catch (err) {
    console.log(err)
  }
}

export { createActivity, getAllActivities, deleteActivityById }
