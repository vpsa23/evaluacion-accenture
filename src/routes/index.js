import React from "react";
import {routes, NotFound} from './routes';
import { Route, Switch, Router } from "react-router-dom";

const Routes = () => {
    const withHeaderHelp = typeof window !== 'undefined';
    
    return (
        <Switch>
            {routes.map((route, i)=>
                <Route
                    exact
                    key={i}
                    path={route.path}
                    component={route.component}
                />)}
            {withHeaderHelp && <Route render={props => (<NotFound {...props} />)} />}
        </Switch>
    )
}

export default Routes;