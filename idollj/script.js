const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const button = document.getElementById('myButton');

canvas.width = 300;
canvas.height = 200;

function drawCircle(color) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.beginPath();
    ctx.arc(150, 100, 50, 0, Math.PI * 2, false); // Circle
    ctx.fillStyle = color; // Set color based on input
    ctx.fill();
    ctx.closePath();
}

drawCircle('#FF5733'); // Red color

button.addEventListener('click', function() {
    canvas.style.borderColor = '#00BCD4';
    canvas.style.borderWidth = '4px';
    canvas.style.backgroundColor = '#E0F7FA';

    drawCircle('#4CAF50'); // Green color for the circle

    button.classList.remove('red-button');
    button.classList.add('green-button');
    
    alert('Button clicked!');
});