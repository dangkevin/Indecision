'use strict';

var object = {
  title: 'Indecision App',
  subtitle: 'woooooo',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    object.options.push(option);
    e.target.elements.option.value = ' ';
  }
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
    'p',
    null,
    app.options.length
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
  ),
  React.createElement(
    'form',
    { onSubmit: onFormSubmit },
    React.createElement('input', { type: 'text', name: 'option' }),
    React.createElement(
      'button',
      null,
      'Add Option'
    )
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
