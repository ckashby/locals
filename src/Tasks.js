import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v4';
import Image from './AlleeView.jpg';

function Tasks() {
  const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY';
  const [ taskText, setTaskText ] = useState('');
  const [ tasks, setTasks ] = useState([]);

  const updateTaskText = event => {
    setTaskText(event.target.value);
  }

  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuid() }]);
    console.log(tasks);
  }

  return (
    <div>
      <div>
        <img src={Image} style={{width: '300px'}} alt="Allee"/>
        <h3>Task List</h3>
        <p>{taskText}</p>
        <input value={taskText} onChange={updateTaskText} style={{width: '200px'}} />{' '}
        <button onClick={addTask} >Add Task</button>
      </div>
      <div>
        {tasks.map(task => {
          const { id, taskText } = task;

          return (
            <div key={id}>{taskText}</div>
          )
          
        })}
      </div>
    </div>
  );
}

export default Tasks;
