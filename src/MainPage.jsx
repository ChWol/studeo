import React, {useState} from 'react';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import typ from './images/typ.png';
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SpeechToText from "./SpeechToText";

export default function MainPage(props) {
    const [thema, setThema] = useState("Fotosynthese");
    const themen = ["Fotosynthese", "Stoffwechsel", "DNA"];

    return (
        <React.Fragment>
            <CssBaseline />
            <div style={{display: "flex", paddingTop: "3em"}}>
                <p style={{margin: "auto"}}>
                    <Typography variant="h2" component="h3">
                        Hallo {props.name}!
                    </Typography>

                    <Avatar
                        style={{height: "18em", width: "18em", margin: "auto", padding: "2em"}}
                        src={typ}
                    />

                    <Typography variant="h4" style={{margin: "auto", textAlign: "center"}}>
                        Lass uns <b>{props.subject}</b> lernen!
                    </Typography>
                    <p style={{padding: "2em", margin: "auto"}}>
                        <TextField
                            id="standard-basic"
                            label=""
                            select
                            value={thema}
                            helperText="Was sollen wir besprechen?"
                            onChange={event => setThema(event.target.value)}
                        >
                            {themen.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </p>
                    <SpeechToText />
                </p>
            </div>
        </React.Fragment>
    );
}