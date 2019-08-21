import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WorkDetail from './Pages/WorkDetail';
import Work from './Pages/Work';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Header from './Components/partials/Header';
import SliderDetail from './Pages/SliderDetail';

import {animInLoading} from './Funcs/animates';
import {reloadRoute} from './Funcs/functions';

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
        const jsBtnGnbToy = document.getElementById('jsBtnGnbToy');
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');
        const jsLoading = document.getElementById('jsLoading');

        const handleBtnHamburger = (event) => {
            let href;
    
            if (event.target.id === 'jsBtnGnbWork') { href = '/work'; }
            if (event.target.id === 'jsBtnGnbAbout') { href = '/about'; }
            if (event.target.id === 'jsBtnGnbBlog') { href = '/blog'; }
            if (event.target.id === 'jsBtnGnbToy') { href = '/#study'; }
            
            animInLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );

            setTimeout(()=>{
                jsBtnGnbWork.classList.remove('is-disabled');
                jsBtnGnbAbout.classList.remove('is-disabled');
                jsBtnGnbBlog.classList.remove('is-disabled');
                jsBtnGnbToy.classList.remove('is-disabled');
                reloadRoute(this.history, href);
            }, 1300);
        }
        jsBtnGnbWork.addEventListener( 'click', handleBtnHamburger );
        jsBtnGnbAbout.addEventListener( 'click', handleBtnHamburger );
        jsBtnGnbBlog.addEventListener( 'click', handleBtnHamburger );
        jsBtnGnbToy.addEventListener( 'click', handleBtnHamburger );
    }
    

    render() {
        return (
            <Router>
                <Header goBack={this.goBack} />
                <Route path="/work/:workid" component={WorkDetail} />
                <Route exact path="/work" component={Work} />
                <Route exact path="/about" component={About} />
                <Route exact path="/blog" component={Blog} />
                {/* <Route path="/blog/:blogid" component={Work} /> */}
                <Route path="/lab/:id" component={SliderDetail} />
            </Router>
        )
    }
}

export default Routes;