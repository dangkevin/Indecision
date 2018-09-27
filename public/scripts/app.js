'use strict';

var object = {
  title: 'Indecision App',
  subtitle: 'woooooo',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    ' ',
    object.title,
    '  '
  ),
  object.subtitle && React.createElement(
    'p',
    null,
    ' ',
    object.subtitle,
    ' '
  ),
  React.createElement(
    'p',
    null,
    object.options.length > 0 ? "Here are your options" : 'No options',
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

var user = {
  name: "Kevin",
  age: '17',
  location: 'Los Angeles'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      ' Location :',
      location,
      ' '
    );
  }
}

/*var template2 = (
  <div>
    <h1> {user.name ? user.name : 'Anonymous'} </h1>
    {user.age >= 18 && <p> Age: {user.age} </p>}
    {getLocation(user.location)}
  </div>
);*/

var count = 0;

var addOne = function addOne() {
  console.log("poop");
};

var minusOne = function minusOne() {
  console.log("Minus one");
};

var reset = function reset() {
  console.log("Reset");
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count :',
    count,
    ' '
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    ' +1 '
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'Reset'
  )
);

//Challenge
//Make Button with Text "-1" + add function - log minusOne
//Reset Button - add function - log - reset


var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
