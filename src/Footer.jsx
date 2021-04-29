// React imports
import React, {useState} from 'react';
import {Link} from "react-router-dom";

// Material UI library
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MicIcon from '@material-ui/icons/Mic';
import Fab from '@material-ui/core/Fab';
import BookIcon from '@material-ui/icons/Book';
import IconButton from "@material-ui/core/IconButton";
import TodayIcon from '@material-ui/icons/Today';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

// Speech recognition library
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";

// Styling from Material UI library
const useStyles = makeStyles(() => ({
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
    // State controlling if a recording process is running
    const [recording, setRecording] = useState(false);
    // State storing the recognized spoken text
    const {transcript, resetTranscript} = useSpeechRecognition()

    // Storing the completed answer, stopping the recording in the end
    function end() {
        props.setAnswer(transcript);
        SpeechRecognition.stopListening();
        props.setDone(true);
    }

    // Behaviour on center-button-press
    function homeButton() {
        // Only functional behaviour on home page and if browser supports recognition
        if (props.home && SpeechRecognition.browserSupportsSpeechRecognition()) {
            // Either starting or stopping the current recording
            if (recording) {
                end();
            }
            else {
                props.setAnswer("");
                resetTranscript();
                SpeechRecognition.startListening({continuous: true, language: 'de-DE'});
            }
            setRecording(!recording);
        }
        // Returning to home page
        else {
            // Safety line
            setRecording(false);
            localStorage.setItem('home', 'true');
            props.setHome(true);
        }
    }

    function menuClick() {
        localStorage.setItem('home', 'false');
        props.setHome(false);
    }

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Link
                        to="/subjects"
                        onClick={() => menuClick()}
                        style={{color: 'white'}}
                    >
                        <IconButton edge="start" color="inherit">
                            <BookIcon/>
                        </IconButton>
                    </Link>

                    {(!props.done || !props.home) ?
                        <Link
                            to="/"
                            onClick={() => homeButton()}
                            style={{color: 'white'}}
                        >
                            <Fab color="primary" className={classes.fabButton}>
                                {
                                    ((props.home && SpeechRecognition.browserSupportsSpeechRecognition()) ?
                                        (recording ? <GraphicEqIcon/> : <MicIcon/>)
                                        :
                                        <HomeOutlinedIcon/>)
                                }
                            </Fab>
                        </Link>
                        :
                        null
                    }

                    <div className={classes.grow}/>

                    <Link to="/" style={{color: 'white'}}>
                        <IconButton edge="end" color="inherit">
                            <TodayIcon/>
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}