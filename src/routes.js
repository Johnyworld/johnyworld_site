import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WorkDetail from './components/pages/work-detail';
import Work from './components/pages/work';
import About from './components/pages/about';
import Blog from './components/pages/blog';
import Header from './components/partials/header';
import LabDetail from './components/pages/lab-detail';

import {animInLoading} from './components/func/animates';
import {reloadRoute} from './components/func/functions';

class Routes extends Component {
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
        this.history = this.props.history;
    }

    goBack() {
        this.props.history.goBack();
    }

    componentDidMount() {
        const jsBtnGnbWork = document.getElementById('jsBtnGnbWork');
        const jsBtnGnbAbout = document.getElementById('jsBtnGnbAbout');
        const jsBtnGnbBlog = document.getElementById('jsBtnGnbBlog');
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');
        const jsLoading = document.getElementById('jsLoading');

        const handleBtnHamberger = (event) => {
            let href;
    
            if (event.target.id === 'jsBtnGnbWork') { href = '/work'; }
            if (event.target.id === 'jsBtnGnbAbout') { href = '/about'; }
            if (event.target.id === 'jsBtnGnbBlog') { href = '/blog'; }
            
            animInLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );

            setTimeout(()=>{
                jsBtnGnbWork.classList.remove('is-disabled');
                jsBtnGnbAbout.classList.remove('is-disabled');
                jsBtnGnbBlog.classList.remove('is-disabled');
                reloadRoute(this.history, href);
            }, 1300);
        }
        jsBtnGnbWork.addEventListener( 'click', handleBtnHamberger );
        jsBtnGnbAbout.addEventListener( 'click', handleBtnHamberger );
        jsBtnGnbBlog.addEventListener( 'click', handleBtnHamberger );
    }
    

    render() {
        return (
            <Router>
                <Header goBack={this.goBack} />
                <Route path="/work/:workid" component={WorkDetail} />
                <Route exact path="/work" component={Work} />
                <Route exact path="/about" component={About} />
                <Route exact path="/blog" component={Blog} />
                <Route path="/blog/:blogid" component={Work} />
                <Route path="/lab/:id" component={LabDetail} />
            </Router>
        )
    }
}

export default Routes;