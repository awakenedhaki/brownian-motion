/**
 * Represents a particle that moves randomly on the canvas while leaving a trail.
 * @class
 */
class Particle {
    /**
   * Creates a new Particle object.
   * @constructor
   * @param {number} x - The x-coordinate of the initial position.
   * @param {number} y - The y-coordinate of the initial position.
   * @param {number} maxPathLength - The maximum length of the particle's path.
   */
  constructor(x, y, maxPathLength) {
    this.maxPathLength = maxPathLength;
    this.particle = createVector(x, y);
    this.path = [];
  }

  /**
   * Updates the position of the particle and its path.
   */
  update() {
    // Update path based on maximum length
    if (this.path.length >= this.maxPathLength) {
      this.path.pop();
      this.path.unshift(this.particle.copy());
    } else {
      this.path.unshift(this.particle.copy());
    }

    // Move the particle randomly
    this.particle.x += randomGaussian(0, 1) * 2;
    this.particle.y += randomGaussian(0, 1) * 2;
    
    // Constrain particle's position within canvas boundaries
    this.particle.x = constrain(this.particle.x, 0, width);
    this.particle.y = constrain(this.particle.y, 0, height);
  }

  /**
   * Renders the particle and its trail on the canvas.
   */
  show() {
    // Draw the particle
    stroke(0);
    fill(201, 237, 220);
    ellipse(this.particle.x, this.particle.y, 7, 7);

    // Draw the path
    for (let i = 1; i < this.path.length; i++) {
      const previous = this.path[i - 1];
      const current = this.path[i];

      const alpha = map(i, this.maxPathLength, 0, 0, 75);

      smooth();
      stroke(213, 221, 188, alpha);
      line(previous.x, previous.y, current.x, current.y);
    }
  }
}