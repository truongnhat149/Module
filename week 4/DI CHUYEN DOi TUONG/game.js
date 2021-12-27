

function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
   
    this.getHeroElement = function(){
      return '<img width="'+ this.size + '"' +
        ' height="'+ this.size + '"' +
        ' src="' + this.image +'"' +
        ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }
  
    this.moveRight = function(){
      this.left += 20;
      console.log('ok: ' + this.left);
    }
    this.moveDown = function() {
      this.top += 20;
      console.log('ok: ' + this.top);
    }
    this.moveLeft = function(){
      this.left -= 20;
      console.log('ok: ' + this.left);
    }
    this.moveUp = function() {
      this.top -= 20;
      console.log('ok: ' + this.top);
    }
  }
  
  var hero = new Hero('luffy.png', 40, 50, 200);
  
  function start(){
    // switch true {
    //   case hero.left < window.innerWidth - hero.size :
    //     hero.moveRight();
    //     break;
    // }
    if(hero.left < window.innerWidth - hero.size){
      hero.moveRight();
    } 
    if (hero.left < window.innerHeight - hero.size) {
      hero.moveDown();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 10)
    // alert(`you want to come back`)
  }
  start();
   function comback() {
     
      if(hero.left >= window.innerWidth - hero.size)
      {
      hero.moveLeft();
    } 
    if (hero.top < window.innerHeight - hero.size) {
      hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 10)
   }
   comback();