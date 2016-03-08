Horse.prototype = {
 constructor: Horse,
 total: 0
};

var total = {
 total: 0
};
function Horse(name){
  this.name = name;
  this.mileage = 0;
  this.tired = 0;

  this.run = function(distance){
    this.mileage +=distance;
    this.isTired(distance);
  };

 this.isTired = function(distance,relax) {
  for (var i = 0; i < distance; i++) {
      this.tired++;
    if(this.tired === 10){
     setTimeout("alert('лошадь отдыхает')", 1000);
     this.tired = 0;
    };
    continue;
  };

 };
  this.relax = function(dist){
      this.isTired(distance);
  }

};




var h1 = new Horse('Альберт');
h1.run(20);
var h2 = new Horse('Анатолий');
h2.run(40);