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
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  object.options = [];
  render();
};
var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var render = function render() {
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
      object.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      ' Remove All '
    ),
    numbers.map(function (number) {
      return React.createElement(
        'p',
        { key: number },
        ' Number : ',
        number,
        ' '
      );
    }),
    React.createElement(
      'ol',
      null,
      object.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
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
  ReactDOM.render(template, appRoot);
};

render();
