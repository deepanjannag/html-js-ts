// Add JS here
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2588861868.
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let p1= new Person("John", 25);
p1.showDetails();