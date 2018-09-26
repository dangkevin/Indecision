//arg obj - no longer bound

const add = (a, b) => {
    return a + b;
};

//Can't access the arguments 

// this keyword - no longer bound
const user = {
    name : 'Andrew',
    cities: ['Phill', 'New York', 'Dublin'],
    printPlacesLived: function (){
    console.log(this.name);      
    }
};

const user = {
    name : 'Andrew',
    cities: ['Phill', 'New York', 'Dublin'],
    printPlacesLived(){
    return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    //numbers
    numbers:[10,20,30],
    multiplyBy: 3,
    multiple(){
        return this.numbers.map((number) => number * this.multipleBy);
}

//ES5 : 

