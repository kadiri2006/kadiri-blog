const Cat = function (name, sound) {
  this.name = name;
  this.sound = sound;

  this.makeSound = function () {
    console.log(this.name + " says: " + this.sound);
    console.log(this.count);
  };

  this.annoy = function () {
    // this.count = 0;
    //this.max = 100;
    // const self = this;
    this.count = 0;
    this.max = 100;
    let assaign = this;
    let myTimer = setInterval(function () {
      assaign.count++;
      assaign.makeSound();
      if (assaign.count === assaign.max) {
        clearInterval(myTimer);
      }
    }, 50);
  };
};

const kitty = new Cat("Fat Daddy", "Mrrooowww");
kitty.annoy();
