import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
// Import your Tailwind CSS styles

const Dashboard: React.FC = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleRemoveTask = (index: number) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="mb-4">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter a task"
                    className="px-4 py-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleAddTask}
                    className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Add
                </button>
            </div>
            <div className="flex flex-col items-center space-y-2 w-6/12">
                {tasks.map((task, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center h-12 px-4 bg-gray-200 rounded flex-wrap w-full"
                    >
                        {task} 
                        <button
                            onClick={() => handleRemoveTask(index)}
                            className="ml-2 text-red-500"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
