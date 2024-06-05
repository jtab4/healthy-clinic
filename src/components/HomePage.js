import React from 'react';
import Navbar from '../utils/Navbar';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-950 flex flex-col">
      <Navbar />
      <main className="flex-grow overflow-auto"> <section className="mt-24 text-white text-center">
          <h2 className="text-4xl font-bold">Revolutionizing Your Experience</h2>
          <p className="mt-4 text-lg">
            Sign up for free today and experience the power of effortless task management with task-manager!
          </p>
          <Link to ="/register">
          <button className="mt-8 bg-white text-indigo-500 font-medium py-2 px-4 rounded-md shadow focus:outline-none hover:bg-indigo-100">
            Create an account
          </button>
          </Link>
        </section>
      </main>
      <footer className="mt-auto py-4 text-gray-300 text-center bg-gray-800">
       &copy; 2024 <a href="https://github.com/jtab4" target="_blank"> <strong>jtab53</strong></a>
      </footer>
    </div>
  );
};

export default HomePage;
