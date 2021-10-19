import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as WorkoutService from "../services/workouts.service";

const emptyActivity = (exerciceId) => {
  return {
    exerciceId,
    series: [],
  };
};
const useGetWorkout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await WorkoutService.getWorkouts();
        dispatch({
          type: "app/workouts",
          data: result.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          ),
        });
      } catch (err) {
        throw err;
      }
    }
    fetchData();
  });
};

const addActivity = (activity) => {
  return {
    type: "app/workoutInCreation/addActivity",
    data: activity,
  };
};

const addEmptySerie = (id) => {
  return {
    type: "app/workoutInCreation/addSerie",
    data: { id, serie: { label: "serie 1", reps: 0, mass: 0, break: 0 } },
  };
};

const getWorkouts = (state) => state.workouts;

const getWorkoutInCreation = (state) => state.workoutInCreation;

export {
  getWorkouts,
  getWorkoutInCreation,
  useGetWorkout,
  addActivity,
  addEmptySerie,
  emptyActivity,
};
