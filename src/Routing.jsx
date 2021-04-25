import {
    Switch,
    Route
} from "react-router-dom";
import React, {useState} from "react";
import MainPage from "./MainPage";
import UserSettings from "./UserSettings";
import Subjects from "./Subjects";

const Routing = () => {
    const [name, setName] = useState("Christopher");

    return(
        <Switch>
            <Route exact path="/start">
                <MainPage name={name}/>
            </Route>
            <Route exact path="/">
                <MainPage name={name}/>
            </Route>
            <Route exact path="/user">
                <UserSettings name={name} setName={setName}/>
            </Route>
            <Route exact path="/subjects">
                <Subjects />
            </Route>
        </Switch>
    );
}

export default Routing;

