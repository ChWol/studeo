import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

export default function MainPage(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <div style={{display: "flex", paddingTop: "3em"}}>
                <p style={{margin: "auto"}}>
                    <Typography variant="h2" component="h3">
                        Hallo {props.name}!
                    </Typography>
                    <Avatar>typ</Avatar>
                </p>
            </div>
        </React.Fragment>
    );
}