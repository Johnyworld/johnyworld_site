import React, {Component} from 'react';

class SubpageHeading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hugetitle: this.props.hugetitle,
            subtext: this.props.subtext.split('')
        }
    }

    render() {
        return(
            <div className="bigmenu-title-wrapper centered" id="jsBigmenuBigtitle">
                <h1 className="f-hugetitle">{this.state.hugetitle}</h1>
                <div className="f-title" id="jsBigmenuTitle">
                    { this.state.subtext.map((item, key) => {
                        let string;
                        item === ' '
                        ? string = <p key={`sub-${key}`}>&nbsp;</p>
                        : string = <p key={`sub-${key}`}>{item}</p>
                        return(string)
                    })}
                </div>
            </div>
        )
    }
}

export default SubpageHeading;