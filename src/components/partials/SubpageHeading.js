import React, {Component} from 'react';
import './SubpageHeading.scss';

export default class SubpageHeading extends Component {
    mainTitle = null;
    subTitle = null;

    componentDidMount() {
        const { anim_titleIn } = this.props;
        anim_titleIn(this.mainTitle, this.subTitle);
    }

    render() {
        const {hugetitle, subtext} = this.props;
        const subtextSplit = subtext.split('');

        return(
            <div className="bigmenu-title-wrapper centered" id="jsBigmenuBigtitle" ref={ref=>{this.mainTitle = ref}} >
                <h1 className="f-hugetitle">{hugetitle}</h1>
                <div className="f-title" id="jsBigmenuTitle" ref={ref=>{this.subTitle = ref}}>
                    { subtextSplit.map((item, key) => {
                        let string;
                        item === ' '
                        ? string = <p className="unit" key={`sub-${key}`}>&nbsp;</p>
                        : string = <p className="unit" key={`sub-${key}`}>{item}</p>
                        return(string)
                    })}
                </div>
            </div>
        )
    }
}