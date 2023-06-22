import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../../Credentials/Login';
import Register from '../../Credentials/Register';
import CourseLayout from '../../Layout/CourseLayout/CourseLayout';
import Main from '../../Layout/Main/Main';
import Error from '../../Other/Error/Error';
import Blog from '../../Pages/Blog/Blog';
import Courses from '../../Pages/Courses/Courses';
import FAQ from '../../Pages/FAQ/FAQ';
import Home from '../../Pages/Home/Home';
import Checkout from '../../Pages/Shared/Checkout/Checkout';
import CourseDetailCard from '../../Pages/Shared/CourseDetailCard/CourseDetailCard';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://data-schooling-server.vercel.app/courses')
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
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://data-schooling-server.vercel.app/checkout/${params.id}`)
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
                Loader: () => fetch('https://data-schooling-server.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetailCard></CourseDetailCard>,
                loader: ({ params }) => fetch(`https://data-schooling-server.vercel.app/courses/${params.id}`)


            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }

]);
