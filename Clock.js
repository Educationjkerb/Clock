function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES) //change mode to degrees
  font = loadFont('Fredoka-VariableFont_wdth,wght.ttf')
  textFont(font)
}

function draw() {
  background(0);
  translate(width / 2, height / 2)
  rotate(-90)
  var hr = hour()
  var mn = minute()
  var sc = second()
  noFill()
  strokeWeight(10)
  stroke(184, 255, 249)
  var secondAngle = map(sc, 0, 60, 0, 360)
  arc(0 ,0, 600, 600, 0, secondAngle)
  
  stroke(133, 244, 255)
  var minuteAngle = map(mn, 0, 60, 0, 360)
  arc(0 ,0, 550, 550, 0, minuteAngle)
  
  stroke(66, 194, 255)
  var hourAngle = map(hr % 12, 0, 12, 0, 360)
  arc(0 ,0, 500, 500, 0, hourAngle)
  //second line and text
  
  push()
  stroke(133, 244, 255)
  rotate(secondAngle)
  
  push()
  text(25)
  fill(184, 255, 249)
  noStroke()
  textSize(20)
  text(sc + 's' , 320, 0)
  pop()
  
  stroke(184, 255, 249)
  line(0, 0, 300, 0)
  pop()

  push()
  rotate(90)
  textSize(90)
  fill(255)
  noStroke()
  txtWidth = textWidth(hr + ': '+ mn + ': ' + sc)
  x = txtWidth / 2
  text(hr + ': '+ mn + ': ' + sc, -x, 90)
  pop()
  
}
