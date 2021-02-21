import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./Home";
import Buy from "./Buy";
import SignUp from "./SignUp";
import SignIn from "./SignIn";


const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/buy" exact component={Buy}></Route>
                <Route path="/SignUp" exact component={SignUp}></Route>
                <Route path="/SignIn" exact component={SignIn}></Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;