import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTasks } from '../actions/taskActions';
import Task from './Task';

const Dashboard = () => {
  const tasks = useSelector(state => state.task.tasks);
  const loading = useSelector(state => state.task.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="mb-4">Task Dashboard</h1>
      <Link to="/add" className="btn btn-primary mb-3">
        Add New Task
      </Link>
      {tasks.length === 0 ? (
        <div className="alert alert-info">No tasks found. Add one to get started!</div>
      ) : (
        <div className="task-list">
          {tasks.map(task => (
            <Task key={task._id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;