import React from 'react'
import { Link } from "react-router-dom";
import { Grid, Paper, Avatar, TextField, Button, Typography, FormControlLabel, Checkbox, makeStyles, AccordionSummary } from '@material-ui/core'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { Instagram, Facebook, GitHub, LinkedIn } from '@material-ui/icons';
import B2H from './B2H'
const Login = () => {
    const { paperStyle, avatarStyle, btnstyle,links, link } = useStyle();
    return (
        <Grid>
            <B2H/>
            <Paper elevation={10} className={paperStyle}>
                <Grid align='center'>
                    <Avatar className={avatarStyle}><AccountBoxIcon /></Avatar>
                    <h2>Log In</h2>
                </Grid>
                <TextField variant="outlined" label='Username' placeholder='Enter username' fullWidth required />
                <br />
                <br />
                <TextField variant="outlined" label='Password' placeholder='Enter password' type='password' fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant="contained" className={btnstyle} fullWidth>Log In</Button>
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
                    <a className={links} href="https://github.com/Namdev01" target="_blank"><GitHub className={link} /> </a>
                    <a className={links} href="https://www.linkedin.com/in/sunil-darji/" target="_blank"><LinkedIn className={link} /> </a>
                    <a className={links} href="https://touch.facebook.com/sunil.namdev.37669" target="_blank"><Facebook className={link} /> </a>
                    <a className={links} href="https://www.instagram.com/sunil._.namdev/" target="_blank"><Instagram className={link} /> </a>
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