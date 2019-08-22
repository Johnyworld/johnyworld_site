import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WorkDetail from './Pages/WorkDetail';
import Work from './Pages/Work';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Header from './Components/partials/Header';
import SliderDetail from './Pages/SliderDetail';

import {animInLoading} from './Funcs/animates';
import {reloadRoute, cbTimeout} from './Funcs/functions';

class Routes extends Component {
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
        this.history = this.props.history;
        this.location = this.props.location;
    }

    goBack() {
        this.props.history.goBack();
    }

    anim_wheel(event) {
        let nowScroll = window.scrollY;
        const workItemWrap = document.getElementById('workItemWrap');
        const workItems = workItemWrap.getElementsByClassName('item');
        event.target.style.transform = 'translateY(-'+ nowScroll +'px)';
    }

    anim_moveToRoute() {
        const jsFullScreenWrap01 = document.getElementById('jsFullScreenWrap01');
        const jsFullScreenWrap02 = document.getElementById('jsFullScreenWrap02');
        const jsLoading = document.getElementById('jsLoading');
        animInLoading( jsFullScreenWrap01, jsFullScreenWrap02, jsLoading );
    }

    clos_moveToRoute() {
        return async(event) => {
            const href = event.target.dataset.goto;
            console.log(href);
            this.anim_moveToRoute();
            await cbTimeout(1300, ()=>{ reloadRoute(this.history, href); });
        }
    }

    func_moveToRoute = this.clos_moveToRoute();

    render() {
        return (
            <Router>
                <Header goBack={this.goBack} func_moveToRoute={this.func_moveToRoute}/>
                <Route exact path="/work" component={()=><Work history={this.history} location={this.location} />
                <Route path="/work/:workid" component={()=><WorkDetail history={this.history} location={this.location} func_moveToRoute={this.func_moveToRoute}/>} />
                <Route exact path="/about" component={()=><About history={this.history} location={this.location} func_moveToRoute={this.func_moveToRoute}/>} />
                <Route exact path="/blog" component={Blog} />
                {/* <Route path="/blog/:blogid" component={Work} /> */}
                <Route path="/lab/:id" component={SliderDetail} />
            </Router>
        )
    }
}

export default Routes;