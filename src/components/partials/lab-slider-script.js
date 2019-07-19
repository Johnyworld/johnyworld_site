export let labSliderIndex = 1;

const labSliderScript = () => {
    const labSliderBtnLeft = document.getElementById('labSliderBtnLeft');
    const labSliderBtnRight = document.getElementById('labSliderBtnRight');
    const sliderItems = document.getElementsByClassName('slider-item');
    const labSliderNavigator = document.getElementById('labSliderNavigator');
    const navItems = labSliderNavigator.getElementsByClassName('nav-item');
    const jsLabSliderIndex = document.getElementById('jsLabSliderIndex');
    const jsLabSliderIndexTens = document.getElementById('jsLabSliderIndexTens');
    const jsLabSliderIndexUnits = document.getElementById('jsLabSliderIndexUnits');
    const jsLabSliderIndexUnitsParagraph = jsLabSliderIndexUnits.getElementsByTagName('p')[0];
    let labSliderIndexNumHeight = jsLabSliderIndexUnitsParagraph.offsetHeight;
    jsLabSliderIndex.style.height = labSliderIndexNumHeight+'px';

    let itemWidth = sliderItems[0].clientWidth;
    let selectedWidth = window.innerWidth / 100 * 80;
    
    const movingLabSliderTexts = (newIndex) => {
        for ( let i=0; i<sliderItems.length; ++i ) {
            let labsliderTitles = sliderItems[i].querySelectorAll('h2');
            if ( i === newIndex ) {
                sliderItems[i].getElementsByClassName('text-wrap')[0].style.transform = 'translateX(0px)';
                for (let j=0; j<labsliderTitles.length; j++) {
                    labsliderTitles[j].style.transform = 'translateX(0px)';
                }
                sliderItems[i].getElementsByClassName('comment')[0].style.transform = 'translateX(0px)';
                sliderItems[i].getElementsByClassName('explain-p')[0].style.transform = 'translateX(0px)';
                sliderItems[i].getElementsByClassName('thumbnail')[0].style.backgroundPositionX = 'center';
            } else if ( i > newIndex ) {
                sliderItems[i].getElementsByClassName('text-wrap')[0].style.transform = 'translateX(350px)';
                for (let j=0; j<labsliderTitles.length; j++) {
                    let trans = 200;
                    if ( j===1 ) { trans = 100 }
                    if ( j===2 ) { trans = 50 }
                    if ( j===3 ) { trans = 100 }
                    labsliderTitles[j].style.transform = 'translateX('+ trans +'px)';
                }
                sliderItems[i].getElementsByClassName('comment')[0].style.transform = 'translateX(200px)';
                sliderItems[i].getElementsByClassName('explain-p')[0].style.transform = 'translateX(50px)';
                sliderItems[i].getElementsByClassName('thumbnail')[0].style.backgroundPositionX = '-120px';
            } else {
                sliderItems[i].getElementsByClassName('text-wrap')[0].style.transform = 'translateX(-350px)';
                for (let j=0; j<labsliderTitles.length; j++) {
                    let trans = -200;
                    if ( j===1 ) { trans = -100 }
                    if ( j===2 ) { trans = -50 }
                    if ( j===3 ) { trans = -100 }
                    labsliderTitles[j].style.transform = 'translateX('+ trans +'px)';
                }
                sliderItems[i].getElementsByClassName('comment')[0].style.transform = 'translateX(-200px)';
                sliderItems[i].getElementsByClassName('explain-p')[0].style.transform = 'translateX(-50px)';
                sliderItems[i].getElementsByClassName('thumbnail')[0].style.backgroundPositionX = '0px';
            }
        }
    }
    
    const setLabSliderPosition = (newIndex) => {
        for( let i=0; i<sliderItems.length; i++ ) {
            let leftValue;
            if ( i>newIndex ) {
                leftValue = - ( newIndex * itemWidth ) + ( itemWidth * i ) + (selectedWidth - itemWidth);
            } else {
                leftValue = - ( newIndex * itemWidth ) + ( itemWidth * i );
            }
            sliderItems[i].style.left = leftValue + "px";
        }
    }
    
    const labSliderNavigationHandler = (index) => {
        if ( labSliderIndex !== index ) {
            labSliderInit( labSliderIndex, index );
            labSliderIndex = index;
        }
    }
    
    const labSliderButtonEvents = () => {
        labSliderBtnRight.addEventListener( 'click', function(event) {
            if ( labSliderIndex < sliderItems.length-1 ) {
                labSliderIndex +=1;
                labSliderInit(labSliderIndex-1, labSliderIndex);
            } 
        });
        labSliderBtnLeft.addEventListener( 'click', function(event) {
            if ( labSliderIndex > 0 ) {
                labSliderIndex -=1;
                labSliderInit(labSliderIndex+1, labSliderIndex);
            }
        });
        for( let i=0; i<navItems.length; i++ ) {
            navItems[i].addEventListener('click', labSliderNavigationHandler.bind( null, i) );
        }
    }
    
    const indexControll = (newIndex) => {       
        let indexNumberTens = 0;
        let indexNumberUnits = newIndex+1;
        if ( indexNumberUnits > 9 ) {
            indexNumberTens = Math.floor(indexNumberUnits/10);
            indexNumberUnits = indexNumberUnits - indexNumberTens*10;
        }
        jsLabSliderIndexTens.style.transform = 'translateY(-'+ indexNumberTens*labSliderIndexNumHeight +'px)'
        jsLabSliderIndexUnits.style.transform = 'translateY(-'+ indexNumberUnits*labSliderIndexNumHeight +'px)'
    }

    const labSliderInit = (oldIndex, newIndex) => {
        // 좌우 화살표 보이기, 감추기
        if ( newIndex === 0 ) { labSliderBtnLeft.classList.add('is-hidden'); }
        if ( oldIndex === 0 && newIndex >= 1 ) { labSliderBtnLeft.classList.remove('is-hidden'); }
        if ( newIndex === sliderItems.length-1 ) { labSliderBtnRight.classList.add('is-hidden'); }
        if ( oldIndex === sliderItems.length-1 && newIndex <= sliderItems.length-2 ) { labSliderBtnRight.classList.remove('is-hidden'); }
    
        // Selected 클래스 추가
        for( let i=0; i<sliderItems.length; i++ ) {
            navItems[i].classList.remove('selected');
            sliderItems[i].classList.remove('selected');
        }
        navItems[newIndex].classList.add('selected');
        sliderItems[newIndex].classList.add('selected');
    
        // 포지션 배치
        setLabSliderPosition(newIndex);
    
        // 텍스트 애니메이션
        setTimeout( function(){
            movingLabSliderTexts(newIndex);
        }, 10);

        // 인덱스 숫자 바꾸기
        indexControll(newIndex);
    }
    
    const resizeSlider = () => {
        if ( sliderItems[0] ) {
            itemWidth = sliderItems[0].clientWidth;
            selectedWidth = window.innerWidth / 100 * 80;
            setLabSliderPosition(labSliderIndex);
            indexControll(labSliderIndex);
        }
    }

    window.addEventListener( 'resize', resizeSlider );
    
    labSliderInit(labSliderIndex-1, labSliderIndex);
    labSliderButtonEvents();
    setLabSliderPosition(labSliderIndex);
    movingLabSliderTexts(labSliderIndex);
}

export default labSliderScript;