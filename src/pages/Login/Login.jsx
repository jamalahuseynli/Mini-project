import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, TextField } from '@mui/material';
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {

    const {handleLogin,logUser, setlogUser}= useContext(AuthContext)

    return (
        <div className='login-cont'>
            <Card className='card' sx={{ maxWidth: 345, minHeight: 400 }}>
                        <Typography className='title-card' gutterBottom variant="h5" component="div">
                            Sign In
                        </Typography>
                    <CardContent className='sign'>
                        <TextField
                            id="filled-basic"
                            label="Email"
                            variant="filled"
                            onChange={e=>setlogUser({...logUser,email:e.target.value})}
                        />
                        <TextField
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="filled"
                            onChange={e=>setlogUser({...logUser,password:e.target.value})}

                        />
                        <Button className='btn-log-reg' onClick={(e)=>handleLogin(e)} size="small" color="primary">
                        Login
                    </Button>
                    </CardContent>
                    
                   <p> If you don't have an account, then <Link className='reg-log-href' to="/register">Register</Link></p>
            </Card>
        </div>
    )
}

export default Login