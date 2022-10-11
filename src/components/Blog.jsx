import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='mb-10 mt-8 text-4xl font-bold text-purple-700'>Welcome to my blog</h1>
            <div className='w-2/3 mx-auto'>
                <div className='bg-purple-200 p-10 rounded-lg border-2 border-purple-900 mb-10'>
                    <h2 className='text-purple-600 font-bold'>Q.1: What is purpose of React Router?</h2>
                    <br />
                    <p>Answer: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. </p>
                </div>
                <div className='bg-purple-200 p-10 rounded-lg border-2 border-purple-900 mb-10'>
                    <h2 className='text-purple-600 font-bold'>Q.2: How does context API works?</h2>
                    <br />
                    <p>Answer: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. </p>
                </div>
                <div className='bg-purple-200 p-10 rounded-lg border-2 border-purple-900 mb-10'>
                    <h2 className='text-purple-600 font-bold'>Q.1: Write few lines about useHref Hook.</h2>
                    <br />
                    <p>Answer: The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router.
                        <br />
                        The useRef Hook allows you to persist values between renders.
                        <br />
                        It can be used to store a mutable value that does not cause a re-render when updated.

                    <br />
                    It can be used to access a DOM element directly.

<br />
useRef() only returns one item. It returns an Object called current.
                             </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;