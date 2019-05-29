export let labSliderIndex = 1;

const labSliderScript = () => {
    const labSliderBtnLeft = document.getElementById('labSliderBtnLeft');
    const labSliderBtnRight = document.getElementById('labSliderBtnRight');
    const sliderItems = document.getElementsByClassName('slider-item');
    const labSliderNavigator = document.getElementById('labSliderNavigator');
    const navItems = labSliderNavigator.getElementsByClassName('nav-item');
    let itemWidth = sliderItems[0].clientWidth;
    let selectedWidth = window.innerWidth / 100 * 80;
    
    const hideObject = (object, duration) => {
        setTimeout(function() {
            object.style.display = 'none';
        }, duration);
        object.animate(
            [
                {opacity: 1},
                {opacity: 0}
            ], { duration: duration }
        );
    }
    
    const showObject = (object, duration) => {
        object.style.display = 'block';
        setTimeout(function() {
            object.style.display = 'block';
        }, duration);
        object.animate(
            [
                {opacity: 0},
                {opacity: 1}
            ], { duration: duration }
        );
    }
    
    const movingLabSliderTexts = (newIndex) => {
        for ( let i=0; i<sliderItems.length; ++i ) {
            if ( i === newIndex ) {
                sliderItems[i].getElementsByClassName('text-wrap')[0].style.transform = 'translateX(0px)';
                sliderItems[i].querySelector('h2').style.transform = 'translateX(0px)';
                sliderItems[i].getElementsByClassName('comment')[0].style.transform = 'translateX(0px)';
                sliderItems[i].getElementsByClassName('thumbnail')[0].style.backgroundPositionX = 'center';
            } else if ( i > newIndex ) {
                sliderItems[i].getElementsByClassName('text-wrap')[0].style.transform = 'translateX(350px)';
                sliderItems[i].querySelector('h2').style.transform = 'translateX(200px)';
                sliderItems[i].getElementsByClassName('comment')[0].style.transform = 'translateX(100px)';
                sliderItems[i].getElementsByClassName('thumbnail')[0].style.backgroundPositionX = '-120px';
            } else {
                sliderItems[i].getElementsByClassName('text-wrap')[0].style.transform = 'translateX(-350px)';
                sliderItems[i].querySelector('h2').style.transform = 'translateX(-200px)';
                sliderItems[i].getElementsByClassName('comment')[0].style.transform = 'translateX(-100px)';
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
    
    const labSliderInit = (oldIndex, newIndex) => {
        // 좌우 화살표 보이기, 감추기
        if ( newIndex === 0 ) { hideObject(labSliderBtnLeft, 700); }
        if ( oldIndex === 0 && newIndex >= 1 ) { showObject(labSliderBtnLeft, 700); }
        if ( newIndex === sliderItems.length-1 ) { hideObject(labSliderBtnRight, 700); }
        if ( oldIndex === sliderItems.length-1 && newIndex <= sliderItems.length-2 ) { showObject(labSliderBtnRight, 700); }
    
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
        hideObject(sliderItems[oldIndex].getElementsByClassName('text-wrap')[0], 700);
        showObject(sliderItems[newIndex].getElementsByClassName('text-wrap')[0], 700);
        setTimeout( function(){
            movingLabSliderTexts(newIndex);
        }, 10);
    }
    
    window.addEventListener( 'resize', function() {
        if ( sliderItems[0] ) {
            itemWidth = sliderItems[0].clientWidth;
            selectedWidth = window.innerWidth / 100 * 80;
            setLabSliderPosition(labSliderIndex);
        }
    });

    labSliderButtonEvents();
    setLabSliderPosition(labSliderIndex);
    movingLabSliderTexts(labSliderIndex);
}

export default labSliderScript;