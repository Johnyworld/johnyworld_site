import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Routes from './Routes';
import FullscreenCover from './Components/partials/FullscreenCover';

import './App.scss';

class App extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={Routes} />
                    <Route path="/blog" component={Routes} />
                    <Route path="/work" component={Routes} />
                    <Route path="/lab" component={Routes} />
                </Switch>
                <FullscreenCover />
            </Router>
        );
    }
};

export default App;