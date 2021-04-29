// React imports
import React, {useState} from "react";
import {
    Switch,
    Route
} from "react-router-dom";

// Own imports
import MainPage from "./MainPage";
import UserSettings from "./UserSettings";
import Subjects from "./Subjects";

const Routing = (props) => {
    // Global state controlling the user name
    const [name, setName] = useState("Max");
    // Global state controlling the chosen subject the user wants to study
    const [subject, setSubject] = useState("Biologie");

    // Routing of different subpages
    return(
        <Switch>
            <Route exact path="/">
                <MainPage
                    name={name}
                    subject={subject}
                    done={props.done}
                    setDone={props.setDone}
                    answer={props.answer}/>
            </Route>

            <Route exact path="/user">
                <UserSettings
                    name={name}
                    setName={setName}/>
            </Route>

            <Route exact path="/subjects">
                <Subjects
                    subject={subject}
                    setSubject={setSubject}/>
            </Route>
        </Switch>
    );
}

export default Routing;