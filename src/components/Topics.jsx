import React, { useContext } from 'react';
import { TopicsContext } from './Main';
import Topic from './Topic';

const Topics = () => {
    const topics=useContext(TopicsContext)
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        
          Check out our Quizes. Test Your Knowledge!!!
        </h2>
        
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-2 xl:max-w-screen-lg sm:mx-auto">
        {
            topics.map((topic)=>(
                <Topic
                key={topic.id}
                topic={topic}
                ></Topic>
            ))
        }
        
      </div>
    </div>
    );
};

export default Topics;