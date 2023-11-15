// app.js
document.addEventListener('DOMContentLoaded', function() {
    createPetals();
});

function createPetals() {
    const numPetals = 50;

    for (let i = 0; i < numPetals; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.background = getRandomColor();
        petal.style.animationDuration = `${Math.random() * 2 + 1}s`;
        document.body.appendChild(petal);
    }
}

function getRandomColor() {
    const colors = ['#ff6666', '#ffcc66', '#66ff66', '#6666ff', '#cc66ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}
