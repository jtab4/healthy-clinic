import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl text-white font-bold mb-8">Contact Us</h1>

      <section className="w-full max-w-md p-8 bg-white rounded-md shadow-lg">
        <h2 className="text-lg text-gray-800 font-bold mb-4">Get in Touch</h2>

        <ul className="space-y-4">
          <li className="flex items-center">
            <svg className="h-5 w-5 mr-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l12-12 12 12" />
            </svg>
            <span className="text-gray-700">jakuq12@gmail.com</span>
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 mr-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21V9A1 1 0 0 0 20 8H5A1 1 0 0 0 4 9v12a1 1 0 0 0 1 1zM4 15a1 1 0 0 1 0-2h7l-4-4V5a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1z" />
            </svg>
            <span className="text-gray-700">+48 570 188 351</span>
          </li>
          
          <li className="flex items-center">
            <svg className="h-5 w-5 mr-2 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 0 0-9 9m9-9a9 9 0 0 1 9-9" />
            </svg>
            <span className="text-gray-700">Website: <a href="https://github.com/jtab4" target="_blank">github.com/jtab4</a> </span>
            </li>
            </ul>
            </section>
            </div>
  )
}

export default Contact