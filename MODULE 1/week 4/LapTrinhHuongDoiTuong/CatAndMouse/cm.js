let Mouse = function(name,weight,speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.alive = true;
    this.cry = function() {
      return "chit chit";
    }
    this.death = function() {
      this.alive = false;
    }
  }
  let Cat = function(name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.cry = function() {
      return "meo meo";
    }
    this.catch = function(mouse) {
      if (this.speed > mouse.speed) {
        return true;
      }
    }
    this.eat = function(mouse) {
      mouse.death();
      this.weight += mouse.weight;
    }
  }

  let mouse = new Mouse("Tom", 50, 60);
  let cat = new Cat("Jerry", 20, 40);
  console.log(mouse.cry());
  console.log(cat.cry());
  if (cat.catch(mouse)) {
    console.log("The cat catched the mouse");
  }
  cat.eat(mouse);
  console.log("The cat have eaten the mouse! The cat's weight is " + cat.weight);