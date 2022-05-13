let up = false
let down = false
let right = false
let left = false
let x = 200
let y = 200
let speed = 3
let accel
let vel = 0
let mass = 20
let grounds = []
let bottom
let tempX1
let tempX2
let tempY1
let tempY2
let score = 0
let buttonState = 'ground'
let runsR = []
let runsL = []
let idleNoSword = []
let idleWithSword = []
let count = 0
let idleCount = 0
let coins = []
let coin

function preload(){
  for(i = 0; i < 6; i++){
    runsR.push(loadImage(`runRight/runR${i}.png`))
  }
  for(i = 0; i < 6; i++){
    runsL.push(loadImage(`runLeft/runL${i}.png`))
  }
  for(i = 0; i < 4; i++){
    idleNoSword.push(loadImage(`idleNoSword/idle${i}.png`))
  }
  coin = loadImage('coin.png')
}

function setup(){
  imageMode(CENTER)
  accel = 20 * 0.05
  rectMode(CENTER)
  createCanvas(600, 400)
  grounds.push(new Boundary(width/2, height + 200, 100000, 10))
}

function draw(){
  background(50)
  count += abs(speed/20)
  idleCount += 0.07
  
  if(count >= 6){
    count = 0
  }
  if(idleCount >= 3){
    idleCount = 0
  }
  for(i = 1; i < grounds.length; i++){
    if(grounds[i].y > grounds[i - 1].y){
      temp = grounds[i]
      grounds[i] = grounds[i - 1]
      grounds[i - 1] = temp
    } 
  }
  textAlign(CENTER)
  background('#6998d1')
  textSize(20)
  fill('black')
  text('Score:' + score, 40, 100)
  textSize(12)
  rectMode(CENTER)
  push()
  noStroke()
  fill('#114280')
  rect(width/2, 35, width, 70)
  strokeWeight(2)
  stroke('black')
  fill('#206fd6')
  if(mouseX < 67 && mouseX > 3 && mouseY > 3 && mouseY < 67 || buttonState === 'ground'){
    if(mouseIsPressed){
      buttonState = 'ground'
    }
    fill('#a6c2e3')
  }
  rect(35, 35, 62, 62)
  noStroke()
  fill('black')
  text('Basic \n Material', 35, 30)
  
  fill('#206fd6')
  if(mouseX < 140 && mouseX > 78 && mouseY > 3 && mouseY < 67 || buttonState === 'coin'){
    if(mouseIsPressed){
      buttonState = 'coin'
    }
    fill('#a6c2e3')
  }
  strokeWeight(2)
  stroke('black')
  rect(110, 35, 62, 62)
  fill('black')
  noStroke()
  text('Coin', 110, 35)
  // text('Total Coins Placed: ' + coins.length, 520, 20)
  
  fill('#206fd6')
  strokeWeight(2)
  stroke('black')
  if(mouseX < 216 && mouseX > 154 && mouseY > 3 && mouseY < 67 || buttonState === 'enemy'){
    if(mouseIsPressed){
      buttonState = 'enemy'
    }
    fill('#a6c2e3')
  }
  rect(185, 35, 62, 62)
  noStroke()
  fill('black')
  text('Enemy', 185, 35)
  pop()
  
    if(mouseIsPressed && mouseY > 69 && buttonState === 'ground'){
    line(tempX1-x, tempY1, mouseX, tempY1)
    line(tempX1-x, tempY1, tempX1-x, mouseY)
    line(mouseX, tempY1, mouseX, mouseY)
    line(tempX1-x, mouseY, mouseX, mouseY)
  }

  for(i = 0;i < grounds.length; i++){
    grounds[i].show()
  }
  
  vel += accel;
  y += vel
  
  if (y > floor - mass/2) {
    vel *= 0.3;
    y = floor - mass/2
  }
  
  
    if(left && !right && speed > -4){
    speed -= 0.5
  }
  if(right && !left && speed < 4){
    speed += 0.5
  }
  if(!right && !left && speed >= 0){
    speed -= 0.1
  }
  if(!left && !left && speed <= 0){
    speed += 0.1
  }

  for(i = 0; i < coins.length; i++){
    coins[i].show()
  }

  
  x += Math.round(speed)
  if(Math.round(speed) > 0){
    image(runsR[Math.floor(count)], width/2, y, mass*4, mass*4)
  }
  if(Math.round(speed) < 0){
    image(runsL[Math.floor(count)], width/2, y, mass*4, mass*4)
  }
  if(Math.round(speed) === 0){
    image(idleNoSword[Math.floor(idleCount)], width/2, y, mass*4, mass*4)
  }
  
  
  if(keyIsDown(65)){
    left = true
  }else{
    left = false
  }
  if(keyIsDown(68)){
    right = true
  }else{
    right = false
  }
}

function keyPressed(){
  if(keyCode === 32){
    vel -= 15
  }
  if(keyCode === 13){
    y = 80
    vel = 0
  }
}

function mousePressed(){
  console.log(mouseX, mouseY)
}

function mousePressed(){
  console.log(mouseX, mouseY)
  if(mouseY > 69 && buttonState === 'ground'){
    tempX1 = mouseX + x
    tempY1 = mouseY
  }else if(mouseY > 69 && buttonState === 'coin'){
    coins.push(new Coin(mouseX + x, mouseY))
  }else if(mouseY > 69 && buttonState === 'enemy'){
    tempX1 = mouseX + x
    tempY1 = mouseY
  }
}

function mousePressed(){
  console.log(mouseX, mouseY)
  if(mouseY > 69 && buttonState === 'ground'){
    tempX1 = mouseX + x
    tempY1 = mouseY
  }else if(mouseY > 69 && buttonState === 'coin'){
    coins.push(new Coin(mouseX + x, mouseY))
  }else if(mouseY > 69 && buttonState === 'enemy'){
    tempX1 = mouseX + x
    tempY1 = mouseY
  }
}

function mouseReleased(){
  if(mouseY > 69 && buttonState === 'ground'){
    tempX2 = mouseX + x
    tempY2 = mouseY
    let xw = abs(tempX1 - tempX2)
    let yw = abs(tempY1 - tempY2)

    if(tempX1 < tempX2 && tempY1 < tempY2){
      console.log('bottom right')
      grounds.push(new Boundary(tempX1 + xw/2, tempY2 - yw/2, xw, yw))
    }
    if(tempX1 < tempX2 && tempY1 > tempY2){
      console.log('top right')
      grounds.push(new Boundary(tempX1 + xw/2, tempY2 + yw/2, xw, yw))
    }

    if(tempX1 > tempX2 && tempY1 > tempY2){
      grounds.push(new Boundary(tempX1 - xw/2, tempY2 + yw/2, -xw, yw))
    }
    if(tempX1 > tempX2 && tempY1 < tempY2){
      grounds.push(new Boundary(tempX1 - xw/2, tempY2 - yw/2, -xw, yw))
    }
  }
}