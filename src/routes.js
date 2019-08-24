import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import WorkDetail from './Pages/WorkDetail';
import Work from './Pages/Work';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Header from './Components/partials/Header';
import SliderDetail from './Pages/SliderDetail';

import {
    animInCrossSlide,
    animInLoading, 
    animOutLoading, 
    loadHeader,
    setBeforeLoading, 
    animOutFade } from './Funcs/animates';
import {reloadRoute, cbTimeout, topBtnHandler} from './Funcs/functions';

class Routes extends Component {
    constructor(props){
        super(props);
        this.func_goBack = this.func_goBack.bind(this);
        this.history = this.props.history;
        this.location = this.props.location;
    }

    anim_wheel(event) {
        let nowScroll = window.scrollY;
        event.target.style.transform = 'translateY(-'+ nowScroll +'px)';
    }

    clos_headerFade(dir) {
        return () => {
            const headerButtons = document.getElementsByClassName('jsAnimButtons');
            for( let i=0; i<headerButtons.length; i++ ) {
                if (dir === "in") loadHeader(headerButtons);
                if (dir === "out") headerButtons[i].classList.add('is-hidden');
            }
        }
    }
    anim_headerIn = this.clos_headerFade("in");
    anim_headerOut = this.clos_headerFade("out");

    clos_titleFade(dir) {
        return (
            mainTitle = document.getElementById('jsBigmenuBigtitle'), 
            subTitle = document.getElementById('jsBigmenuTitle')
            ) => {
            const splitString = subTitle.getElementsByClassName('unit');
            if (dir === "in") {
                mainTitle.classList.add('centered');
                setTimeout(() => { mainTitle.classList.remove('centered')}, 10)
                setTimeout(() => { animInCrossSlide(splitString)}, 800);
            }
            if (dir === "out") {
                animOutFade(mainTitle, 0);
                animOutFade(subTitle, 0);
            }
        }
    }
    anim_titleIn = this.clos_titleFade("in");
    anim_titleOut = this.clos_titleFade("out");

    anim_workListFade() {
        const workItemWrap = document.getElementById('workItemWrap');
        const workItems = workItemWrap.getElementsByClassName('item');
        for( let i=0; i<workItems.length; i++ ) {
            setTimeout( function() { 
                animOutFade(workItems[i], 0);
            }, i*100)
        }
    }

    clos_loadingScreen(dir) {
        return () => {
            if (dir === "full") setBeforeLoading();
            if (dir === "in") animInLoading();
            if (dir === "out") animOutLoading();
        }
    }
    anim_loadingScreenSetFull = this.clos_loadingScreen("full");
    anim_loadingScreenIn = this.clos_loadingScreen("in");
    anim_loadingScreenOut =  this.clos_loadingScreen("out");

    clos_moveToRoute(loadingIn = true, isPush = false, page) {
        return async(event) => {
            const href = event.currentTarget.dataset.goto;
            if (loadingIn) this.anim_loadingScreenIn(); 
            if (page) {
                this.anim_headerOut();
                this.anim_titleOut();
                if (page === "work") this.anim_workListFade();
            }
            await cbTimeout(1300, ()=>{ 
                if (isPush) {
                    this.history.push(href)
                    reloadRoute(this.history, href)
                } 
                else reloadRoute(this.history, href)
            });
        }
    }
    func_moveToRoute = this.clos_moveToRoute();
    func_moveToDetail = this.clos_moveToRoute(false, true, 'work');

    func_goTop() {
        topBtnHandler();
    }

    func_goBack() {
        this.anim_loadingScreenIn();
        setTimeout(()=>{
            this.props.history.goBack();
        }, 1300)
    }

    render() {
        return (
            <Router>
                <Header 
                    func_goBack={this.func_goBack} 
                    func_goTop={this.func_goTop}
                    func_moveToRoute={this.func_moveToRoute}
                    anim_headerIn={this.anim_headerIn} />
                <Switch>
                    <Route path="/work/:workid" render = {
                        (props) => <WorkDetail 
                                        func_moveToRoute = {this.func_moveToRoute} 
                                        anim_loadingScreenOut = {this.anim_loadingScreenOut} 
                                        anim_loadingScreenSetFull = {this.anim_loadingScreenSetFull}
                                        anim_headerIn = {this.anim_headerIn}
                                    /> }/>
                    <Route exact path="/work" render = {
                        (props) => <Work 
                                        func_moveToRoute = {this.func_moveToDetail} 
                                        anim_titleIn = {this.anim_titleIn}
                                        anim_titleOut = {this.anim_titleOut}
                                        anim_loadingScreenOut = {this.anim_loadingScreenOut} 
                                    />} />

                    <Route exact path="/about" render = {
                        (props) => <About
                                        anim_titleIn = {this.anim_titleIn}
                                        anim_loadingScreenOut = {this.anim_loadingScreenOut} 
                                    />} />

                    <Route exact path="/blog" render = {
                        (props) => <Blog
                                        anim_titleIn = {this.anim_titleIn}
                                        anim_loadingScreenOut = {this.anim_loadingScreenOut} 
                                    />} />
                    {/* <Route path="/blog/:blogid" component={Work} /> */}
                    <Route path="/lab/:id" render = {
                        (props) => <SliderDetail
                                        anim_loadingScreenOut = {this.anim_loadingScreenOut} 
                                        anim_loadingScreenSetFull = {this.anim_loadingScreenSetFull}
                                    />} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;