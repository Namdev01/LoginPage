import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Grid, Paper, Avatar, TextField, Button, Typography, makeStyles } from '@material-ui/core'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Instagram, Facebook, GitHub, LinkedIn } from '@material-ui/icons';
import B2H from './B2H'
const Login = () => {
    const { paperStyle, avatarStyle, btnstyle, links, link } = useStyle();
    const [user, setUser] = useState({
        username: "",
        password: "",
    })
    let name, value;
    const setData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value });
    };
    const submitData = async (e) => {
        e.preventDefault();
        const { username, password } = user;
        const res = await fetch(`${process.env.REACT_APP_FIREBASE_DATABASE_URL}meradata.json`,
            {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            }
        );
    };
    return (
        <Grid>
            <B2H />
            <Paper elevation={10} className={paperStyle} method="POST">
                <Grid align='center'>
                    <Avatar className={avatarStyle}><AccountBoxIcon /></Avatar>
                    <h2>Log In</h2>
                </Grid>
                <TextField
                    variant="outlined"
                    label='Username'
                    placeholder='Enter username'
                    name="username"
                    value={user.username}
                    onChange={setData}
                    fullWidth
                    required />
                <br />
                <br />
                <TextField
                    variant="outlined"
                    label='Password'
                    placeholder='Enter password'
                    name="password"
                    value={user.password}
                    onChange={setData}
                    type='password'
                    fullWidth
                    required />
                <Button type='submit' color='primary' variant="contained" className={btnstyle} fullWidth onClick={submitData}>Log In</Button>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                    </Link>
                </Typography>
                <Typography > Don't have an account?
                    <Link to='/signin'>
                        Sign In
                    </Link>
                </Typography>
                <Typography>
                    <a className={links} href="https://github.com/Namdev01"><GitHub className={link} /> </a>
                    <a className={links} href="https://www.linkedin.com/in/sunil-darji/"><LinkedIn className={link} /> </a>
                    <a className={links} href="https://touch.facebook.com/sunil.namdev.37669"><Facebook className={link} /> </a>
                    <a className={links} href="https://www.instagram.com/sunil._.namdev/"><Instagram className={link} /> </a>
                </Typography>
            </Paper>
        </Grid>
    )
}

const useStyle = makeStyles({
    paperStyle: {
        padding: '40px',
        height: '70vh',
        width: '280px',
        margin: '20px auto',
        borderRadius: '2rem'
    },
    avatarStyle: {
        backgroundColor: '#1bbd7e'
    },
    btnstyle: {
        margin: '8px 0',
    },
    link: {
        fontSize: '3rem!important',
        margin: '10px 0 0 17px',
        padding: '0',
        color: '#3f50b5',
    },
    links: {
        position: 'relative',
        top: '48px',
        color: 'white',
    }
});

export default Login