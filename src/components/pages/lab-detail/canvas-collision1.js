const canvasCollision1Script = () => {
    // Initial Setup
    const canvasCollision1 = document.getElementById('canvasCollision1');
    const ctxCollision1 = canvasCollision1.getContext('2d');

    // var numberOfBalls = 1;

    canvasCollision1.width = window.innerWidth;
    canvasCollision1.height = window.innerHeight;

    // Variables 
    let mouse = {
        x: 10,
        y: 10
    };

    // const colors = [
    //     '#2185C5',
    //     '#7ECEFD',
    //     '#FFF6E5',
    //     '#FF7F66'
    // ];

    // Event Listener
    window.addEventListener("mousemove", function(event) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    window.addEventListener("resize", function() {
        canvasCollision1.width = window.innerWidth;
        canvasCollision1.height = window.innerHeight;
        
        init();
    });

    // Utility Functions
    // function randomIntFromRange(min, max) {
    //     return Math.floor(Math.random() * ( max - min + 1 ) + min );
    // }

    // function randomColor(colors) {
    //     return colors[Math.floor(Math.random() * colors.length)];
    // }

    function getDistance(x1, y1, x2, y2) {
        let xDistance = x2 - x1;
        let yDistance = y2 - y1;
        
        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }

    // Objects
    function Circle(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        
        this.update = function() {
            
            this.draw();
        }
        
        this.draw = function() {
            ctxCollision1.beginPath();
            ctxCollision1.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctxCollision1.fillStyle = this.color;
            ctxCollision1.fill();
            ctxCollision1.closePath();
        }
    }

    // Implementation
    let circle1;
    let circle2;
    function init() {
        circle1 = new Circle(canvasCollision1.width/2, canvasCollision1.height/2, 100, '#FF7F66');
        circle2 = new Circle(10, 10, 30, '#2185C5');
    }

    let canvasFrames; 
    function animate() {
        canvasFrames = requestAnimationFrame(animate);
        ctxCollision1.clearRect(0, 0, canvasCollision1.width, canvasCollision1.height);
        circle1.update();
        circle2.x = mouse.x;
        circle2.y = mouse.y;
        circle2.update();
        
        if( getDistance(circle1.x, circle1.y, circle2.x, circle2.y) < circle1.radius + circle2.radius ) {
            circle1.color = '#2185C5';
        } else {
            circle1.color = '#FF7F66';
        }
        
        if ( window.location.pathname === "/" ) {
            cancelAnimationFrame(canvasFrames);
        }
    } 


    init();
    animate();
}

export default canvasCollision1Script;