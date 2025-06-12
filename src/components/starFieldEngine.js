export function init(canvas, context) {
  const STAR_COUNT = 100;
  const stars = [];

  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2 + 0.5,
      speed: Math.random() * 0.5 + 0.2
    });
  }

  function drawStar(star) {
    context.beginPath();
    context.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    context.fillStyle = 'white';
    context.shadowBlur = 10;
    context.shadowColor = 'white';
    context.fill();
    context.closePath();
  }

  function updateStars() {
    for (const star of stars) {
      star.y -= star.speed;
      if (star.y < -star.radius) {
        star.y = canvas.height + star.radius;
        star.x = Math.random() * canvas.width;
      }
    }
  }

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    updateStars();
    for (const star of stars) {
      drawStar(star);
    }
    requestAnimationFrame(render);
  }

  render();
}
