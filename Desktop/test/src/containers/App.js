import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../components/Login/Login';
import Cinemas from '../components/Cinemas/Cinemas';
import Movies from '../components/Movies/Movies';
import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/cinemas' component={Cinemas} />
                    <Route exact path='/movies' component={Movies} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
