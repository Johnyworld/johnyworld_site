import React, { Component } from 'react';
import $ from 'jquery';
import rider1Url from '../../images/mariokart/rider-1.png';
import './mariokart.css';

import mkRider1 from '../../images/mariokart/rider-1.png';
import mkRider2 from '../../images/mariokart/rider-2.png';
import mkRider3 from '../../images/mariokart/rider-3.png';
import mkRider4 from '../../images/mariokart/rider-4.png';

import mkBgLand from '../../images/mariokart/land.jpg';
import mkBgHell from '../../images/mariokart/hell.jpg';
import mkBgCastle from '../../images/mariokart/castle.jpg';
import mkBgDesert from '../../images/mariokart/desert.jpg';

class MarioKart extends Component {
  componentDidMount() {
    // const mkStageBtnNext = document.getElementById('mkStageBtnNext');
    // const mkStageBtnPrev = document.getElementById('mkStageBtnPrev');

    let speed = 2;
    let btndelay = false;
    let stageArray = [
      { rider: 'mario', img: mkRider1, bg: mkBgLand },
      { rider: 'koopa', img: mkRider2, bg: mkBgHell },
      { rider: 'peach', img: mkRider3, bg: mkBgCastle },
      { rider: 'todd', img: mkRider4, bg: mkBgDesert },
    ];

    window.onkeydown = function (event) {
      let keyCode = event.keyCode;
      if (keyCode === 37) $('.stage-btn-prev').click();
      if (keyCode === 39) $('.stage-btn-next').click();
      if (keyCode === 38) $('.speedup').click();
      if (keyCode === 40) $('.speeddown').click();
      if (keyCode === 32) $('.jump').click();
    };

    // 배경 무한루프
    window.setInterval(function () {
      let speedResult = '-=' + speed;
      $('.round-frame-bg').css('background-position', speedResult);
    }, 10);

    // 현재 스테이지에 맞게 배경 컨트롤
    stageArray.unshift(stageArray.pop());
    let bgControl = function () {
      $('.round-frame-bg').each(function (index) {
        $(this).css('background-image', 'url(' + stageArray[index].bg + ')');
      });
    };
    bgControl();

    // 스테이지 버튼
    $('.stage-btn')
      .hover(
        function () {
          $(this).addClass('stage-btn-hover');
        },
        function () {
          $(this).removeClass('stage-btn-hover');
        }
      )
      .click(function () {
        if (btndelay === false) {
          btndelay = true;

          // 스테이지 컨트롤
          let bgRollAnimation = 0;
          let isNext = $(this).hasClass('stage-btn-next');
          if (isNext) {
            stageArray.push(stageArray.shift());
            bgRollAnimation = -600;
          } else {
            stageArray.unshift(stageArray.pop());
            bgRollAnimation = 0;
          }

          // 라이더 교체
          $('.rider').attr('src', stageArray[1].img);

          // 애니메이션
          let $frame = $('.round-frame');
          $frame.animate({ marginLeft: bgRollAnimation }, 800, function () {
            $frame.css({ marginLeft: -300 });
            bgControl();
            btndelay = false;
          });
        }
      });

    // 속도 버튼
    $('.btn')
      .hover(
        function () {
          $(this).addClass('btn-hover');
        },
        function () {
          $(this).removeClass('btn-hover');
        }
      )
      .click(function () {
        if (btndelay === false) {
          let isSpeedUp = $(this).hasClass('speedup');
          let isSpeedDown = $(this).hasClass('speeddown');
          // 스피드 업 버튼
          if (isSpeedUp) {
            if (speed < 4) {
              btndelay = true;
              speed = speed + 1;
              actSpeedUp($('.rider'));
            }
          }
          // 스피드 다운 버튼
          else if (isSpeedDown) {
            if (speed > 1) {
              btndelay = true;
              speed = speed - 1;
              actSpeedDown($('.rider'));
            }
          }
          // 점프 버튼
          else {
            btndelay = true;
            actJump($('.rider'));
          }
          // Min & Max 버튼 변경
          if (speed < 2) {
            $('.btn.speeddown').addClass('min');
          } else if (speed > 3) {
            $('.btn.speedup').addClass('max');
          } else {
            $('.btn.speedup').removeClass('max');
            $('.btn.speeddown').removeClass('min');
          }
        }
      });

    let actSpeedUp = function (rider) {
      rider.animate({ left: '14%' }, 400).animate({ left: '0' }, 1100, function () {
        btndelay = false;
      });
    };

    let actSpeedDown = function (rider) {
      rider.animate({ left: '-5%' }).animate({ left: '0' }, 800, function () {
        btndelay = false;
      });
    };

    let actJump = function (rider) {
      rider
        .animate({ height: '85px' }, 200)
        .animate({ height: '93px', bottom: '80px' }, 300)
        .animate({ bottom: '43px' }, 250)
        .animate({ bottom: '48px' }, 150)
        .animate({ bottom: '43px' }, 100, function () {
          btndelay = false;
        });
    };
  }

  render() {
    return (
      <div className='mariokart-wrapper'>
        <div className='stage-wrapper'>
          <div className='stage-btn stage-btn-next' id='mkStageBtnNext'></div>
          <div className='stage-btn stage-btn-prev' id='mkStageBtnPrev'></div>
        </div>
        <div className='round-wrapper'>
          <div className='round-frame'>
            <div className='round-frame-bg'></div>
            <div className='round-frame-bg round-frame-bg-center'></div>
            <div className='round-frame-bg round-frame-bg-r'></div>
          </div>
          <img className='rider' src={rider1Url} alt='mkrider'></img>
        </div>
        <div className='btn-wrapper'>
          <div className='btn speeddown'></div>
          <div className='btn jump'></div>
          <div className='btn speedup'></div>
        </div>
        <div className='help-wrapper'>
          <p className='help'>KEYBOARD USING GUIDE</p>
          <p className='help'>
            <span className='help-key elp-key-up-down'></span>
            &#58; SPEED UP&#47;DOWN
          </p>
          <p className='help'>
            <span className='help-key help-key-left-right'></span>
            &#58; CHANGE CHARACTER
          </p>
          <p className='help'>
            <span className='help-key help-key-spacebar'></span>
            &#58; JUMP
          </p>
        </div>
      </div>
    );
  }
}

export default MarioKart;
