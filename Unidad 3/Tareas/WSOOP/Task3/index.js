class Lambdasiana {
    constructor (name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    speak() {
        return "Hello mi name is ", this.name, " I am from " + this.location;
    }


}

a = new Lambdasiana("alvaro", 21, "granada");
console.log(a.speak());
