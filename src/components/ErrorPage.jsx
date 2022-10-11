import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='flex items-center h-screen p-16 bg-purple-300 text-purple-900'>
          <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-40 h-40 text-purple-800">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
</svg>

            <div className='max-w-md text-center'>
              <h2 className='mb-8 font-extrabold text-9xl text-purple-600'>
                <span className='sr-only'>Error</span>404
              </h2>
              <p className='text-2xl font-semibold md:text-3xl mb-8'>
                Oopps!!!Sorry, we couldn't find this page.
              </p>
              <Link
                to='/'
                className='px-8 py-3 font-semibold rounded bg-purple-200 text-purple-900'
              >
                
                Back to homepage
              </Link>
            </div>
          </div>
        </section>
      )
};

export default ErrorPage;