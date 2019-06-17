const canvasCollision2Script = () => {
    // 이니셜 셋업
    const canvasCollision2 = document.getElementById('canvasCollision2');
    const ctxCollision2 = canvasCollision2.getContext('2d');

    canvasCollision2.width = window.innerWidth;
    canvasCollision2.height = window.innerHeight;

    // Variables

    const mouse = {
        x: undefined,
        y: undefined
    }

    const mousePast = {
        x: undefined,
        y: undefined
    }

    const mouseVelocity = {
        x: mouse.x - mousePast.x,
        y: mouse.y - mousePast.y
    }

    // const colors = [
    //     '#2185C5',
    //     '#7ECEFD',
    //     '#FFF6E5',
    //     '#FF7F66'
    // ];

    const startVelocity = 1;
    const maxVelocity = 5;
    const howManyParticles = 200;
    const particlesRadius = 12;
    const mouseAreaRadius = 40;

    // Event Listeners 
    window.addEventListener('mousemove', event => {
        mousePast.x = mouse.x;
        mousePast.y = mouse.y;
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        mouseVelocity.x = mouse.x - mousePast.x;
        mouseVelocity.y = mouse.y - mousePast.y;
        if ( mouseVelocity.x > maxVelocity ) {
            mouseVelocity.x = 4;
        }
        if ( mouseVelocity.y > maxVelocity ) {
            mouseVelocity.y = 4;
        }
        if ( mouseVelocity.x < -maxVelocity ) {
            mouseVelocity.x = -4;
        }
        if ( mouseVelocity.y < -maxVelocity ) {
            mouseVelocity.y = -4;
        }
    });

    window.addEventListener('resize', () => {
        canvasCollision2.width = window.innerWidth;
        canvasCollision2.height = window.innerHeight;
    
        init();
    });

    // Utility Functions
    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // function randomColor(colors) {
    //     return colors[Math.floor(Math.random() * colors.length)];
    // }

    function distance(x1, y1, x2, y2) {
        const xDist = x2 - x1;
        const yDist = y2 - y1;
        
        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    }

    function rotate(velocity, angle) {
        const rotateVelocities = {
            x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
            y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
        };
        return rotateVelocities;
    }

    function resolveCollision(particle, otherParticle) {
        const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
        const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;
        
        const xDist = otherParticle.x - particle.x;
        const yDist = otherParticle.y - particle.y;
        
        // Prevent accidental overlap of particles
        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
            
            // Grab angle between the two colliding particles
            const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);
            
            // Store mass in var for better readabillity in collision equation
            const m1 = particle.mass;
            const m2 = otherParticle.mass;
            
            // Velocity before equation
            const u1 = rotate(particle.velocity, angle);
            const u2 = rotate(otherParticle.velocity, angle);
            
            // Velocity after 1d collision equation
            const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
            const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };
            
            // Final velocity after rotating axis back to original location 
            const vFinal1 = rotate(v1, -angle);
            const vFinal2 = rotate(v2, -angle);
            
            // Swap particle velocities for realistic bounce effect
            particle.velocity.x = vFinal1.x;
            particle.velocity.y = vFinal1.y;
            
            otherParticle.velocity.x = vFinal2.x;
            otherParticle.velocity.y = vFinal2.y;
        }
    }

    // Objects
    function Particle(x, y, radius, color) {
        this.redTimer = 0;
        this.x = x;
        this.y = y;
        this.velocity = {
            x: (Math.random() - 0.5) * startVelocity,
            y: (Math.random() - 0.5) * startVelocity
        }
        this.radius = radius;
        this.color = color;
        this.mass = 1;
        
        this.mouseUpdate = mouseArea => {
            this.draw();
            this.velocity.x = mouseVelocity.x;
            this.velocity.y = mouseVelocity.y;
        }
        
        this.update = particles => {
            this.draw();
            
            // 레드 타이머
            if ( this.redTimer > 0 ) {
                this.redTimer = this.redTimer - 1;
            } else if ( this.redTimer <= 0 && this.color === 'red') {
                this.color = color;
                this.redTimer = 0;
                this.radius = particlesRadius;
            }

            // 서로 충돌 판정
            for (let i = 0 ; i < particles.length ; i++) {
                if (this === particles[i]) continue;
                if (this.color === 'black' || particles[i].color === 'black') continue;
                if (distance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0) { 
                    resolveCollision(this, particles[i]); 
                    if (particles[i].color === 'red') {
                        this.color = 'black';
                        this.radius = 0;
                    }
                }
            }
            
            // 마우스와 충돌 판정
            if (distance(this.x, this.y, mouseArea.x, mouseArea.y) - (this.radius + mouseArea.radius) < 0) { 
                resolveCollision(this, mouseArea); 
                if (this.color !== 'black') {
                    this.color = 'red';
                    this.redTimer = 200;
                }
                if (distance(this.x, this.y, mouseArea.x, mouseArea.y) > 200) {
                    this.color = color;
                }
            }
            
            // 좌, 우 벽에 부딪힐 경우
            if (this.x - this.radius <= 0 || this.x + this.radius >= window.innerWidth) {
                this.velocity.x = -this.velocity.x;
            }
            
            // 상, 하 벽에 부딪힐 경우
            if (this.y - this.radius <= 0 || this.y + this.radius >= window.innerHeight) {
                this.velocity.y = -this.velocity.y;
            }
            
            this.x += this.velocity.x;
            this.y += this.velocity.y;
        };
        
        this.draw = () => {
            ctxCollision2.beginPath();
            ctxCollision2.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctxCollision2.strokeStyle = this.color;
            ctxCollision2.stroke();
            ctxCollision2.closePath();
        };
    }

    // Implementation
    let particles;
    let mouseArea;
    function init() {
        particles = [];
        mouseArea = new Particle(mouse.x, mouse.y, mouseAreaRadius, false);
        for (let i = 0; i < howManyParticles; i ++) {
            const radius = particlesRadius;
            let x = randomIntFromRange(radius, canvasCollision2.width - radius);
            let y = randomIntFromRange(radius, canvasCollision2.height - radius);
            const color = '#333';
            
            // 서로 겹치지 않게 해주는 코드 (겹치게 만들어지면 다시 그림)
            if (i !== 0) {
                for (let j = 0 ; j < particles.length ; j++) {
                    if (distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
                        x = randomIntFromRange(radius, canvasCollision2.width - radius);
                        y = randomIntFromRange(radius, canvasCollision2.height - radius);
                        j = -1;
                    }
                }
            }
            
            particles.push(new Particle(x, y, radius, color));
        }
    } 
    // let pastMouse;

    

    // Animation Loop
    let canvasFrames; 
    function animate() {
        canvasFrames = requestAnimationFrame(animate);

        mouseArea.x = mouse.x;
        mouseArea.y = mouse.y;
        ctxCollision2.clearRect(0, 0, canvasCollision2.width, canvasCollision2.height);
        particles.forEach(particle => {
            particle.update(particles);
        });
        mouseArea.mouseUpdate();
        
        if ( window.location.pathname === "/" ) {
            cancelAnimationFrame(canvasFrames);
        }
    }

    // window.addEventListener( '' ) = function() {
    //     cancelAnimationFrame(canvasFrames);
    // }

    init();
    animate();
}


export default canvasCollision2Script;