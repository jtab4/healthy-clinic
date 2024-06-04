import React, {useState} from 'react'; 
import axios from 'axios'

const Task = ({ task, deleteState }) => {


  const difficultyStyle = {
    easy: 'bg-green-200 text-green-700',
    medium: 'bg-orange-400 text-orange-700',
    hard: 'bg-red-500 text-red-700',
  };

  const onDelete = async () => {
    
    try {
      const response = await axios.delete(`http://localhost:8000/delete-task/${task.task.id}`);

      if (response.status === 204) {
        console.log('Task deleted successfully!');
        deleteState(task.task.id)
      } else {
        console.error('Error deleting task:', response.data);
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    } finally {
      
    }
  };

  


  return (
    <div className="bg-blue-500 rounded-lg shadow-md p-4 flex flex-col">
      <div className="flex items-center">
        <p className="text-slate-50">{task.task.task.name}</p>
        <p className="font-bold text-slate-50 flex-grow"></p>
        <div className={`h-4 w-auto px-2 rounded-full text-center ${difficultyStyle[task.task.task.level] || 'bg-gray-400 text-gray-700'}`}>
          
        </div>
      </div>
      <p className="text-sm text-slate-50 mt-2">Deadline: {task.task.task.deadline}</p>
      <div className="flex justify-end">
        <button
          type="button"
          className="focus:outline-none ml-2 rounded-full bg-indigo-950 text-white px-4 py-2 text-xs font-bold shadow hover:bg-red-700"
          onClick={() => onDelete(task.task.task.id)}
        >
          <span className="flex items-center justify-center">
            
            Delete Task
          </span>
        </button>
      </div>
    </div>
  );
};

export default Task;
