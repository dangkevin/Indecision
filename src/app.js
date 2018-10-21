

/*React State Component*/
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  /*componentDidMount(){
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    this.setState(() => ({ options })); 
  }
  
  componentDidUpdate(prevProps, prevState){ 
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  */
componentWillUnmount(){
  console.log('componentWillUnmount');
}


  handleDeleteOption(optionToRemove){
    this.setState ((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option) 
    }));
  }


  /** Can be written as 
   * handleDeleteOptions(){
   * this.setState(() => ({options: []}));
   * }
   */


  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    /**Can be written as 
     * this.setState((prevState) => ({
     * options: prevState.options.concat(option)
     * }));
     * }
     */

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      /*These are the React components with props passed */
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption = {this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

/* class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
} */



const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
  };

Header.defaultProps = {
  title: 'Some Default' 
};


/* This is a React Class Component
 * React State Component/
/* class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    );
  }
} */
IndecisionApp.defaultProps = {
  options:[]
};

/* React stateless component for Action */
const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  );
};



const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {
        props.options.map((option) => 
        <Option key={option} 
        optionText={option}
        handleDeleteOption = {props.handleDeleteOption}
        />)
      }
    </div>
  );
};


/*class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}*/

const Option = (props) =>{
  return (
    <div>
    {props.optionText}
    <button 
      onClick = {(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
    Remove
    </button>
    </div>
  );
};

 
/*class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}*/





/* React State Element */

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);

    
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    /**this.setState (() => ({error}));*/

    this.setState(() => {
      return { error };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
