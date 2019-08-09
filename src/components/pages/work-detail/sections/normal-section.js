import React from 'react';

export default function NormalSection({ title, content, addClassName }) {
    return (
        <section className={ addClassName }>
            { content.map((item, key)=>{
                return (
                    <div className={item.wrapper}>
                        { title || item.subtitle || item.desc ? 
                            <div className="text-wrap">
                                { key === 0 ? <h2 className="f-title jsAppearBtT">{title}</h2> : null }
                                { item.subtitle || item.desc ? 
                                    <p className="f-normal jsAppearBtT">
                                        { item.subtitle ? <><strong>{item.subtitle}</strong><br /></> : null }{item.desc}
                                    </p> 
                                : null }
                            </div>
                        : null }
                        { item.svgComponent ?  
                            <div className="center-wrap">
                                <div className="text-wrap c-wine-bright">{item.svgComponentDesc}</div>
                                {item.svgComponent}
                            </div>
                        : null }
                        { item.imgSrc ? <img className="jsAppearBtT" src={item.imgSrc} alt={item.imgTitle} title={item.imgTitle} style={ item.style } /> : null }
                        { item.grid ?  
                            <div className="grid-wrap clear-fix">
                                <ul className={"l-row gap"+(item.grid.gap)}>
                                    { item.grid.imgs.map(img=>{
                                        let columnClassName, columnMobileClassName, columnTabletClassName;
                                        if ( item.grid.column === 1 ) { columnClassName = "l-col-12-12" }
                                        if ( item.grid.column === 2 ) { columnClassName = "l-col-6-12" }
                                        if ( item.grid.column === 3 ) { columnClassName = "l-col-4-12" }
                                        if ( item.grid.mobileCol === 1 ) { columnMobileClassName = "l-col-m-12-12" }
                                        if ( item.grid.mobileCol === 2 ) { columnMobileClassName = "l-col-m-6-12" }
                                        if ( item.grid.tabletCol === 1 ) { columnTabletClassName = "l-col-t-12-12" }
                                        return (
                                            <li className={"l-col " + (columnClassName)+" " +(columnMobileClassName)+" " +(columnTabletClassName)}>
                                                <img className="jsAppearBtT" src={img.src} alt={img.title} title={img.title} />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        : null }
                        { item.iframe ?
                            <iframe className="jsAppearBtT" title={item.iframe.title} src={item.iframe.src} style={ item.iframe.style } frameBorder="0" allowFullScreen="allowfullscreen" />
                        : null }
                    </div>
                )               
            })}
        </section>
    )
}