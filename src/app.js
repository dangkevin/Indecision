
console.log('App.js is running');

var object = {
  title : 'Indecision App',
  subtitle: 'Ayeeeeee'
};





var template = (
  <div>
    <h1> {object.title} </h1>
    <p> {object.subtitle} </p>
    <ol>
      <li> List </li>
      <li> List2</li>
    </ol>
  </div>
);




/*var userName = 'Mike';
var userAge = 27;
var userLocation = 'Los Angeles';

var user ={
  name: 'Kevin',
  age: '26',
  location: 'Los Angeles'
};

var template2 = (
  <div>
    <h1> {user.name} </h1>
    <p> Age: {user.age} </p>
    <p> Location: {user.location}</p>
  </div>
);*/







var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
