import React, { useContext, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './usersAdmin.css'
import { UsersContext } from '../../context/UsersContext';
import { FaRegTrashAlt,FaRegEdit } from "react-icons/fa";



const UsersAdmin = () => {

  const { users, getUserList, handlePages, page, handleEdit, handleDelete } = useContext(UsersContext)

  useEffect(() => {

    getUserList()

  }, [page,users]);


  return (
    <div className="cont-admin">
      <TableContainer className='table' component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table"  >
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Avatar</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((user) => {
              return (
                <TableRow
                  key={user.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell  width="98px" height="80px" align="right" component="th" scope="row">
                    <img width="100%" height="100%"src={user.avatar} alt="" srcset="" />
                  </TableCell>
                  <TableCell align="right" component="th" scope="row">
                    {user.first_name}
                  </TableCell>
                  <TableCell align="right" component="th" scope="row">
                    {user.last_name}
                  </TableCell>
                  <TableCell align="right" component="th" scope="row">
                    {user.email}
                  </TableCell>

                  <TableCell align="right" component="th" scope="row">
                    <button onClick={()=>handleEdit(user.id)}>
                    <FaRegEdit color='green'/>
                    </button>
                  </TableCell>
                  
                  <TableCell align="right" component="th" scope="row">
                    <button onClick={()=>handleDelete(user.id)}>
                      <FaRegTrashAlt color='red'/>
                    </button>
                  </TableCell>
                  
                </TableRow>
              )
            })}

          </TableBody>
        </Table>
      </TableContainer>

      <div className="btnsPage">

        {
          handlePages()
        }
      </div>

    </div>

  );
}


export default UsersAdmin;