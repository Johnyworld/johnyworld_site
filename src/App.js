import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import LabDetail from './pages/lab-detail';
import Header from './partials/header';

import './App.css';
 
class App extends Component {
    render() {
        return(
            <Router>
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/works" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/lab/:id" component={LabDetail} />
            </Router>
        );
    }
};

export default App;