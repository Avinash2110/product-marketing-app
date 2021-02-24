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
                <Route path={process.env.PUBLIC_URL + '/'} exact component={Home}></Route>
                <Route path={process.env.PUBLIC_URL + '/buy'} exact component={Buy}></Route>
                <Route path={process.env.PUBLIC_URL + '/signUp'} exact component={SignUp}></Route>
                <Route path={process.env.PUBLIC_URL + '/signIn'} exact component={SignIn}></Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;