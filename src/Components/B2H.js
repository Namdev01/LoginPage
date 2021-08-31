import React from 'react'
import { Link } from "react-router-dom";
import {Button, makeStyles} from '@material-ui/core'
const B2H = () => {
    const {btnstyle}=useStyle();
    return (
        <>
             <Link to='/'>
                <Button variant="contained" className={btnstyle}>
                    Back to Home
                </Button>
            </Link>
        </>
    )
} 
const useStyle = makeStyles({
    btnstyle: {
        color: 'blue',
    }
});
export default B2H
