import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../actions/taskActions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch(deleteTask(task._id));
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className={`badge ${
              task.status === 'completed' ? 'bg-success' : 
              task.status === 'in-progress' ? 'bg-warning' : 'bg-secondary'
            }`}>
              {task.status}
            </span>
            {task.dueDate && (
              <span className="ms-2">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </span>
            )}
          </div>
          <div>
            <Link to={`/task/${task._id}`} className="btn btn-sm btn-outline-primary me-2">
              <FontAwesomeIcon icon={faEdit} /> View
            </Link>
            <button onClick={handleDelete} className="btn btn-sm btn-outline-danger">
              <FontAwesomeIcon icon={faTrash} /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;