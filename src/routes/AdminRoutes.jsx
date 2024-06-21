import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import ErrorNotFound from '../pages/error/ErrorNotFound';
import AdminLayout from '../layout/AdminLayout';
import Dashboard from '../admin/adminPages/Dashboard';
import Home from '../pages/Home/Home';
import UsersAdmin from '../admin/adminPages/UsersAdmin';


const AdminRoutes = () => {
return (
        <AdminLayout>
        <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/usersList" element={<UsersAdmin/>} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorNotFound />} />
        </Routes>
    </AdminLayout>
    )
}

export default AdminRoutes