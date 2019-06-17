import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import WorkDetail from './components/pages/work-detail';
import Work from './components/pages/work';
import Header from './components/partials/header';

class RouteWork extends Component {
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <Router>
                <Header goBack={this.goBack} />
                <Route path="/work/:workid" component={WorkDetail} />
                <Route exact path="/work" component={Work} />
            </Router>
        )
    }
}

export default RouteWork;