import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import About from './components/pages/about';
import RouteWork from './route-work';
import LabDetail from './components/pages/lab-detail';

// import {SmoothMouseScroll} from './components/func/animates';

import './App.css';

class App extends Component {

    componentDidMount() {
        // let canWheel = true;
        // let wheelVel = 0.1;
        // let wheelpos = 0;

        // window.addEventListener( 'wheel', function(event) {
        //     event.preventDefault();
        //     if (window.location.pathname !== "/") {
        //         if ( event.deltaY > 0 ) { wheelpos = 7; }
        //         if ( event.deltaY < 0 ) { wheelpos = -7; }
                
        //         if ( canWheel ) {
        //             canWheel = false;
        //             if ( event.deltaY > 0 ) {
        //                 wheelpos = 7;
        //                 let frames = setInterval( function() {
        //                     wheelpos -= wheelVel / 8 * wheelpos;
        //                     console.log(wheelVel, wheelpos);
        //                     window.scrollTo(0, window.scrollY + wheelpos);
    
        //                     if ( wheelpos <= 0.5 ) {
        //                         canWheel = true;
        //                         clearInterval(frames);
        //                     }
        //                 }, 5);
        //             } else {
        //                 wheelpos = -7;
        //                 let frames = setInterval( function() {
        //                     wheelpos += -wheelVel / 8 * wheelpos;
        //                     console.log(wheelVel, wheelpos);
        //                     window.scrollTo(0, window.scrollY + wheelpos);
    
        //                     if ( wheelpos >= -0.5 ) {
        //                         canWheel = true;
        //                         clearInterval(frames);
        //                     }
        //                 }, 5);
        //             }
                    
        //         } 
        //     }
        // }, {passive: false})

        // function init(){
        //     new SmoothMouseScroll(window, 3200, 45);
        // }

        // init();
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