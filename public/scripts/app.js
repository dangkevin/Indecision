'use strict';

var visibility = false;

var click = function click() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      ' Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: click },
      ' ',
      visibility ? 'Hide Details' : 'Show Details'
    ),
    React.createElement(
      'p',
      { hidden: !visibility },
      ' Poop '
    )
  );
  ReactDOM.render(template, document.getElementById('app'));
};

render();
