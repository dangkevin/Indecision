var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar',nameVar);

let nameLet = 'Jen';

nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';

/*does not work cause of const*/
const nameConst = 'Gunther';
console.log('nameConst', nameConst);


// Block Scoping

var fullName = 'Andrew Mead';

if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
    
}
