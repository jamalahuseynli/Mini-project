import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import "./users.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { UsersContext } from '../../context/UsersContext';

const Users = () => {


  const {getUserList,users, handlePageClick, page, totalPage, handlePages}=useContext(UsersContext)

  useEffect(() => {

    getUserList()

  }, [page]);



  return (
    <div className="usersPageCont">
      <div className="usersCont">
        {users ?
          users.map(user => {
            return (

              <div className="usersCard">
                <Card sx={{ minWidth: 245, maxWidth:345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={user.avatar}
                      alt={user.first_name + " " + user.last_name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {user.first_name} {user.last_name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {user.email}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Go to profile
                    </Button>
                  </CardActions>
                </Card>
              </div>
            )
          }) : "no users"}

      </div>


      <div className="btnsPage">

        {
          handlePages()
        }
      </div>

    </div>
  )
}

export default Users