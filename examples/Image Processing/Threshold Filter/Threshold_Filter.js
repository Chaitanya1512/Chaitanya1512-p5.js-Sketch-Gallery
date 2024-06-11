let img;

function preload() {
  img = loadImage(
    "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=600"
  ); 
}
function setup() {
  createCanvas(500, 600);
  imageMode(CENTER);
  img.loadPixels();
}

function draw() {
  background(255);
  image(img, width / 2, height / 2);

  let thresholdValue = (mouseX / width) * 255; 
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    let r = pixels[i];
    let g = pixels[i + 1];
    let b = pixels[i + 2];
    let brightness = (r + g + b) / 3;
    if (brightness > thresholdValue) {
      pixels[i] = pixels[i + 1] = pixels[i + 2] = 255; 
    } else {
      pixels[i] = pixels[i + 1] = pixels[i + 2] = 0; 
    }
  }
  updatePixels();
}
