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

class Instructor extends Lambdasiana {
    constructor({ name, age, location, specialty, favLanguage, catchPhrase }) {
        super(name, age, location); // Llama al constructor de Lambdasiana
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subject) {
        return "Today we are learning about " + subject + ".";
    }

    grade(student, subject) {
        return student.name + " receives a perfect score on " + subject + ".";
    }
}

// Ejemplo de uso:
const instructor = new Instructor({name: "Alvaro", age: 21, location: "Granada", specialty: "Java", favLanguage: "JavaScript", catchPhrase: "Don't forget the homies."});

console.log(instructor.speak()); // Salida: Hello, my name is Carlos, I am from Barcelona.
console.log(instructor.demo("JavaScript")); // Salida: Today we are learning about JavaScript.
console.log(instructor.grade({ name: "Alvaro" }, "React")); // Salida: Alvaro receives a perfect score on React.
