// React imports
import React, {useState} from 'react';

// Material UI library
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Rating from "@material-ui/lab/Rating";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

// Own imports
import typ from './images/boy.png';

export default function MainPage(props) {
    // State controlling the selected topic
    const [thema, setThema] = useState(props.subject);
    // List of possible topics
    const themen = ["Fotosynthese", "Stoffwechsel", "DNA"];

    // Restarting the process after finishing
    function restart() {
        props.setDone(false);
        setThema(props.subject);
    }

    // Rendering a result text based on user performance
    function resultText() {
        const hits = props.answer.includes("Pflanze") + props.answer.includes("Zucker")
            + props.answer.includes("Sauerstoff");
        switch (hits) {
            case 0:
                return <div>Das kannst du besser!</div>;
            case 1:
                return <div><b>Gut</b> gemacht!</div>;
            case 2:
                return <div><b>Sehr gut</b> gemacht!</div>;
            default:
                return <div><b>Perfekt</b> gemacht!</div>;
        }
    }

    // For customized Material UI rating
    function IconContainer(props) {
        const {value, ...other} = props;
        return <span {...other}>{customIcons[value].icon}</span>;
    }

    const customIcons = {
        1: {
            icon: <SentimentVeryDissatisfiedIcon/>,
            label: 'Very Dissatisfied',
        },
        2: {
            icon: <SentimentDissatisfiedIcon/>,
            label: 'Dissatisfied',
        },
        3: {
            icon: <SentimentSatisfiedIcon/>,
            label: 'Neutral',
        },
        4: {
            icon: <SentimentSatisfiedAltIcon/>,
            label: 'Satisfied',
        },
        5: {
            icon: <SentimentVerySatisfiedIcon/>,
            label: 'Very Satisfied',
        },
    };

    return (
        <React.Fragment>
            <CssBaseline/>

            <div style={{paddingTop: "2em", paddingBottom: '10em', margin: "auto"}}>
                {props.done ?
                    null
                    :
                    <Typography variant="h2" component="h3" style={{textAlign: 'center'}}>
                        Hallo {props.name}!
                    </Typography>
                }

                <Avatar
                    style={{height: "18em", width: "18em", margin: "auto", padding: "2em"}}
                    src={typ}
                />

                <Typography variant="h4" style={{margin: "auto", textAlign: "center"}}>
                    {props.done ?
                        resultText()
                        :
                        <div>Lass uns <b>{thema}</b> lernen!</div>
                    }
                </Typography>

                {!props.done ?
                    <div style={{padding: "2em", margin: "auto", textAlign: 'center'}}>
                        <TextField
                            select
                            placeholder={props.subject}
                            value={thema}
                            helperText="Was sollen wir besprechen?"
                            onChange={event => setThema(event.target.value)}
                        >
                            {themen.map(option => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    :
                    <div style={{padding: "1em", margin: "auto", fontSize: '1.3em'}}>
                        <Timeline>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot
                                        color={props.answer.toLowerCase().includes("pflanze") ? "primary" : "secondary"}/>
                                    <TimelineConnector/>
                                </TimelineSeparator>
                                <TimelineContent>Pflanze</TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot
                                        color={props.answer.toLowerCase().includes("zucker") ? "primary" : "secondary"}/>
                                    <TimelineConnector/>
                                </TimelineSeparator>
                                <TimelineContent>Zucker</TimelineContent>
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot
                                        color={props.answer.toLowerCase().includes("sauerstoff") ? "primary" : "secondary"}/>
                                </TimelineSeparator>
                                <TimelineContent>Sauerstoff</TimelineContent>
                            </TimelineItem>
                        </Timeline>

                        <Typography variant="h5" style={{textAlign: 'center'}}>
                            Selbsteinschätzung
                        </Typography>

                        <div style={{margin: 'auto', textAlign: 'center', paddingTop: '0.5em'}}>
                            <Rating
                                defaultValue={3}
                                getLabelText={(value) => customIcons[value].label}
                                IconContainerComponent={IconContainer}
                                onClick={() => restart()}
                            />
                        </div>
                    </div>
                }
            </div>
        </React.Fragment>
    );
}