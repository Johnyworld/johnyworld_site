import { smoothScroll } from '../func/animates';

// Common Functions
export const reloadRoute = (history, url) => {
    history.replace(`/reload`);
    setTimeout(() => {
        history.replace(url);
    });
}

export const reactRouteScrollTop = () => {
    if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual"
    }
    window.scrollTo(0, 0);
}

export const cbTimeout = (delay, callback) => {
    return new Promise(res => {
        setTimeout(()=>{
            res(callback());
        }, delay)
    })
}

// Common Handlers
export const topBtnHandler = () => {
    smoothScroll('body', 2000);
}

export const homBtnHandler = ( history ) => {
    reloadRoute( history, '/' );
}

// 높이값 받기
// ---------------------------------------
export const getAbsoluteTop = (element) => {
    return window.pageYOffset + element.getBoundingClientRect().top;
}


