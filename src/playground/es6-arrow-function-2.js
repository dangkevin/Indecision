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
    console.log(this.name);     
    this.cities.forEach((city) => {
        console.log(this.name + ' has lived in' + city);
    });
    }
};
user.printPlacesLived();


//ES5 : 

