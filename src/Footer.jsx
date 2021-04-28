import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MicIcon from '@material-ui/icons/Mic';
import Fab from '@material-ui/core/Fab';
import BookIcon from '@material-ui/icons/Book';
import IconButton from "@material-ui/core/IconButton";
import TodayIcon from '@material-ui/icons/Today';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import {Link} from "react-router-dom";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";

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
        backgroundColor: "#087cfc"
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
        backgroundColor: "#ff8c24"
    },
}));

export default function BottomAppBar(props) {
    const classes = useStyles();
    const [recording, setRecording] = useState(false);

    const {transcript, resetTranscript} = useSpeechRecognition()

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }

    function end() {
        props.setAnswer(transcript);
        SpeechRecognition.stopListening();
        props.setDone(true);
    }

    function homeButton() {
        if (props.home) {
            if (recording) {
                end();
            }
            else {
                SpeechRecognition.startListening({language: 'de-DE'});
            }
            setRecording(!recording);
        }
        else {
            setRecording(false);
        }
        props.setHome(true);
    }

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Link to="/subjects" onClick={() => props.setHome(false)}>
                        <div style={{color: 'white'}}>
                            <IconButton edge="start" color="inherit">
                                <BookIcon />
                            </IconButton>
                        </div>
                    </Link>
                    {!props.done ?
                        <Link to="/" onClick={() => homeButton()}>
                            <div style={{color: 'white'}}>
                                <Fab color="primary" className={classes.fabButton}>
                                    {
                                        props.home ?
                                            (recording ?
                                                <GraphicEqIcon/>
                                                :
                                                <MicIcon/>)
                                            :
                                            <HomeOutlinedIcon/>
                                    }
                                </Fab>
                            </div>
                        </Link>

                        :
                        null
                    }
                    <div className={classes.grow} />
                    <Link to="/">
                        <div style={{color: 'white'}}>
                            <IconButton edge="end" color="inherit" aria-label="open drawer">
                                <TodayIcon />
                            </IconButton>
                        </div>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}