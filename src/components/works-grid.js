import React, { Component } from 'react';
import GridItem from './grid-item';
import './works-grid.css';
import dataWorksReverse from '../data/data-works';

class WorksGrid extends Component {
    constructor(props) {
        super(props);
        this.worksReverse = dataWorksReverse;
    }

    render() {
        return (
            <div className="works-grid-wrapper">
                <ul className="l-row">
                    { this.worksReverse.map( item => {
                        return (
                            <li key={`griditem-${item.id}`} className='l-col l-col-6-12'>
                                <GridItem 
                                    title={item.title}
                                    comment={item.comment}
                                    category={item.category2}
                                    bg={item.thumbnail}
                                    date={item.date}
                                    link={item.slug}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default WorksGrid;