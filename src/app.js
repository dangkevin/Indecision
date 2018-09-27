var object = {
  title : 'Indecision App',
  subtitle: 'woooooo',
  options: ['One', 'Two']
};

var template = (
  <div>
    <h1> {object.title}  </h1>
    {object.subtitle && <p> {object.subtitle} </p>}
    <p>{object.options.length > 0 ? "Here are your options" : 'No options'} </p>
    <ol>
      <li> List </li>
      <li> List2</li>
    </ol>
  </div>
);


var user ={
  name: "Kevin",
  age: '17',
  location: 'Los Angeles'
};


function getLocation(location){
  if(location){
    return <p> Location :{location} </p>;
  } 
}


/*var template2 = (
  <div>
    <h1> {user.name ? user.name : 'Anonymous'} </h1>
    {user.age >= 18 && <p> Age: {user.age} </p>}
    {getLocation(user.location)}
  </div>
);*/

let count = 0;

const addOne = () => {
  console.log("poop");
};

const minusOne = () => {
  console.log("Minus one");
}

const reset = () => {
  console.log("Reset");
}

const templateTwo = (
  <div>
    <h1>Count :{count} </h1>
    <button onClick = {addOne}> +1 </button>
    <button onClick = {minusOne}>-1</button>
    <button onClick = {reset}>Reset</button>
  </div>

);


//Challenge
//Make Button with Text "-1" + add function - log minusOne
//Reset Button - add function - log - reset







var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
