class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;   
        this.age = age;
    }
    getGreeting(){
        //return 'Hey' + ' '+  this.name + ' ' + 'says Hi';
        return `Hi, I am ${this.name}.`;
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

    hasMajor(){
        return !!this.major;
    }
    
    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
          description += `. Their major is ${this.major}`;        
        }    
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasLocation()){
        greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}





/**Challenge */
//Traveler --> Person
//Add support for homeLocation 
//Override getGreeting
// Hi. I'm Andrew Mead. I'm visiting from Philadelphia*/



const me  = new Traveler('Andrew Mead', 1, 'Los Angeles');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());




/* Challenge - Add age and name to constructor
                getDescription - return a string with age 
                Andrew Mead is 26 year(s) old */ 