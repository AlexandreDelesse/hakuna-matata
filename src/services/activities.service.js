import api from './api.config'


const createActivity = async (activity) => {
  try {
    const result = await api.post('/activities', activity)
    console.log(result.data)
  } catch (err) {
    console.log(err)
  }
}

const getAllActivities = async () => {
  try {
    const result = await api.get('/activities')
    return result.data;
  } catch (err) {
    console.log(err)
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
