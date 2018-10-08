/*let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
};

const minusOne = () => {
  count--;
  renderCounterApp();
}

const reset = () => {
  count = 0;
  renderCounterApp();
}

var appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count :{count} </h1>
      <button onClick = {addOne}> +1 </button>
      <button onClick = {minusOne}>-1</button>
      <button onClick = {reset}>Reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();*/




class Counter extends React.Component{
  render(){
    return (
      <div>
        <h1> Count:</h1>
        <button onClick = {}>Add</button>
        <button onClick = {}>Minus</button>
        <button onClick = {}>Reset</button>
        </div>
    );
  }

}
  ReactDOM.render(<Counter/>, document.getElementById('app'));

































