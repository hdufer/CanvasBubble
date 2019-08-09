canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

let mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', (ev) => {
    mouse.x = ev.x;
    mouse.y = ev.y;
    
})

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init()
})

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color;
    c.fill();
    }

    this.update = function() {
        this.x + radius >= innerWidth && this.dx || this.x - radius <= 0 && this.dx < 0  > 0 ? this.dx = -this.dx : this.dx;
    this.y + radius >= innerHeight && this.dy || this.y - radius <= 0 && this.dy < 0  > 0 ? this.dy = -this.dy : this.dy;
    this.x += this.dx;
    this.y += this.dy;

    //interactivity
    if (mouse.x - this.x < maxRadius && mouse.x - this.x > -maxRadius &&
        mouse.y - this.y < maxRadius && mouse.y - this.y > -maxRadius) {
        if (this.radius < maxRadius)
            this.radius += 1;
    } else if (this.radius > radius) {
        this.radius -= 1;
    }

    this.draw();
    }
    
}


let circleArray = [];

let colorArray = [
    '#fcba03',
    '#fcdb03',
    '#fc6f03',
    '#fc3d03',
    '#9dfc03'
]

for (let i = 0; i < 1000; i++)
{
    var radius = Math.random() * 3 + 1;
    var maxRadius = radius + Math.random() * 30 + 1;
    var x = Math.random() * innerHeight;
    var y = Math.random() * innerWidth;
    var dx = Math.random() - 0.5 * 1;
    var dy = Math.random() - 0.5 * 1;
    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function init()
{
    circleArray = [];
    for (let i = 0; i < 1000; i++)
    {
    var radius = Math.random() * 3 + 1;
    var maxRadius = radius + Math.random() * 30 + 1;
    var y = Math.random() * innerHeight;
    var x = Math.random() * innerWidth;
    var dx = Math.random() - 0.5 * 1;
    var dy = Math.random() - 0.5 * 1;
    circleArray.push(new Circle(x, y, dx, dy, radius));
    }

}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);
    for (let i = 0; i < circleArray.length; i++)
        circleArray[i].update();
}

animate();