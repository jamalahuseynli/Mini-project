import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Users from '../pages/Users/Users';
import PublicLayout from '../layout/PublicLayout';
import Contact from '../pages/Contact/Contact';
import ErrorNotFound from '../pages/error/ErrorNotFound';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';


const PublicRoutes = () => {

    return (
        <PublicLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/users' element={<Users />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path="*" element={<ErrorNotFound />} />
            </Routes>
        </PublicLayout>
    )
}

export default PublicRoutes