import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SideMenu from "./Drawer";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" style={{backgroundColor: "#087cfc"}}>
                <Toolbar>
                    <SideMenu/>
                    <Typography variant="h5" className={classes.title}>
                        Studeo
                    </Typography>
                    <Link to="/user">
                        <div style={{color: 'white'}}>
                            <IconButton
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                        </div>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}