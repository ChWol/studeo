import {
    Switch,
    Route
} from "react-router-dom";
import React from "react";
import MainPage from "./MainPage";
import UserSettings from "./UserSettings";
import Subjects from "./Subjects";

const Routing = () => {
    return(
        <Switch>
            <Route exact path="/start">
                <MainPage />
            </Route>
            <Route exact path="/">
                <MainPage />
            </Route>
            <Route exact path="/user">
                <UserSettings />
            </Route>
            <Route exact path="/subjects">
                <Subjects />
            </Route>
        </Switch>
    );
}

export default Routing;

