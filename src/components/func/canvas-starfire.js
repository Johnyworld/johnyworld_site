const CanvasStarfire = () => {
    const canvas = document.getElementById('canvas-starfire');
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    
    canvas.width = window.innerWidth;
    canvas.height = 500;

    let windowFocus = true;
    window.onblur = function() { windowFocus = false; }
    window.onfocus = function() { windowFocus = true; }

    function StarFire (x, y, radius, speed) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = speed;
        this.line = 0;
        this.lineLength = 50;

        this.draw = () => {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x-this.line, this.y+this.line);
            ctx.strokeStyle = 'rgba(255, 255, 255, .4)';
            ctx.stroke();
            ctx.closePath();
        }

        this.update = () => {
            this.line += this.speed;
            if ( this.line > this.lineLength ) {
                this.line = this.lineLength;
                this.x -= this.speed;
                this.y += this.speed;
            }
            this.draw();
        }
    }

    function pushStarFire() {
        if ( windowFocus ) {
            let randomX = 200 + Math.floor(Math.random() * (canvas.width - 200));
            let randomY = Math.floor(Math.random() * (canvas.height - 200));
            starFires.push( new StarFire( randomX, randomY, 5, 11 ) );  
        }
    }

    let starFires;
    function init() {
        starFires = [];
        for ( let i=0; i < 50; i++ ) {
            let delay = 1500 + Math.floor(Math.random() * 5000);
            setTimeout( pushStarFire, i*delay );
        }
    }

    let canvasFrames;
    function animate() {
        canvasFrames = requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        starFires.forEach(starFire => {
            starFire.update();
        })

        if ( window.location.pathname !== "/lab/moon" ) {
            cancelAnimationFrame(canvasFrames);
        }
    }
    
    init();
    animate();
}

export default CanvasStarfire;