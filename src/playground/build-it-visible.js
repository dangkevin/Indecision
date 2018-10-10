
  
  class VisibilityToggle extends React.Component{
    constructor(props){
      super(props);
      this.click = this.click.bind(this);
      this.state = {
        visibility: false
      };
    }

    click(){
      this.setState((prevState) => {
        return{
          visibility:!prevState.visibility
        };
      });
    }


    render(){
      return(
        <div>
          <h1>Visibility Toggle</h1> 
          <button onClick = {this.click}> {this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
          <p hidden = {!this.state.visibility}> Poop</p>
          </div>
        );
      } 
    }

    ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));









  
  