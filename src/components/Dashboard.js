import React, { useState,useEffect } from 'react';
import Navbar from '../utils/Navbar';
import Task from './Task';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectCurrentUser, selectAccessToken } from '../auth/authSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Dashboard = () => {
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = useSelector(selectAccessToken);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [deadline, setDeadline] = useState('');
    const [level,setLevel] = useState('')

    const [fetchedTasks, setFetchedTasks] = useState([]); 

  useEffect(() => {
    const fetchUserTasks = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/get-tasks/${user}`);
        setFetchedTasks(response.data);
        console.log('User Tasks:',response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    if (user) { 
      fetchUserTasks();
    }
  }, [user]);
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logOut());
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        navigate('/login');
    };

    const handleAddTask = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTaskName('');
        setDeadline('');
    };
    const user_id = 1
    const handleSubmitTask = async (event) => {
        event.preventDefault();
        if(taskName&& deadline && user_id && level && user) {
        const name = taskName
        const email_user = user
        const data = {
          name,
          deadline: new Date(deadline).toISOString().slice(0, 10), 
          user_id,
          level,
          email_user
        };
      
        try {
          const response = await axios.post('http://localhost:8000/create-task', data);
          setFetchedTasks((prevState) => [...prevState, response.data]);
          handleCloseModal(); 
        } catch (error) {
          console.error('Błąd podczas dodawania zadania:', error);
        }
    }
    else {
        return;
    }
      };

    const handleDifficulty = (e) => {
        
        setLevel(e.target.value)
    }

    return (
        <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-start bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-950 overflow-y-auto">
        {/* Main Content */}
        <div className="container mx-auto py-8">
          <h2 className="text-white text-2xl font-bold mb-4">Tasks</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {fetchedTasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
            <div className="bg-blue-500 rounded-lg p-4 flex items-center justify-center">
              <button onClick={handleAddTask} className="bg-slate-50 text-white font-bold py-2 px-4 rounded-full">
                <span className="mr-2 text-stone-900">+ Add Task</span>
              </button>
            </div>
          </div>
        </div>
      </div>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div>
                        <p className="text-sm">Logged in as: <strong>{user}</strong></p>
                    </div>
                    <div>
                        <button onClick={handleLogout} className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">Logout</button>
                    </div>
                </div>
            </footer>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <div className="relative z-10 bg-white rounded-lg p-6 w-full max-w-md">
                        
                        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
                        <form onSubmit={handleSubmitTask}>
                            <div className="mb-4">
                                <label htmlFor="taskName" className="block text-gray-700 font-bold mb-2">Task Name:</label>
                                <input type="text" id="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)} className="w-full px-3 py-2 border rounded-md" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="deadline" className="block text-gray-700 font-bold mb-2">Deadline:</label>
                                <input
                                    type="date"  
                                    id="deadline"
                                    value={deadline}  
                                    onChange={(e) => setDeadline(e.target.value)}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                                </div>
                                


                            <div className="mb-4">
                            <label htmlFor="difficulty" className="block text-gray-700 font-bold mb-2">Difficulty:</label>
                            <select
                            id="difficulty"
                            name="difficulty"
                            value={level}
                            onChange={handleDifficulty}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none appearance-none"
                            >
                            <option value="easy" className="text-green-500">Easy</option>
                            <option value="medium" className="text-orange-500">Medium</option>
                            <option value="hard" className="text-red-500">Hard</option>
                            </select>
                        </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={handleCloseModal} className="bg-gray-400 text-white font-bold py-2 px-4 rounded-md mr-2">Cancel</button>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
