// import { useState } from 'react';
import useTasks from '../../hooks/use-apidb';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  const {isLoading, error, sendRequest} = useTasks();
  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  }
  const enterTaskHandler = async (taskText) => {
    sendRequest({
      url: 'https://dummy-api-f4510-default-rtdb.firebaseio.com/tasks.json', method: 'POST', headers: {
        'Content-Type': 'application/json'
      }, data: taskText
    }, createTask.bind(null, taskText));
    // bind helps in preconfiguring the function with parameters and the remaining parameter will
    // concat to this already passed parameters
  }
  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
