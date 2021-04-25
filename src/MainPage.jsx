import React, {useState} from 'react';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import typ from './images/typ.png';
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SpeechToText from "./SpeechToText";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';


export default function MainPage(props) {
    const [thema, setThema] = useState(props.subject);
    const themen = ["Fotosynthese", "Stoffwechsel", "DNA"];
    const [done, setDone] = useState(false);

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
            <div style={{display: "flex", paddingTop: "3em"}}>
                <p style={{margin: "auto"}}>
                    {done ?
                        null
                        :
                        <Typography variant="h2" component="h3">
                            Hallo {props.name}!
                        </Typography>
                    }


                    <Avatar
                        style={{height: "18em", width: "18em", margin: "auto", padding: "2em"}}
                        src={typ}
                    />

                    <Typography variant="h4" style={{margin: "auto", textAlign: "center"}}>
                        {done ?
                            <div><b>Sehr gut</b> gemacht!</div>
                            :
                            <div>Lass uns <b>{thema}</b> lernen!</div>
                        }

                    </Typography>

                    {!done ?
                        <div>
                            <p style={{padding: "2em", margin: "auto"}}>
                                <TextField
                                    id="standard-basic"
                                    label=""
                                    select
                                    placeholder={props.subject}
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
                            <SpeechToText setDone={setDone}/>
                        </div>

                        :
                        <p style={{padding: "2em", margin: "auto"}}>
                            <Timeline>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary"/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent>Aspekt 1</TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="primary"/>
                                        <TimelineConnector/>
                                    </TimelineSeparator>
                                    <TimelineContent>Aspekt 2</TimelineContent>
                                </TimelineItem>
                                <TimelineItem>
                                    <TimelineSeparator>
                                        <TimelineDot color="secondary"/>
                                    </TimelineSeparator>
                                    <TimelineContent>Aspekt 3</TimelineContent>
                                </TimelineItem>
                            </Timeline>
                            <Typography variant="h5">
                                Selbsteinschätzung
                            </Typography>
                            <Rating
                                name="customized-icons"
                                defaultValue={3}
                                getLabelText={(value) => customIcons[value].label}
                                IconContainerComponent={IconContainer}
                            />
                        </p>
                    }
                </p>
            </div>
        </React.Fragment>
    );
}