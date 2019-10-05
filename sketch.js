function setup() {
    createCanvas(800,400);
  }
  function draw() {
    background(255,255,255);  
    ellipse(56, 46, 55, 55);
    if (mouseIsPressed) {
        fill(0);
      } else {
        fill(255);
      }
      ellipse(mouseX, mouseY, 80, 80);
    textAlign(CENTER, CENTER);text('La Lune', 1, 37, width);
  let img = createImage(66, 66);
  img.loadPixels();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      img.set(i, j, color(50, 90, 103, (i % img.width) * 2));
    }
  }
  img.updatePixels();
  image(img, 17, 17);
  image(img, 34, 34);
  
    textAlign(CENTER, CENTER);text('a poem', 1, 55, width);
    textAlign(CENTER, CENTER);text('I am a child of the moon being raised by the sun', 1, 102, width);
    textAlign(CENTER, CENTER);text('in a world walked by stars and a sky drawn with flowers.', 1,115, width);
    textAlign(CENTER, CENTER);text('- Zara Ventris',1, 135, width);

  }