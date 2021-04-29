// React imports
import React from 'react';
import {Link} from "react-router-dom";

// Own imports
import SideMenu from "./SideMenu";

// Material UI library
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

// Styling for horizontal alignment (Material UI library)
const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));

export default function Header(props) {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" style={{backgroundColor: "#087cfc"}}>
                <Toolbar>
                    <SideMenu/>

                    <Typography variant="h5" className={classes.title}>
                        Studeo
                    </Typography>

                    <Link
                        to="/user"
                        onClick={() => props.setHome(false)}
                        style={{color: 'white'}}
                    >
                        <IconButton color="inherit">
                            <AccountCircle/>
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}