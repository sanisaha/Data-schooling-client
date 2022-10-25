import { Carousel } from 'bootstrap';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../../Credentials/Login';
import Register from '../../Credentials/Register';
import CourseLayout from '../../Layout/CourseLayout/CourseLayout';
import Main from '../../Layout/Main/Main';
import Blog from '../../Pages/Blog/Blog';
import Courses from '../../Pages/Courses/Courses';
import FAQ from '../../Pages/FAQ/FAQ';
import Home from '../../Pages/Home/Home';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },

            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/courses',
        element: <CourseLayout></CourseLayout>,
        children: [
            {
                path: '/courses',
                element: <Courses></Courses>,
                Loader: () => fetch('http://localhost:5000/courses')
            }
        ]
    }
]);
