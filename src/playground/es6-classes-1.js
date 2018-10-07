class Person {
    constructor(name, age = 0){
        this.name = name || 'Anonymous'
        this.age = age;
    }
    getGreeting(){
        //return 'Hey' + ' '+  this.name + ' ' + 'says Hi';
        return `Hi, I am ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }

}

const me  = new Student('Andrew Mead', 1, 'Computer Science');
console.log(me);



/* Challenge - Add age and name to constructor
                getDescription - return a string with age 
                Andrew Mead is 26 year(s) old */ 