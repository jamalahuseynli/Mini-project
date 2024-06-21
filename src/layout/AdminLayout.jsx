import React from 'react'
import Sidebar from '../admin/Sidebar/Sidebar'
import './adminLayout.css'

const AdminLayout = (props) => {
  return (
    <div className="admin-layout">
        <Sidebar/>
        <main>
          {props.children}
        </main>
    </div>
  )
}

export default AdminLayout