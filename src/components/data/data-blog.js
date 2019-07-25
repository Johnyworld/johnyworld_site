const dataBlog = [
    {
        title: "조건적 마크업",
        category: "Today I Learned",
        date: "2019. 6. 14. Fri.",
        hash: [ "React" ],
        desc: 
        `<p class="blog-inner-paragraph">HTML태그를 조건적으로 짜고싶다면, 아래와 같이 <span class="blog-code">? :</span> 문을 이용할 수 있다. <span class="blog-code">if</span>는 jsx에서 사용이 안되는 것 같았다.</p>
        <div class="blog-inner-paragraph blog-code">
            { item.url ? <br>
                <span class="tab"></span>&#60;a href={item.url} target="blank" className="btn-more"&#62;<br>
                <span class="tab"></span><span class="tab"></span>&#60;div className="bg"&#62;&#60;/div&#62;<br>
                <span class="tab"></span><span class="tab"></span>&#60;p className="txt"&#62;새창보기&#60;/p&#62;<br>
                <span class="tab"></span>&#60;/a&#62;<br>
                <span class="tab"></span>:<br>
                <span class="tab"></span>&#60;Link to={/lab/\${item.slug}} className="btn-more"&#62;<br>
                <span class="tab"></span><span class="tab"></span>&#60;div className="bg"&#62;&#60;/div&#62;<br>
                <span class="tab"></span><span class="tab"></span>&#60;p className="txt"&#62;보러가기&#60;/p&#62;<br>
                <span class="tab"></span>&#60;/Link&#62;<br>
            }
        </div>`
    },
    {
        title: "조건적 클래스네임",
        category: "Today I Learned",
        date: "2019. 6. 14. Fri.",
        hash: [ "React" ],
        desc: 
        `<p class="blog-inner-paragraph">HTML태그에 조건적으로 클래스네임을 주고싶다면, 아래와 같이 <span class="blog-code">? :</span> 문을 이용할 수 있다. <span class="blog-code">if</span>는 jsx에서 사용이 안되는 것 같았다.</p>
        <div class="blog-inner-paragraph blog-code">
            &#60;div className={"item" + (isSelected ? ' selected':'') }&#62; <br>
            &#60;div className={"item" + (key === 0 ? ' selected':'') }&#62;
        </div>`
    },
    {
        title: "이미지파일 불러오기",
        category: "Today I Learned",
        date: "2019. 6. 15. Sat.",
        hash: [ "React" ],
        desc: 
        `<p class="blog-inner-paragraph">리액트 내에서 이미지 (또는 CSS파일) 등을 불러올 때, <span class="blog-code">import</span>로 불러와야 한다.</p>
        <div class="blog-inner-paragraph blog-code">
            import ImgUrl from '../../images/image.png';
        </div>`
    },
    {
        title: "this.props.history가 undefined일 때.",
        category: "Today I Learned",
        date: "2019. 6. 16. Sun.",
        hash: [ "React" ],
        desc: 
        `<p class="blog-inner-paragraph"><span class="blog-code">this.props.history</span>는 <span class="blog-code">&#60;Route&#62;</span>안에 있어야 불러와진다. 일반적인 컴포넌트는 <span class="blog-code">&#60;Header history="this.props.history" /&#62;</span>이렇게 사용하면 Header 컴포넌트 안에서 <span class="blog-code">this.props.history</span>를 사용할 수 있게 된다.</p>`
    },
    {
        title: "Link와 History에 관하여",
        category: "Today I Learned",
        date: "2019. 6. 18. Tue.",
        hash: [ "React" ],
        desc: 
        `<p class="blog-inner-paragraph">어제 작성했던 work페이지의 Link태그에서 to 를 빼고 onClick 이벤트로 로딩화면을 구현했었는데, 잘 작동되는가 싶더니, 뒤로가기를 눌렀을 때 /work 페이지가 두번 history내역에 남아있는 것이었다.</p>
        <p class="blog-inner-paragraph">즉, detail페이지에서 뒤로가면 work페이지로. 다시한번 뒤로가면 Home으로 가야하는데 그대로 work페이지에 머물러 있고, 한번 더 뒤로가기를 해야 Home으로 가지는 것이었다. 문제를 찾다가 Link 태그에 문제가 있다는 것을 발견했다.</p>
        <p class="blog-inner-paragraph">아마도 to가 없이 생성된 Link는 onClick으로 페이지 전환 되기 전에 자기 자신인 work페이지를 history에 한번 더 등록해서 history상 work페이지가 두번 push된 것으로 보여진다. 그래서 Link태그를 Button으로 바꿔서 해보니까 잘 된다.</p>`,
    },
    {
        title: "Wheel 이벤트 전파 막기!",
        category: "Scripts",
        date: "2019. 6. 18. Tue.",
        hash: [ "Javascript" ],
        desc: 
        `<p class="blog-inner-paragraph">예전부터 window객체의 wheel 이벤트에 대해 <span class="blog-code">preventDefault()</span>가 적용되지 않는 문제를 겪었다. 오늘 답을 찾았다. 함수 다음 인자로 <span class="blog-code">{passive: false}</span> 를 주는 것이다. 아래 코드로 정리해보았다.</p>
        <div class="blog-inner-paragraph blog-code">
            window.addEventListener( 'wheel', function(event) {<br />
            <span class="tab"></span>event.preventDefault();<br />
            }, {passive: false});
        </div>`,
    },
    {
        title: "React 에 Instagram 연동하기",
        category: "Today I Learned",
        date: "2019. 6. 29. Sat.",
        hash: [ "Javascript", "React" ],
        desc: `<strong>Axios</strong>를 이용하여 리액트에 <strong>인스타그램</strong>을 연동했다. 음... 일단은 잘 된다. Gooood! 근데 <strong>Dotenv</strong>로 API key를 숨겨야 할 것 같다. 조만간 해야지.`,
    },
    {
        title: "Environment Variables for React",
        category: "Today I Learned",
        date: "2019. 7. 3. Wed.",
        hash: [ "Javascript", "React", "Dotenv" ],
        desc: `<p class="blog-inner-paragraph">인스타그램을 연동하는 과정에서 Dotenv를 사용하기 위해 설치하고 NodeJS를 공부할 때 처럼 똑같이 시도했다. 어? 근데 왜 안되지... Stack Overflow와 Create React App 문서를 찾아다니며 방법을 알아냈다. 변수 이름 앞에 <span class="blog-code">REACT_APP_</span>이라는 프리픽스를 붙여야 한다.</p>
        <p class="blog-inner-paragraph">그리고 기본적으로 <strong>Create-React-App</strong>을 사용했다면, 굳이 Dotenv를 설치하지 않아도 됐다. 어쨌든 그렇게 알아냈고, 3-4시간동안 삽질을 해봤는데 잘 되지 않았다.</p>
        <p class="blog-inner-paragraph">그렇게 포기하고 다음 날이 됐다. 퇴근 후. 친구가 일하는 Wework에 와서 친구 옆에서 작업을 하기 위해 맥북을 켰고, 어제의 문제를 해결하기 위해 또 문서들을 뒤지기 시작했다. 그러다가 뭔가 시도해보려고 VSC를 켜고 다시 시도.</p>
        <p class="blog-inner-paragraph"><strong>"어? 되네?"</strong> 근데 웃긴건, 어제 했던 시도와 같은 방법으로 시도한 것이었다. 어젠 그렇게 안되다가 같은 방법으로 오늘은 된다. 어제와 달라진 것은 VSC를 껐다 켰다는 것. 어쨌든 문서에서 설명한 대로 했고, 잘 실행 된다. 내 인스타그램 API Key는 이제 비밀스럽다.</p>
        `,
    },
    {
        title: "숫자 앞에 0 붙이기",
        category: "Today I Learned",
        date: "2019. 7. 19. Fri.",
        hash: [ "Javascript" ],
        desc: `<p class="blog-inner-paragraph"><span class="blog-code">n</span>은 숫자. <span class="blog-code">width</span>는 자리수.</p>
        <div class="blog-inner-paragraph blog-code">
            const pad = (n, width) => {<br />
                <span class="tab"></span>n = n + '';<br />
                <span class="tab"></span>return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;<br />
            }
        </div>
        `,
    },
    {
        title: "IOS Form CSS",
        category: "Today I Learned",
        date: "2019. 7. 19. Fri.",
        hash: [ "CSS" ],
        desc: `<p class="blog-inner-paragraph">Room311 웹앱을 개발하는 과정에서 Submit버튼에 대한 CSS가 자꾸 적용이 되지 않아서 답답했었는데 답을 찾았다. CSS RESET 단계에 아래 코드를 추가해주면 된다.</p>
        <div class="blog-inner-paragraph blog-code">
            input[type=submit] {-webkit-appearance:none;}
        </div>
        `,
    },
    {
        title: "Element.animate()",
        category: "Today I Learned",
        date: "2019. 7. 21. Sun.",
        hash: [ "Javascript" ],
        desc: `<p class="blog-inner-paragraph">포트폴리오를 진행하면서 ES6 문법중 <span class="blog-code">Element.animate()</span> 문법을 사용했었는데, 크로스브라우징 점검 과정에서 <strong>Safari, Chrome for iOS, ie</strong> 등 많은 브라우저에서 지원되지 않는 다는 것을 발견하고 모두 다른 방법으로 수정하였다. 쓰면 안되는 문법이었다 ㅠㅠ</p>`,
    },
    {
        title: "더블클릭 확대 방지",
        category: "Today I Learned",
        date: "2019. 7. 23. Tue.",
        hash: [ "Javascript" ],
        desc: `<p class="blog-inner-paragraph">버튼을 많이 누르게 되는 앱에는 꼭 필요한 기능이다.</p>
        <div class="blog-inner-paragraph blog-code">
            /* for HTML */<br />
            &#60;meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/&#62;
        </div>
        <div class="blog-inner-paragraph blog-code">
            // for javascript<br />
            var lastTouchEnd = 0;<br />
            document.documentElement.addEventListener('touchend', function (event) {<br />
                <span class="tab"></span>var now = (new Date()).getTime();<br />
                <span class="tab"></span>if (now - lastTouchEnd <= 300) {<br />
                    <span class="tab"></span><span class="tab"></span>event.preventDefault();<br />
                <span class="tab"></span>}<br />
                <span class="tab"></span>lastTouchEnd = now;<br />
            }, false);
        </div>
        `,
    }
]
const dataBlogReverse = dataBlog.reverse();
export default dataBlogReverse;