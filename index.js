// Practice Assignment

var mart1 = new Fruit("Mango", 200, [8, 9]);
var mart2 = new Fruit("Orange", 300, [8, 9]);
var mart3 = new Fruit("Strawberry", 500, [8, 9]);

function Fruit(name, price, discountMonths){
    this.name = name;
    this.price = price;
    this.discountMonths = discountMonths;
    this.foodMart = function(fruitDiscount){
        var bestPrice = this.price;
        var persentage = 30;
        var currentDate = new Date();
        var month = currentDate.getMonth();

        for(var i = 0; i < this.discountMonths.length; i++){
            if(this.discountMonths[i] === month) {
                bestPrice = this.price * (1 - persentage / 100) ;
                break;
            }
        }


        return bestPrice;
    }
}


console.log("Sep mangoes price discount Rs:", mart1.foodMart());
console.log("Sep Oranges price discount Rs:", mart2.foodMart());
console.log("Sep Strawberry price discount Rs:", mart3.foodMart());



// Practice example 1
var person1 = new Person("Shahnoor", 10);
var person2 = new Person("Kamran", 38);

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log("Hellow, my name is " + this.name + " and I am " + this.age + " years old.");
    };

}
person1.greet();
person2.greet();



// Practice example 2
var car1 = new Car("red", "honda", 2024);
var car2 = new Car("black", "toyota", 2020);
var myCar = new Car("silver", "honda", 2018);


function Car(color, model, year) {
    this.color = color;
    this.model = model;
    this.year = year;

    this.start = function () {
        console.log(this.model + " is starting");
    }

    this.printDetails = function () {
        console.log('Car: ' + this.model + ', Car: ' + this.color + ', Car: ' + this.year)
    }
}

car1.start();
car1.printDetails();

car2.start();
car2.printDetails();

myCar.start();
myCar.printDetails();