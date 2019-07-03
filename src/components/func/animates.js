export const setMouseHover = () => {
    const jsMouseChild = document.getElementById('jsMouseChild');
    const jsAnchors = document.querySelectorAll('a');
    const jsButtons = [ ...jsAnchors, ...document.querySelectorAll('button') ];

    jsMouseChild.classList.remove('hover');

    window.addEventListener( 'mousemove', function(event) {
        jsMouseChild.style.transform = 'translate(' + event.clientX + 'px,' + event.clientY + 'px)';
    });
    
    for( let i=0; i<jsButtons.length; i++ ) {
        jsButtons[i].addEventListener( 'mouseover', function() {
            jsMouseChild.classList.add('hover');
        });
        jsButtons[i].addEventListener( 'mouseleave', function() {
            jsMouseChild.classList.remove('hover');
        });
        
    }
}

export const mouseMoving = (mouse, element, speedX, speedY, isNeg) => {
    let xx = (mouse.x - window.innerWidth / 2) / speedX;
    let yy = (mouse.y - window.innerHeight / 2) / speedY;
    if (isNeg) {
        xx = -xx;
        yy = -yy;
    }
    element.style.transform = 'translate(' + xx + 'px,' + yy + 'px)';
}

export const slideTranslate = ( element, distance, target, duration, ease='cubic-bezier(.33,.59,.6,1)' ) => {
    element.animate([
        { transform: 'translateY('+ distance +'px)' },
        { transform: 'translateY('+ target +'px)' }
    ], {
        duration: duration,
        easing: ease
    });
}

export const scrollFloating = (nowScroll, element, speed) => {
    let yy = Math.floor(nowScroll / speed);
    element.style.transform = 'translateY(' + yy + 'px)';
}

export const scrollFadeOut = (nowScroll, element, hideTop) => {
    let ofst = 0;
    if (element.offsetTop > window.innerHeight) {
        ofst = element.offsetTop;
    }
    if (nowScroll > ofst + hideTop) {
        element.classList.add('is-hidden');
    } else {
        element.classList.remove('is-hidden');
    }
}

export const scrollFadeIn = (nowScroll, element, hideTop) => {
    let ofst = 0;
    if (element.offsetTop > window.innerHeight) {
        ofst = element.offsetTop;
    }
    if (nowScroll > ofst + hideTop) {
        element.classList.remove('is-hidden');
    } else {
        element.classList.add('is-hidden');
    }
}

export const scrollScale = (nowScroll, element, scale=100) => {
    if (nowScroll < 800) {
        scale = 100 + Math.floor(nowScroll / 3) * 0.1;
    }
    let tf = element.style.transform;
    element.style.transform = tf + 'scale(' + scale / 100 + ')'
}

export const animOutSlideUp = (element) => {
    element.style.transform = 'scaleY(0)';
}

export const animInCrossSlide = (childs) => {
    for( let i=0; i<childs.length; i++ ) {
        let transY = 0;
        if ( i % 5 === 0 ) { transY = -3 }
        if ( i % 5 === 1 ) { transY = 3 }
        if ( i % 5 === 2 ) { transY = 2 }
        if ( i % 5 === 3 ) { transY = 1.5 }
        if ( i % 5 === 4 ) { transY = -2 }
        childs[i].style.display = 'inline-block';
        childs[i].animate(
            [
                { transform: 'translateY(' + transY + 'em)' },
                { transform: 'translateY(0px)' }
            ], {
                duration: 1700,
                easing: 'cubic-bezier(.02,.61,.29,1)'
            }
        )
    }
} 

export const animOutWidth = (element, duration) => {
    element.style.left = '0';
    element.style.right = 'auto';
    element.animate([
        { width: '100%' },
        { width: 0 }
    ], {
        duration: duration,
        easing: 'cubic-bezier(.13,.84,.35,1)'
    });
    element.style.width = '0%';
}

export const animInWidth = (element, duration) => {
    element.style.left = 'auto';
    element.style.right = '0';
    element.animate([
        { width: 0 },
        { width: '100%' }
    ], {
        duration : duration,
        easing: 'cubic-bezier(.13,.84,.35,1)'
    });
    element.style.width = '100%';
}

export const animInAllOfTexts = (allOfTextWrap, delay) => {
    setTimeout( function() {
        animInTextGradientByTurnHandler( allOfTextWrap );
        for ( let i=0; i<allOfTextWrap.length; i++ ) {
            const allOfTextWrapEachColumn = allOfTextWrap[i].getElementsByClassName('l-col');
            animInTextGradientByTurnHandler( allOfTextWrapEachColumn );
        }  
    }, delay);
}

export const animInTextGradientByTurnHandler = (elements) => {
    const animInTextGradientByTurn = (nowScroll, elements) => {
        for ( let i=0; i<elements.length; i++ ) {
            let YY = window.pageYOffset + elements[i].getBoundingClientRect().top;
            if ( YY < window.innerHeight ) {
                setTimeout( function() {
                    elements[i].classList.add('is-appear');
                }, i*200);
                continue;
            }
            if ( YY < nowScroll + window.innerHeight ) {
                setTimeout( function() {
                    elements[i].classList.add('is-appear');
                }, elements[i].offsetLeft/2);
            }
        }
    }
    animInTextGradientByTurn( 0, elements );
    window.addEventListener('scroll', function(event) {
        let nowScroll = window.scrollY;
        animInTextGradientByTurn( nowScroll, elements );
    });
}

export const animInWidthByTurnHandler = (elements) => {
    const animInWidthByTurn = (nowScroll, elements) => {
        for ( let i=0; i<elements.length; i++ ) {
            let YY = window.pageYOffset + elements[i].getBoundingClientRect().top;
            if ( YY < nowScroll + window.innerHeight ) {
                animInScale(elements[i]);
            }
        }
    }
    animInWidthByTurn( 0, elements );
    window.addEventListener('scroll', function(event) {
        let nowScroll = window.scrollY;
        animInWidthByTurn( nowScroll, elements );
    });
}

export const animInScale = (element) => {
    element.animate([
        { width: 0, opacity: 0 },
        { width: '100%', opacity: '1' }
    ], {
        easing: 'cubic-bezier(.23,.44,.41,.95)'
    });
    element.style.width = '100%';
    element.style.opacity = '1';
}

export const animInFade = ( element, duration, delay ) => {
    element.style.opacity = 0; 
    element.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: duration,
        delay: delay
    })
    setTimeout( function() {
        element.style.opacity = 1;
    }, delay);
    
}

export const animOutFade = ( element, duration, delay ) => {
    element.style.opacity = 0; 
    element.animate([
        { opacity: 1 },
        { opacity: 0 }
    ], {
        duration: duration,
        delay: delay
    })
    element.style.opacity = 0;
}

export const animInLoading = (jsFullScreenWrap01, jsFullScreenWrap02, jsLoading) => {
    animInWidth(jsFullScreenWrap02, 1000);
    setTimeout(() => {
        animInWidth(jsFullScreenWrap01, 1000);
        jsLoading.style.display = "block";
    }, 500);
}

export const animOutLoading = (jsFullScreenWrap01, jsFullScreenWrap02, jsLoading) => {
    animOutWidth(jsFullScreenWrap01, 1000);
    animOutFade(jsLoading, 200);
    setTimeout(() => {
        animOutWidth(jsFullScreenWrap02, 1000);
        jsLoading.style.display = "none";
        jsLoading.style.opacity = 1;
    }, 500);
}

export const getAbsoluteTop = (element) => {
    return window.pageYOffset + element.getBoundingClientRect().top;
}

export const rotateInfinity = (element) => {
    var degree = 0;
    setInterval(() => {
        degree += 0.01;
        element.style.transform = 'rotate(' + degree + 'deg)';
    }, 10);
}

export class SmoothMouseScroll {
    constructor(target, speed, smooth) {
        if (target === document)
		target = (document.scrollingElement 
            || document.documentElement 
            || document.body.parentNode 
            || document.body) // cross browser support for document scrolling
      
        var moving = false
        var pos = target.scrollTop
        var frame = target === document.body 
                && document.documentElement 
                ? document.documentElement 
                : target // safari is the new IE

        target.addEventListener('wheel', this.scrolled, { passive: false })
        target.addEventListener('DOMMouseScroll', this.scrolled, { passive: false })

        this.scrolled = (e) => {
            console.log('pos');
            e.preventDefault(); // disable default scrolling

            var delta = this.normalizeWheelDelta(e)

            pos += -delta * speed
            pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight)) // limit scrolling
            
            if (!moving) this.update()
        }

        this.normalizeWheelDelta = (e) => {
            if(e.detail){
                if(e.wheelDelta)
                    return e.wheelDelta/e.detail/40 * (e.detail>0 ? 1 : -1) // Opera
                else
                    return -e.detail/3 // Firefox
            }else
                return e.wheelDelta/120 // IE,Safari,Chrome
        }

        this.update = () => {
            moving = true
        
            var delta = (pos - target.scrollTop) / smooth
        
            target.scrollTop += delta
        
            if (Math.abs(delta) > 0.5)
                requestFrame(this.update)
            else
                moving = false
        }

        let requestFrame = function() { // requestAnimationFrame cross browser
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(func) {
                    window.setTimeout(func, 1000 / 50);
                }
            );
        }()
    }

	
}

export const smoothScroll = (target, duration) => {
    const Target = document.querySelector(target);
    const targetPos = Target.offsetTop;
    // const targetPos = Target.getBoundingClientRect().top;
    const startPos = window.pageYOffset;
    const distance = targetPos - startPos;
    let startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease2(timeElapsed, startPos, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // const ease = ( t, b, c, d ) => {
    //     t /= d / 2;
    //     if (t < 1) return c / 2 * t * t * t + b;
    //     t--;
    //     return -c / 2 * ( t * ( t - 2 ) - 1 ) + b;
    // }

    const ease2 = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
    requestAnimationFrame(animation);
}






