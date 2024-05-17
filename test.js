var PersonImpl = /** @class */ (function () {
    function PersonImpl(name, age) {
        this.name = name;
        this.age = age;
    }
    PersonImpl.prototype.greet = function (phrase) {
        console.log("".concat(phrase, " ").concat(this.name, " with age ").concat(this.age));
    };
    return PersonImpl;
}());
var person = new PersonImpl('Max', 30);
person.greet('Hi there - I am');
