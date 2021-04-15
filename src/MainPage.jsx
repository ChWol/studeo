import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export default function MainPage() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div style={{display: "flex", paddingTop: "3em"}}>
                <p style={{margin: "auto"}}>
                    <Typography variant="h2" component="h3">
                        Hallo xy!
                    </Typography>
                    <Avatar>typ</Avatar>
                </p>
            </div>
        </div>
    );
}