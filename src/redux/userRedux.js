import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetExercices = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await ExerciceService.getExercices();
        dispatch({
          type: "app/exercices",
          data: result,
        });
      } catch (err) {
        throw err;
      }
    }
    fetchData();
  });
};

const addExerciceSelected = (id) => {
  return {
    type: "app/exercicesSelected/add",
    data: id,
  };
};

const getExercices = (state) => state.exercices;

const getExercicesSelected = (state) => state.exercicesSelected;

const getExerciceFromExerciceId = (exerciceId) => {
  const exercices = getExercices();
  const exercice = exercices.find((exercice) => exercice.id === exerciceId);
  return exercice;
};
export {
  getExercices,
  getExerciceFromExerciceId,
  getExercicesSelected,
  useGetExercices,
  addExerciceSelected,
};
