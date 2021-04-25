import React from 'react';
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
    subheader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
}));

export default function Subjects(props) {
    const classes = useStyles();

    //ToDo: Suche, Fächer hinzufügen, wenn Klick dann zu Hauptscreen, Mikro Button solange zu Home machen

    return (
        <React.Fragment>
            <CssBaseline/>
            <Paper square className={classes.paper}>
                <Typography className={classes.text} variant="h5" gutterBottom>
                    Fächer
                </Typography>
                    <List className={classes.list}>
                        <ListItem button onClick={() => props.setSubject("Biologie")}>
                            <ListItemAvatar>
                                <FingerprintIcon/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={"Biologie"}
                                secondary={"Fotosynthese, Stoffwechsel, DNA, ..."}/>
                        </ListItem>
                        <ListItem button onClick={() => props.setSubject("Mathematik")}>
                            <ListItemAvatar>
                                <FunctionsIcon/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={"Mathematik"}
                                secondary={"Graphen, Ableitung, Exponentialfunktionen, ..."}/>
                        </ListItem>
                        <ListItem button onClick={() => props.setSubject("Informatik")}>
                            <ListItemAvatar>
                                <CodeIcon/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={"Informatik"}
                                secondary={"Objektorientierung, Formale Sprachen, Java, ..."}/>
                        </ListItem>
                        <ListItem button onClick={() => props.setSubject("Deutsch")}>
                            <ListItemAvatar>
                                <BookOutlinedIcon/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={"Deutsch"}
                                secondary={"Klassik, Faust, Goethe, ..."}/>
                        </ListItem>
                        <ListItem button onClick={() => props.setSubject("Kunst")}>
                            <ListItemAvatar>
                                <BrushOutlinedIcon/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={"Kunst"}
                                secondary={"Kunstgeschichte, Werkanalyse, Architektur, ..."}/>
                        </ListItem>
                        <ListItem button onClick={() => props.setSubject("Wirtschaft")}>
                            <ListItemAvatar>
                                <EuroIcon/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={"Wirtschaft"}
                                secondary={"Keynesianismus, Monetarismus, Magisches Sechseck, ..."}/>
                        </ListItem>
                    </List>
            </Paper>
        </React.Fragment>
    );
}