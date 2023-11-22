let particles;
const nParticles = 20;

function setup() {
  createCanvas(600, 600);
  frameRate(20);

  particles = []
  for (let i = 0; i < nParticles; i++) {
    particles.push(new Particle(width / 2, height / 2, 2000))
  }
}

function draw() {
  background(31, 34, 50);

  particles.forEach((particle) => {
    particle.update();
    particle.show();
  })
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5);
  }
}