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
constructor(props){
  super(props);
  this.addOne = this.addOne.bind(this);
  this.minusOne = this.minusOne.bind(this);
  this.reset = this.reset.bind(this);
  this.state = {
    count: 0
  };
}


  addOne(){
    this.setState((prevState) => {
      return{
        count: prevState.count + 1
      };
    });
  }

  minusOne(){
    this.setState((prevState) => {
      return{
        count: prevState.count - 1
      };
    });
  }


  reset(){
    this.setState(() => {
      return {
        count: 0
      };
    });

  /*This line here takes the 
  previous state of the previous function
  and then re-renders after the top one is called.
  Hence it updates to 0, then it increments +1. */
  this.setState((prevState) => {
    return {
      count: prevState.count + 1
    };
    });
  }


    render(){
    return (
      <div>
        <h1> Count: {this.state.count}</h1>
        <button onClick = {this.addOne}>Add</button>
        <button onClick = {this.minusOne}>Minus</button>
        <button onClick = {this.reset}>Reset</button>
        </div>
    );
  }
}
  ReactDOM.render(<Counter/>, document.getElementById('app'));

































