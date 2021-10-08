import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import NavBar from '../components/NavBar'
import Crud from '../components/Crud'
import Galeria from '../components/Galeria';

export default function AppRouter() {
    return (<Router>
        <NavBar />
        <Switch>
            <Route exact path="/">
                <Galeria />
            </Route>

            <Route exact path="/CRUD">
                <Crud />
            </Route>

        </Switch>

    </Router>)
}
