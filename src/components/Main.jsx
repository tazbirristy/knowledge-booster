import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from './Header';

export const TopicsContext=createContext([]);

const Main = () => {
const topicsLoad=useLoaderData();
const topics=topicsLoad.data

    return (
       <TopicsContext.Provider value={topics}>
        <Header></Header>
            <Outlet></Outlet>
       </TopicsContext.Provider>
    );
};

export default Main;