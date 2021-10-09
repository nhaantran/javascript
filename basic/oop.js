const { prototype } = require("events");

let person = {
    firstname : 'Tran',
    lastname : "Nhan",
    act : function(){
        console.log(`Hello my name is ${this.lastname} ${this.firstname}`);
    }
}

person.act();

function course(year, cost, place){
    this.year = year,
    this.cost = cost,
    this.place = place;
}
course.prototype.describe = function(){
    console.log(`This is a ${this.year} course take place in ${this.place} which cost is ${this.cost}`);
}
var printing = new course(2020,'2.000.000 VND', 'Tp Thu Duc');
printing.describe();


//class

class Course{
    constructor(year, cost, place){
    this.year = year,
    this.cost = cost,
    this.place = place;}
    describe(){
        console.log(`This is a ${this.year} course take place in ${this.place} which cost is ${this.cost}`);
    }
}
var printing = new Course(2021,'5.000.000 VND', 'Tp Ho Chi Minh');
printing.describe();