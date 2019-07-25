import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home';
import Routes from './routes';

import './App.css';

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
                
                <div className="mouse-child-wrapper">
                    <div id="jsMouseChild"></div>
                    <div id="jsFullScreenWrap02"></div>
                    <div id="jsFullScreenWrap01"></div>
                    <div id="jsLoading"></div>
                </div>
            </Router>
        );
    }
};

export default App;