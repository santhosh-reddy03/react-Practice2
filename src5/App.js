import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useTasks from './hooks/use-apidb';

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useTasks();
  useEffect(() => {
    const taskHandler = (taskdata) => {
      const loadedTasks = [];
      for (const taskKey in taskdata) {
        loadedTasks.push({ id: taskKey, text: taskdata[taskKey].text });
      }
      setTasks(loadedTasks);
    }
    fetchTasks({ url: 'https://dummy-api-f4510-default-rtdb.firebaseio.com/tasks.json' }, taskHandler);
  }, [fetchTasks]);
  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      {/* <NewTask /> */}
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
