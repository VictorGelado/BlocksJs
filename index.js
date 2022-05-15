const canvas = document.getElementById('canvas');
const contextCanvas = canvas.getContext('2d');

contextCanvas.fillStyle = 'rgb(0, 153, 255)';
contextCanvas.fillRect(0, 0, canvas.width, canvas.height);

class Block {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    contextCanvas.fillStyle = '#ffffff';
    contextCanvas.fillRect(x, y, width, height);
  }
}

canvas.addEventListener('click', (event) => {

  const rect = canvas.getBoundingClientRect();
  const x = (event.clientX - rect.left) * canvas.width / rect.width;
  const y = (event.clientY - rect.top) * canvas.height / rect.height;

  new Block(x, y, 40, 40);

});

window.addEventListener('keydown', (event) => {

  if (event.key === 'Backspace') {
    contextCanvas.clearRect(0, 0, canvas.width, canvas.height); 

    contextCanvas.fillStyle = 'rgb(0, 153, 255)';
    contextCanvas.fillRect(0, 0, canvas.width, canvas.height);
  }
});
