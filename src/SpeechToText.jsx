import React from 'react'
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    pos: {
        marginBottom: 12,
    },
});

const SpeechToText = (props) => {
    const classes = useStyles();
    const {transcript, resetTranscript} = useSpeechRecognition()

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
    }

    function end() {
        props.setAnswer(transcript);
        SpeechRecognition.stopListening();
        props.setDone(true);
    }

    return (
        <div>
            <Button
                color="primary"
                onClick={() => SpeechRecognition.startListening({language: 'de-DE'})}
                variant="contained"
                endIcon={<PlayArrowIcon/>}
            >
                Start
            </Button>

            <Button
                color="secondary"
                onClick={() => end()}
                variant="contained"
                endIcon={<PauseIcon/>}
            >
                Stop
            </Button>

            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Deine Antwort
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {transcript}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => resetTranscript()}>Zurücksetzen</Button>
                </CardActions>
            </Card>
        </div>
    );
}
export default SpeechToText;