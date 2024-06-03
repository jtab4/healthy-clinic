import React, {useState} from 'react';
import Navbar from '../utils/Navbar';
import axios from 'axios'
import { useNavigate} from 'react-router-dom';
const RegisterPage = () => {
    const [email,
        setEmail] = useState('');
    const [password,
        setPassword] = useState('');
    const [repeatedPassword,
        setRepeatedPassword] = useState('');

    const [error,
        setError] = useState('')

    const navigate = useNavigate()

    const createUser = async(e) => {
        e.preventDefault()

        if(password!=repeatedPassword) {
            setError("Passwords don't matches")
            return;
        }
        
        try {
            const response = await axios.post('http://localhost:8000/create-user/', {
                email: email,
                password: password
            });
            navigate('/login')

        } catch (error) {
            setError(error.response.data.error || 'Something went wrong');
            setTimeout(() => {
                setError(null)
              }, 10000);
        }
    };
    return (
        <div className="flex flex-col h-screen">
            <Navbar/>
            <div className="flex-grow flex items-center justify-center bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-950">
    <div className="w-full max-w-md p-4 sm:p-8 space-y-4 sm:space-y-8 bg-blue-500 rounded shadow-md">
        <h2 className="font-sans text-2xl font-bold text-center text-blue-200">Create an account</h2>
        <form className="mt-4 sm:mt-8 space-y-4 sm:space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
                <div>
                    <label htmlFor="email-address" className="block text-sm font-medium text-blue-200">
                        Email adress
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-blue-300 relative text-white block w-full px-3 py-2 mt-1 border border-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-blue-200">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                        className="bg-blue-300 relative text-white block w-full px-3 py-2 mt-1 border border-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="repeated-password" className="block text-sm font-medium text-blue-200">
                        Repeat password
                    </label>
                    <input
                        id="repeated-password"
                        name="repeated-password"
                        type="password"
                        onChange={(e) => setRepeatedPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                        className="bg-blue-300 text-slate-50 relative block w-full px-3 py-2 mt-1 border border-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    />
                </div>
            </div>
            {error && (
                <div
                    className="bg-blue-950 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                >
                    <strong className="font-bold">Error:</strong>
                    <span className="block sm:inline"> {' '}{ error}</span>
                </div>
            )}

            <div>
                <button
                    type="submit"
                    onClick={createUser}
                    className="bg-blue-300 relative text-slate-50 flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Create account
                </button>
            </div>
        </form>
    </div>
</div>
        </div>
    );
};

export default RegisterPage;
