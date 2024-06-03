import React from 'react';
import Navbar from "../utils/Navbar";
import {Link} from 'react-router-dom'
const LoginPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex-grow flex items-center justify-center bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-950">
                <div className="w-full max-w-md p-8 space-y-8 bg-blue-500 rounded shadow-md">
                    <h2 className="font-sans text-2xl font-bold text-center text-blue-200">Sign in</h2>
                    <form className="mt-8 space-y-6">
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
                                    required
                                    className="bg-blue-300 relative block w-full px-3 py-2 mt-1 border border-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                                    autoComplete="current-password"
                                    required
                                    className="bg-blue-300 relative block w-full px-3 py-2 mt-1 border border-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-blue-300 relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    <div className="text-center text-blue-200">
                    Don't have an account? <Link to="/register" className="text-blue-400">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
