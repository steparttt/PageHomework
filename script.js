document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('rotating-image');
    const audio = document.getElementById('audio');
    let currentRotation = 0;

    
    setInterval(() => {
        currentRotation += 1;
        image.style.transform = `rotate(${currentRotation}deg) scale(1)`;
    }, 16); 

    
    image.addEventListener('click', () => {
        audio.play();
    });
});

const box = document.getElementById("enlargeBox");

box.addEventListener("mouseover", function () {
  this.style.transform = "scale(1.1)";
  this.style.transition = 'transform 0.4s ease';
});

box.addEventListener("mouseout", function () {
  this.style.transform = "scale(1)";
  this.style.transition = 'transform 1s ease';
});