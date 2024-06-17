function setup() {
  createCanvas(500, 500);
  pixelDensity(1);
  loadPixels();

  let cx = -0.7;
  let cy = 0.27015;

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let a = map(x, 0, width, -2, 2);
      let b = map(y, 0, height, -2, 2);

      let n = 0;
      let maxIterations = 100;
      while (n < maxIterations) {
        let aa = a * a - b * b;
        let bb = 2 * a * b;
        a = aa + cx;
        b = bb + cy;
        if (abs(a + b) > 16) {
          break;
        }
        n++;
      }

      let bright = map(n, 0, maxIterations, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);

      let pix = (x + y * width) * 4;
      pixels[pix + 0] = 128; // R
      pixels[pix + 1] = 0; // G
      pixels[pix + 2] = bright; // B
      pixels[pix + 3] = 255; // Alpha
    }
  }

  updatePixels();
}
