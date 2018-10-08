/**
 * /const obj = {
  name = 'Kevin',
  getName(){
    return this.name;
  }
};
const getName = obj.getName.bind({name: 'Andrew'});
 */


/** Component State
 * Default State Object
 * Component rendered with default state values
 * Change state based on event
 * Component re-renders using new state values
 * Start again at 3
 * 
 */


class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick(){
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button onClick = {this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

//since 

class Options extends React.Component {
  
  /*This allows you to access the array defined in 
    the top by binding it without calling it
    every single time */

  constructor(props){
      super(props);
      this.removeAll = this.removeAll.bind(this);
    }
  


  removeAll(){
   console.log(this.props.options);
  }

  render() {
    return (
      <div>
      <button onClick = {this.removeAll}>Remove All </button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
onFormSubmit(e){
  e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if(option){
      console.log(option);
    }
}
  
  render() {
    return (
      <div>
      <form onSubmit = {this.onFormSubmit}>
      <input type = "text" name = "option"/>
      <button>Add Option</button>
      </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
