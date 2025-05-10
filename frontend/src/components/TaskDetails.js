import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getTask, updateTask } from '../actions/taskActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSave } from '@fortawesome/free-solid-svg-icons';

const TaskDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentTask, loading } = useSelector((state) => ({
    currentTask: state.task.currentTask,
    loading: state.task.loading
  }));
  
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'pending',
    dueDate: ''
  });

  useEffect(() => {
    dispatch(getTask(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (currentTask) {
      setFormData({
        title: currentTask.title,
        description: currentTask.description,
        status: currentTask.status,
        dueDate: currentTask.dueDate ? new Date(currentTask.dueDate).toISOString().split('T')[0] : ''
      });
    }
  }, [currentTask]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask(id, formData));
    setEditing(false);
  };

  if (loading || !currentTask) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)} className="btn btn-outline-secondary mb-3">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
      
      {!editing ? (
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{currentTask.title}</h2>
            <p className="card-text">{currentTask.description}</p>
            <div className="mb-3">
              <span className={`badge ${
                currentTask.status === 'completed' ? 'bg-success' : 
                currentTask.status === 'in-progress' ? 'bg-warning' : 'bg-secondary'
              }`}>
                {currentTask.status}
              </span>
              {currentTask.dueDate && (
                <span className="ms-2">
                  Due: {new Date(currentTask.dueDate).toLocaleDateString()}
                </span>
              )}
            </div>
            <p className="text-muted">
              Created: {new Date(currentTask.createdAt).toLocaleString()}
            </p>
            <button 
              onClick={() => setEditing(true)}
              className="btn btn-primary"
            >
              Edit Task
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Status</label>
            <select
              className="form-select"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Due Date (optional)</label>
            <input
              type="date"
              className="form-control"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary me-2">
            <FontAwesomeIcon icon={faSave} /> Save
          </button>
          <button 
            type="button" 
            onClick={() => setEditing(false)}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default TaskDetails;