class Coin{
  constructor(x, y){
    this.x = x
    this.y = y
    this.s = true
  }
  show(){
    imageMode(CENTER)
    push()
    translate(-x, 0)
    if(this.s){
      image(coin, this.x, this.y, 33, 20)
    }
    if(Math.abs(this.x - width/2 + x) < 20 && Math.abs(this.y - y) < 40){
      this.s = false
      score += 1
    }
    pop()
  }
}