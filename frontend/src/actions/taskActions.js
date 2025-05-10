import axios from 'axios';
import { 
  GET_TASKS, 
  ADD_TASK, 
  DELETE_TASK, 
  TASKS_LOADING,
  GET_TASK,
  UPDATE_TASK
} from './types';

export const getTasks = () => dispatch => {
  dispatch(setTasksLoading());
  axios.get('/api/tasks')
    .then(res => 
      dispatch({
        type: GET_TASKS,
        payload: res.data
      })
    )
};

export const getTask = (id) => dispatch => {
  dispatch(setTasksLoading());
  axios.get(`/api/tasks/${id}`)
    .then(res => 
      dispatch({
        type: GET_TASK,
        payload: res.data
      })
    )
};

export const addTask = (task) => dispatch => {
  axios.post('/api/tasks', task)
    .then(res => 
      dispatch({
        type: ADD_TASK,
        payload: res.data
      })
    )
};

export const updateTask = (id, task) => dispatch => {
  axios.put(`/api/tasks/${id}`, task)
    .then(res => 
      dispatch({
        type: UPDATE_TASK,
        payload: res.data
      })
    )
};

export const deleteTask = (id) => dispatch => {
  axios.delete(`/api/tasks/${id}`)
    .then(res => 
      dispatch({
        type: DELETE_TASK,
        payload: id
      })
    )
};

export const setTasksLoading = () => {
  return {
    type: TASKS_LOADING
  };
};