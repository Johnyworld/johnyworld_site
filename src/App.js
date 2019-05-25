import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Header from './partials/header';
import Animate from './js/animate';
import Canvas from './js/canvas';

import './App.css';
 
class App extends Component {
    componentDidMount() {
        Animate();
        Canvas();
    }
    render() {
        return(
            <div>
                <Header />
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Router>
                <div className="button-top is-hidden" id="jsBtnTop">
                    <div className="icon"></div>
                    <p className="f-normal">Top</p>
                </div>
            </div>
        );
    }
};

export default App;