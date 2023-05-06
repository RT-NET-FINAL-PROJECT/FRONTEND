import React from 'react'
import {createBrowserRouter, redirect } from 'react-router-dom'
import Layout from '../pages/Layout'
import LoginPage from '../pages/LoginPage.jsx'
import HomePage from '../pages/HomePage'
import AddPostPage from '../pages/AddPostPage'
import EditPostPage from '../pages/EditPostPage'
import DeletePostPage from '../pages/DeletePostPage'
import RegRTAdmin from '../pages/RegisterRTAdminPage.jsx'
import RegRT from '../pages/RegisterRTPage'
import WargaPage from '../pages/WargaPage'
import AddWargaPage from '../pages/AddWargaPage'
import EditWargaPage from '../pages/EditWargaPage'
import DeleteWargaPage from '../pages/DeleteWargaPage'
import LayananPage from '../pages/LayananPage'
import AddLayananPage from '../pages/AddLayananPage'
import EditLayananPage from '../pages/EditLayananPage'
import DeleteLayananPage from '../pages/DeleteLayananPage'


const router = createBrowserRouter([
    {   
        path: "",
        element : <Layout />,
        // loader : () => {
        //     const token = localStorage.getItem('access_token')
        //     if(!token) throw redirect ('/login')
        //     return null
        // },
        children : [
            {
                path : "/",
                element : <HomePage />
            },
            {
                path : "/posts/add",
                element : <AddPostPage />
            },
            {
                path : "/posts/edit/:postId",
                element : <EditPostPage />
            },
            {
                path : "/posts/delete/:postId",
                element : <DeletePostPage />
            },
            {
                path : "/warga",
                element : <WargaPage />
            },
            {
                path : "/warga/add",
                element : <AddWargaPage />
            },
            {
                path : "/warga/edit/:wargaId",
                element : <EditWargaPage />
            },
            {
                path : "/warga/delete/:wargaId",
                element : <DeleteWargaPage />
            },
            {
                path : "/layanan",
                element : <LayananPage />
            },
            {
                path : "/layanan/add",
                element : <AddLayananPage />
            },
            {
                path : "/layanan/edit/:layananId",
                element : <EditLayananPage />
            },
            {
                path : "/layanan/delete/:layananId",
                element : <DeleteLayananPage />
            },
            {
                path : "/register-RT-Admin",
                element : <RegRTAdmin />
            },
            {
                path : "/register-RT",
                element : <RegRT />
            }
        ]
    },
    {
        path : '/login',
        // loader : () => {
        //     const token = localStorage.getItem('access_token')
        //     if(token) throw redirect ('/')
        //     return null
        // },
        element : <LoginPage />
    }
])

export default router