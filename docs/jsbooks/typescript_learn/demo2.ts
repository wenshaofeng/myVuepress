class Person {
    constructor(public name: string) { }
}

interface PersonInfo {
    name: string,
    age: number
}

class Teacher extends Person {
    public age: number
    constructor(public val: PersonInfo) {
        super(val.name);
        this.age = val.age
    }

}

const teacher = new Teacher({ name: "dell lee", age: 25 });
console.log(teacher.name);
console.log(teacher.age);