
console.log('App.js is running');

 

var object = {
  title : 'Indecision App',
  subtitle: 'woooooo',
  options: ['One', 'Two']
};





var template = (
  <div>
    <h1> {object.title}  </h1>
    <p> {object.subtitle} </p>
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







var appRoot = document.getElementById('app');

ReactDOM.render(object, appRoot);
