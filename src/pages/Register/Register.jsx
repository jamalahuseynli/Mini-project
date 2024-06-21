import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Login/login.css'

const Register = () => {

    const [regUser, setRegUser]=useState({
        email:"",
        password:""
    })
    const handleRegister= async(e)=>{
        e.preventDefault()
        const response=await axios.post("https://reqres.in/api/register" , regUser)
        console.log(response.data);
    }
    return (
        <div className='login-cont'>
            <Card className='card' sx={{ maxWidth: 345, minHeight: 400 }}>
                    <Typography className='title-card' gutterBottom variant="h5" component="div">
                        Register
                    </Typography>
                <CardContent className='sign'>
                    <TextField
                        id="filled-basic"
                        label="Email"
                        variant="filled"
                        onChange={(e)=>setRegUser({...regUser,email:e.target.value})}
                    
                    />
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        onChange={(e)=>setRegUser({...regUser,password:e.target.value})}
                    />
                    <Button className='btn-log-reg' onClick={(e) => handleRegister(e)} size="small" color="primary">
                        Register
                    </Button>
                </CardContent>

                <p>If you already have an account, then <Link className='reg-log-href' to="/login"> Login</Link></p>
            </Card>
        </div>
    )
}

export default Register