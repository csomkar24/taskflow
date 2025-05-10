import { 
  GET_TASKS, 
  ADD_TASK, 
  DELETE_TASK, 
  TASKS_LOADING,
  GET_TASK,
  UPDATE_TASK
} from '../actions/types';

const initialState = {
  tasks: [],
  currentTask: null,
  loading: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false
      };
    case GET_TASK:
      return {
        ...state,
        currentTask: action.payload,
        loading: false
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };
    case UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task._id === action.payload._id ? action.payload : task
        ),
        currentTask: action.payload
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.payload)
      };
    case TASKS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}