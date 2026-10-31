class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static checkEligibility(age) {

        if (age >= 18) {
            return "Eligible";
        }
        else {
            return "Not Eligible";
        }
    }
}

console.log(Student.checkEligibility(20));
console.log(Student.checkEligibility(15));