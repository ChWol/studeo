import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SettingsIcon from '@material-ui/icons/Settings';
import {IconButton} from "@material-ui/core";
import SubjectIcon from '@material-ui/icons/Subject';
import GavelIcon from '@material-ui/icons/Gavel';

export default function SideMenu() {
    const [state, setState] = React.useState({
        left: false
    });

    function getIcon(index) {
        switch (index) {
            case 0:
                return <MailIcon/>;
            case 1:
                return <ContactSupportIcon/>;
            case 2:
                return <SettingsIcon/>
            case 3:
                return <SubjectIcon/>
            default:
                return <GavelIcon/>
        }
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...state, [anchor]: open});
    };


    const list = (anchor) => (
        <div
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Mitteilungen', 'Hilfe', 'Einstellungen', 'Impressum', 'Datenschutz'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{getIcon(index)}</ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
        </div>
    );

    return (
        <div>
            <IconButton edge="start" color="inherit" style={{paddingBottom: "8px"}}>
                <div style={{color: "white"}} onClick={toggleDrawer("left", true)}>
                    <MenuIcon/>
                </div>
            </IconButton>
            <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
                {list("left")}
            </Drawer>
        </div>
    );
}