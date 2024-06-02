import React from 'react';
import Navbar from "../utils/Navbar";

const LoginPage = () => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex-grow flex items-center justify-center bg-gray-700">
                <div className="w-full max-w-md p-8 space-y-8 bg-gray-900 rounded shadow-md">
                    <h2 className="font-sans text-2xl font-bold text-center text-gray-300">Zaloguj się</h2>
                    <form className="mt-8 space-y-6">
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-300">
                                    Adres e-mail
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="bg-gray-400 relative block w-full px-3 py-2 mt-1 border border-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                                    Hasło
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="bg-gray-400 relative block w-full px-3 py-2 mt-1 border border-gray-700 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-gray-600 relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Zaloguj się
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
