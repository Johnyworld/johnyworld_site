const cellsScript = () => {
    const canvasCells = document.getElementById('canvasCells');
    const ctxCells = canvasCells.getContext('2d');

    canvasCells.width = window.innerWidth;
    canvasCells.height = window.innerHeight;

    let mouse = {
        x: undefined,
        y: undefined
    }

    let speed = 2;
    let maxRadius = 55;

    let colorArray = [
        '#324aaf',
        '#2673cc',
        '#02a9db',
        '#34b799',
        '#71d484'
    ];

    window.addEventListener('mousemove', function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    window.addEventListener('resize', function () {
        canvasCells.width = window.innerWidth;
        canvasCells.height = window.innerHeight;

        init();
    });

    class Circle {
        constructor(x, y, dx, dy, r) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.r = r;
            this.rr = r;
            this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
        }

        draw() {
            ctxCells.beginPath();
            ctxCells.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            //        c.strokeStyle = 'rgba(30, 230, 230, 1)';
            //        c.stroke();
            ctxCells.fill();
            ctxCells.fillStyle = this.color;
        }

        update() {
            // 창 밖으로 못나가게 하기
            if (this.x > window.innerWidth - this.r || this.x < 0 + this.r) {
                this.dx = -this.dx;
            }
            if (this.y > window.innerHeight - this.r || this.y < 0 + this.r) {
                this.dy = -this.dy;
            }

            // 다음장면 좌표 입력
            this.x += this.dx;
            this.y += this.dy;

            // 인터렉티브
            if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50 && this.r < maxRadius) {
                this.r += 1;
            } else if (this.r > this.rr) {
                this.r -= 1;
            }


            // 그리기
            this.draw();
        }
    }

    // 1. 배열이 만들어짐
    let circleArray = [];

    // 2. 100개의 랜덤값을 배열에 넣어줌.
    function init() {
        circleArray = [];
        for (let i = 0; i < 800; i++) {
            let r = 5 + 10 * Math.random();
            let x = Math.random() * (window.innerWidth - r * 2) + r;
            let y = Math.random() * (window.innerHeight - r * 2) + r;
            let dx = (Math.random() - 0.5) * speed;
            let dy = (Math.random() - 0.5) * speed;
            circleArray.push(new Circle(x, y, dx, dy, r));
        }
    }

    // 3. 배열에 넣어준 랜덤값으로, 그리기 실행
    function animate() {
        requestAnimationFrame(animate);
        ctxCells.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for (let i = 0; i < circleArray.length; i++) {
            circleArray[i].update();
        }

    }
    animate();
    init();
}

export default cellsScript;