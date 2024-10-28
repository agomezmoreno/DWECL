class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    
eat(someFood) {
    if (this.stomach.length < 10) {
        this.stomach.push(someFood);
    }
}

poop() {
    this.stomach = [];
}

toString() {
    return this.name + this.age;
}

}

let a = new Person("Alvaro", 21);
a.eat("Comida1");
a.eat("Comida2");
a.poop();


console.log(a);