const Animate = () => {
    const mountainFirst = document.getElementById('jsMtFirst');
    const mountainSecond = document.getElementById('jsMtSecond');
    const mountainThird = document.getElementById('jsMtThird');
    const mainText = document.getElementById('jsMaintext');
    const moon = document.getElementById('jsMoon');
    const gnbBtnWorks = document.getElementById('gnbBtnWorks');
    // const starry = document.getElementById('jsStarry');
    const jsIconWheel = document.getElementById('jsIconWheel');
    const jsBtnTop = document.getElementById('jsBtnTop');

    const windowHeight = window.innerHeight;

    // (function starryRotate() {
    //     var degree = 0;
    //     setInterval(() => {
    //         degree += 0.1;
    //         starry.style.transform = 'rotate(' + degree + 'deg)';
    //     }, 100);
    // })();
    
    const scrollFloating = ( nowScroll, element, speed ) => {
        let yy = nowScroll / speed;
        element.style.transform = 'translateY(' + yy + 'px)';
    }
    
    let scale = 100;
    const scrollScale = ( nowScroll, element ) => {
        if ( nowScroll < 800 ) {
            scale = 100 + Math.floor(nowScroll / 3)*0.1;
        } 
        let tf = element.style.transform;
        element.style.transform = tf + 'scale(' + scale/100 + ')'
    }
    
    const scrollFadeOut = ( nowScroll, element, hideTop ) => {
        let ofst = 0;
        if ( element.offsetTop > windowHeight ) {
            ofst = element.offsetTop;
        } 
        if ( nowScroll > ofst + hideTop ) {
            element.classList.add('is-hidden');
        } else {
            element.classList.remove('is-hidden');
        }
    }

    const scrollFadeIn = ( nowScroll, element, hideTop ) => {
        let ofst = 0;
        if ( element.offsetTop > windowHeight ) {
            ofst = element.offsetTop;
        } 
        if ( nowScroll > ofst + hideTop ) {
            element.classList.remove('is-hidden');
        } else {
            element.classList.add('is-hidden');
        }
    }

    const smoothScroll = ( target, duration ) => {
        const Target = document.querySelector( target );
        const targetPos = Target.offsetTop;
        // const targetPos = Target.getBoundingClientRect().top;
        const startPos = window.pageYOffset;
        const distance = targetPos - startPos;
        let startTime = null;

        const animation = ( currentTime ) => {
            if ( startTime === null ) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease2( timeElapsed, startPos, distance, duration );
            window.scrollTo( 0, run );
            if ( timeElapsed < duration ) requestAnimationFrame(animation);
        }

        // const ease = ( t, b, c, d ) => {
        //     t /= d / 2;
        //     if (t < 1) return c / 2 * t * t * t + b;
        //     t--;
        //     return -c / 2 * ( t * ( t - 2 ) - 1 ) + b;
        // }

        const ease2 = ( t, b, c, d ) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * ( t * t * t + 2 ) + b;
        }

        requestAnimationFrame(animation);
    }

    const clickedWorks = () => {
        smoothScroll('#home-Works', 2000);
        setTimeout(() => {
            let clean_uri = window.location.href.split('#')[0];
            window.history.replaceState({}, document.title, clean_uri);    
        }, 50);
    }

    window.addEventListener( 'scroll', function() {
        let nowScroll = window.scrollY;
        scrollFloating( nowScroll, mountainFirst, 3 );
        scrollFloating( nowScroll, mountainSecond, 2 );
        scrollFloating( nowScroll, mountainThird, 1.5 );
        scrollFloating( nowScroll, mainText, -3 );
        scrollFloating( nowScroll, moon, -15 );
        scrollScale( nowScroll, mountainFirst );
        scrollFadeOut( nowScroll, jsIconWheel, 50 );
        scrollFadeIn( nowScroll, jsBtnTop, windowHeight-50 );
        
    });

    jsIconWheel.addEventListener( 'click', function() {
        smoothScroll('#home-Works', 3000);
    });

    jsBtnTop.addEventListener( 'click', function() {
        smoothScroll('body', 2000);
    });

    gnbBtnWorks.addEventListener( 'click', function() {
        if ( window.location.pathname === '/' ) {
            clickedWorks();
        }
    })

    if ( window.location.hash === "#works" ) {
        clickedWorks();
    }

}
export default Animate;



