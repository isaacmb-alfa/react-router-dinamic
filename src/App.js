import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import { Contacto } from './components/Contacto';
import { Inicio } from './components/Inicio';
import { Nosotros } from './components/Nosotros';
import { User } from './components/User';


function App() {
    return (
        <Router>
            <div className="container">
                <div className="btn-group mt-5">
                    <NavLink exact to="/" className="btn btn-dark">
                        Inicio
                    </NavLink>
                    <NavLink exact to="/nosotros" className="btn btn-dark">
                        Nosotros
                    </NavLink>
                    <NavLink exact to="/contacto" className="btn btn-dark">
                        Contacto
                    </NavLink>
                </div>
                <hr />

                <Switch>
                    <Route path="/nosotros/:id">
                        <User />
                    </Route>
                    <Route exact path="/contacto">
                        <Contacto />
                    </Route>
                    <Route exact path="/nosotros">
                        <Nosotros />
                    </Route>
                    <Route exact path="/">
                        <Inicio />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
