var Animal = function(color, name, type){
  this.color = color;
  this.name = name;
  this.type = type;
}

var zebra = new Animal('white', 'Zorro', 'Zebra');

var sayAge = function(){
  console.log(this.age);
}

var me = {
  age: 25
};

sayAge();
// window.age = 35;
// sayAge();
