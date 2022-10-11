import React, { useContext } from 'react';
import { TopicsContext } from './Main';
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const topics=useContext(TopicsContext)
    return (
        <div>
            <h1 className='mb-16 mt-8 text-4xl font-semibold text-purple-700'>Topic Analysis</h1>
            <div className='flex justify-center'>
            <ResponsiveContainer width="60%" height="100%" aspect={2}>
        <LineChart
          
          data={topics}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#82ca9d" />
          <Tooltip></Tooltip>
        </LineChart>
      </ResponsiveContainer>
            </div>
        </div>

    );
};

export default Statistics;