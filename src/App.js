import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import About from './components/pages/about';
import RouteWork from './route-work';
import LabDetail from './components/pages/lab-detail';

import './App.css';

class App extends Component {

    componentDidMount() {
        window.addEventListener( 'wheel', function(event) {
            if (window.location.pathname !== "/") {
                window.scrollTo( 0, window.scrollY + Math.floor(event.deltaY / 2) );
            }
        })
    }

    render() {
        return(
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/work" component={RouteWork} />
                <Route path="/lab/:id" component={LabDetail} />
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