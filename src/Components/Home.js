import React from 'react'
import { Link } from "react-router-dom";
import {Button,makeStyles} from '@material-ui/core'
const Home = () => {
    const {btnstyle,btnstyle1, welcome}=useStyle();
    return (
        <>
            <h1 className={welcome}>Welcome</h1>
            <Link to='/signin'>
                <Button variant="contained" className={btnstyle}>
                    Sign In
                </Button>
            </Link>
            <Link to='/login'>
                <Button variant="contained" className={btnstyle1}>
                    log In
                </Button>
            </Link>
        </>
    )
}
const useStyle = makeStyles({
    btnstyle: {
        color: 'blue',
        // float: 'right',
        position: 'absolute',
        top: '10px',
        right: '10px'
    },
    btnstyle1: {
        color: 'blue',
        // float: 'right',
        position: 'absolute',
        top: '10px',
        right: '120px'
    },
    welcome: {
        fontSize: '10vh',
        display: 'flex!important',
        justifyContent: 'center',
        marginTop: '40vh',
        boxShadow: '10px red'
    }
});
export default Home
