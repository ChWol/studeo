// React imports
import React from 'react';

// Material UI library
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import FunctionsIcon from '@material-ui/icons/Functions';
import CodeIcon from '@material-ui/icons/Code';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import EuroIcon from '@material-ui/icons/Euro';
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

// Material UI stylings
const useStyles = makeStyles((theme) => ({
    text: {
        padding: theme.spacing(2, 2, 0),
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing(2),
    },
}));

export default function Subjects(props) {
    const classes = useStyles();
    // State controlling the display of Snackbar
    const [open, setOpen] = React.useState(false);

    // Closing Snackbar
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    // ToDo: Rather map over array
    return (
        <React.Fragment>
            <CssBaseline/>
            <Paper square className={classes.paper} style={{padding: "0.8em"}}>
                <Typography className={classes.text} variant="h5" gutterBottom>
                    Fächer
                </Typography>

                <List className={classes.list} onClick={() => setOpen(true)}>
                    <ListItem button onClick={() => props.setSubject("Biologie")}>
                        <ListItemAvatar>
                            <FingerprintIcon/>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Biologie"
                            secondary="Fotosynthese, Stoffwechsel, DNA, ..."/>
                    </ListItem>

                    <ListItem button onClick={() => props.setSubject("Mathematik")}>
                        <ListItemAvatar>
                            <FunctionsIcon/>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Mathematik"
                            secondary="Graphen, Ableitung, Exponentialfunktionen, ..."/>
                    </ListItem>

                    <ListItem button onClick={() => props.setSubject("Informatik")}>
                        <ListItemAvatar>
                            <CodeIcon/>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Informatik"
                            secondary="Objektorientierung, Formale Sprachen, Java, ..."/>
                    </ListItem>

                    <ListItem button onClick={() => props.setSubject("Deutsch")}>
                        <ListItemAvatar>
                            <BookOutlinedIcon/>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Deutsch"
                            secondary="Klassik, Faust, Goethe, ..."/>
                    </ListItem>

                    <ListItem button onClick={() => props.setSubject("Kunst")}>
                        <ListItemAvatar>
                            <BrushOutlinedIcon/>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Kunst"
                            secondary="Kunstgeschichte, Werkanalyse, Architektur, ..."/>
                    </ListItem>

                    <ListItem button onClick={() => props.setSubject("Wirtschaft")}>
                        <ListItemAvatar>
                            <EuroIcon/>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Wirtschaft"
                            secondary="Keynesianismus, Monetarismus, Magisches Sechseck, ..."/>
                    </ListItem>
                </List>
            </Paper>

            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Alert onClose={handleClose} severity="success">
                    Fach geändert: <b>{props.subject}</b>
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
}