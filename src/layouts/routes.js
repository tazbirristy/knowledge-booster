import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Main from "../components/Main";
import Quiz from "../components/Quiz";
import Statistics from "../components/Statistics";
import Topics from "../components/Topics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/topics", element: <Topics></Topics> },
      { path: "/statistics", element: <Statistics></Statistics> },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/topic/:topicId",
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.topicId}`
          ),
        element: <Quiz></Quiz>,
      },
    ],
  },
]);

export default router;
