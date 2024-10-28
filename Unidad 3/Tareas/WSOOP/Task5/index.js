class Lambdasiana {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    speak() {
        return "Hello, my name is " + this.name + ", I am from " + this.location + ".";
    }
}

class Student extends Lambdasiana {
    constructor({ name, age, location, previousBackground, className, favSubjects }) {
        super(name, age, location); 
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }

    listSubjects() {
        return "Loving " + this.favSubjects.join(", ") + "!";
    }

    PRAssignment(subject) {
        return this.name + " has submitted a PR for " + subject + ".";
    }

    sprintChallenge(subject) {
        return this.name + " has begun sprint challenge on " + subject + ".";
    }
}

// Ejemplo de uso:
const student = new Student({
    name: "Alvaro",
    age: 21,
    location: "Granada",
    previousBackground: "Desarrollador web",
    className: "2DAW",
    favSubjects: ["HTML", "CSS", "JavaScript"]
});

console.log(student.speak()); // Salida: Hello, my name is Alvaro, I am from Granada.
console.log(student.listSubjects()); // Salida: Loving HTML, CSS, JavaScript!
console.log(student.PRAssignment("JavaScript")); // Salida: Alvaro has submitted a PR for JavaScript.
console.log(student.sprintChallenge("CSS")); // Salida: Alvaro has begun sprint challenge on CSS.
