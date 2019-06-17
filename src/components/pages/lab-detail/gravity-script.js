const gravityScript = () => {
    const canvasGravity = document.getElementById('canvasGravity');
    const ctxGravity = canvasGravity.getContext('2d');

    let gravity = .2;
    let friction = .65;
    let howManyBalls = 100;

    canvasGravity.width = window.innerWidth;
    canvasGravity.height = window.innerHeight;

    let mouse = {
        x: window.innerHeight / 2,
        y: window.innerHeight / 2
    }

    let colors = [
        '#5C7FFF',
        '#7C60EB',
        '#C96BFF',
        '#EB71DD',
        '#FF8793'
    ]

    window.addEventListener("resize", function () {
        canvasGravity.width = window.innerWidth;
        canvasGravity.height = window.innerHeight;
        init();
    });

    window.addEventListener("mousemove", function (event) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    window.addEventListener("click", function () {
        init();
    });

    // Utility Functions 
    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    // Objects
    class Ball {
        constructor(x, y, dx, dy, radius, color) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.color = color;
        }

        update() {

            // if에 this.dy를 안붙일 경우
            // 현재 최대 dy가 5, canvas.height가 100이라고 가정.
            // y가 106 이 되었을 때 -dy 를 계산해도 
            // y가 101 이 되면서 if 조건이 다시 발동되어 dy 부호가 반전되며 결국 땅에 붙어버린다.

            // if에 this.dy를 붙일 경우
            // 현재 최대 dy가 5, canvas.height가 100이라고 가정.
            // y + dy 가 101 + 5 즉 106이 되었을 때 if 가 발동되고 dy가 반전되기 때문에
            // y + dy 는 101 + (-5) 즉 96으로 순식간에 바뀌기 때문에
            // if 조건이 다시 발동되지 않는다. 

            if (this.y + this.dy + this.radius > canvasGravity.height) {
                this.dy = -this.dy * friction;
            } else {
                this.dy += gravity;
            }

            if (this.x + this.radius > canvasGravity.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }

            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }

        draw() {
            ctxGravity.beginPath();
            ctxGravity.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctxGravity.fillStyle = this.color;
            ctxGravity.fill();
            ctxGravity.closePath();
        }

    }
    // let ball;
    let ballArray;
    function init() {
        ballArray = [];
        for (let i = 0; i < howManyBalls; i++) {
            let radius = randomIntFromRange(15, 40)
            let x = randomIntFromRange(0 + radius, canvasGravity.width - radius);
            let y = randomIntFromRange(0, canvasGravity.height - radius);
            let dx = randomIntFromRange(-2, 2);
            let dy = randomIntFromRange(-8, 0);
            let color = randomColor(colors);
            ballArray.push(new Ball(x, y, dx, dy, radius, color))
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctxGravity.clearRect(0, 0, canvasGravity.width, canvasGravity.height);
        for (let i = 0; i < ballArray.length; i++) {
            ballArray[i].update();
        }
    }

    init();
    animate();
}

export default gravityScript;