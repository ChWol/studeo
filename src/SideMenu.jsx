// React imports
import React, {useState} from 'react';

// Material UI library
import Drawer from '@material-ui/core/Drawer';
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
    const [open, setOpen] = useState(false);

    // Return the icon for the corresponding text
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

    return (
        <div>
            <IconButton
                edge="start"
                color="inherit"
                style={{paddingBottom: "14px", color: 'white'}}
                onClick={() => setOpen(true)}
            >
                <MenuIcon/>
            </IconButton>

            <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
                <div
                    role="presentation"
                    onClick={() => setOpen(false)}
                    onKeyDown={() => setOpen(false)}
                >
                    <List>
                        {['Mitteilungen', 'Hilfe', 'Einstellungen', 'Impressum', 'Datenschutz']
                            .map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{getIcon(index)}</ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            ))}
                    </List>
                    <Divider/>
                </div>
            </Drawer>
        </div>
    );
}