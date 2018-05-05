'use strict';

console.log('App.js is running');

var object = {
  title: 'Indecision App',
  subtitle: 'Ayeeeeee'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' ',
    object.title,
    ' '
  ),
  React.createElement(
    'p',
    null,
    ' ',
    object.subtitle,
    ' '
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      ' List '
    ),
    React.createElement(
      'li',
      null,
      ' List2'
    )
  )
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
