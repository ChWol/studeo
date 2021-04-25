import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

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
}));

export default function UserSettings(props) {
    const classes = useStyles();

    const [mail, setMail] = useState("ch.wolter@tum.de");
    const stati = ["Schüler", "Lehrer"];
    const [status, setStatus] = useState("Schüler");
    const forms = ["Grundschule", "Mittelschule", "Realschule", "Gymnasium"];
    const [form, setForm] = useState("Gymnasium");
    const regions = ["Bayern", "Berlin", "Sachsen"];
    const [region, setRegion] = useState("Bayern");
    const [age, setAge] = useState(11);

    //ToDo: Email Regex, states for each input, store in browser storage, Input Adornment, select, validation, number input
    // required

    return (
        <React.Fragment>
            <CssBaseline/>
            <Paper square className={classes.paper} style={{padding: "0.8em"}}>
                <Typography className={classes.text} variant="h5" gutterBottom>
                    Profil
                </Typography>

                <List className={classes.list}>
                    <ListItem>
                        <div className={classes.margin}>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <PersonIcon/>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="standard-basic"
                                        label="Name"
                                        defaultValue={props.name}
                                        onChange={event => props.setName(event.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </ListItem>
                    <ListItem>
                        <div className={classes.margin}>
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <MailOutlineIcon/>
                                </Grid>
                                <Grid item>
                                    <TextField
                                        id="standard-basic"
                                        label="Mail"
                                        defaultValue={mail}
                                        onChange={event => setMail(event.target.value)}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </ListItem>

                    <ListItem>
                        <TextField
                            id="standard-basic"
                            label="Status"
                            select
                            value={status}
                            onChange={event => setStatus(event.target.value)}
                        >
                            {stati.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </ListItem>
                    <ListItem>
                        <TextField
                            id="standard-basic"
                            label="Schulform"
                            select
                            value={form}
                            onChange={event => setForm(event.target.value)}
                        >
                            {forms.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </ListItem>
                    <ListItem>
                        <TextField
                            id="standard-basic"
                            label="Region"
                            select
                            value={region}
                            onChange={event => setRegion(event.target.value)}
                        >
                            {regions.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </ListItem>
                    <ListItem>
                        <TextField
                            helperText={((age < 1) || (age > 12)) ? "Nur Klasse 1-12!" : ""}
                            error={(age < 1) || (age > 12)}
                            type="number"
                            id="standard-basic"
                            label="Klassenstufe"
                            onChange={event => setAge(parseInt(event.target.value))}
                            defaultValue={age}
                        />
                    </ListItem>
                </List>
            </Paper>
        </React.Fragment>
    );
}