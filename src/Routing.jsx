import {
    Switch,
    Route
} from "react-router-dom";
import React, {useState} from "react";
import MainPage from "./MainPage";
import UserSettings from "./UserSettings";
import Subjects from "./Subjects";

const Routing = (props) => {
    const [name, setName] = useState("Max");
    const [subject, setSubject] = useState("Biologie");

    return(
        <Switch>
            <Route exact path="/">
                <MainPage name={name} subject={subject} done={props.done} setDone={props.setDone} answer={props.answer}/>
            </Route>
            <Route exact path="/user">
                <UserSettings name={name} setName={setName}/>
            </Route>
            <Route exact path="/subjects">
                <Subjects subject={subject} setSubject={setSubject}/>
            </Route>
        </Switch>
    );
}

export default Routing;

