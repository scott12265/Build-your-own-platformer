class Enemy{
  constructor(x, y, x2, y2){
    this.ex = x
    this.ey = y
    
    this.x = x
    this.y = y
    this.x2 = x2
    this.y2 = y2
  }
  show(){
    line(this.x, this.y, this.x2, this.y2)
    rect(this.ex, this.ey, 20, 20)
  }
}