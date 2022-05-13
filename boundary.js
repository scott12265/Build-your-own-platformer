class Boundary{
  constructor(x, y, w, h){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }
  show(){
    push()
    translate(-x, 0)
    rect(this.x, this.y, this.w + 4, this.h + 4)
    
    if(this.y > y && Math.abs((width/2) + x - this.x) < (this.w/2) + mass/2){
      floor = this.y - (this.h/2) - 30
    } 
    if(y - mass/2 - 15 < this.y + this.h/2 && y + mass/2 > this.y - this.h/2){
      if((width/2) + x > this.x + (this.w/2) + mass/2){
        if(Math.abs((width/2) + x - this.x) < (this.w/2) + 16){
          x += 1
          left = false
          speed = 0
          
        }
      }
      if((width/2) + x < this.x + (this.w/2) + mass/2){
        if(Math.abs((width/2) + x - this.x) < (this.w/2) + 16){
          x -= 1
          right = false
          speed = 0
        }
      }
    }
    pop()
  }
} 