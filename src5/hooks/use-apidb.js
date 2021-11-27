import { useCallback, useState } from 'react';
const useTasks = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const sendRequest = useCallback(async (reqParam, addData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                reqParam.url, {
                method: reqParam.method ? reqParam.method : 'GET',
                headers: reqParam.headers ? reqParam.headers : {},
                body: reqParam.data ? JSON.stringify(reqParam.data) : null,
            }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            addData(data);
            // const loadedTasks = [];

            // for (const taskKey in data) {
            //     loadedTasks.push({ id: taskKey, text: data[taskKey].text });
            // }

            // setTasks(loadedTasks);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return { isLoading, error, sendRequest }

    // const [isLoading, setIsLoading] = useState(false);
    //   const [error, setError] = useState(null);

    // const enterTaskHandler = async (taskText) => {
    //     setIsLoading(true);
    //     setError(null);
    //     try {

    //         const response = await fetch(
    //             'https://dummy-api-f4510-default-rtdb.firebaseio.com/tasks.json',
    //             {
    //                 method: 'POST',
    //                 body: JSON.stringify({ text: taskText }),
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //             }
    //         );
    //         if (!response.ok) {
    //             throw new Error('Request failed!');
    //         }

    //         const data = await response.json();

    //         
    //         props.onAddTask(createdTask);
    //     } catch (err) {
    //         setError(err.message || 'Something went wrong!');
    //     }
    //     setIsLoading(false);
    // };
    // return [isLoading, error, enterTaskHandler];

}

export default useTasks;