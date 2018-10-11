
  
  
  
  //*Parent Class Component**/
  class VisibilityToggle extends React.Component{
    constructor(props){
      super(props);
      this.click = this.click.bind(this);
      //Sets the state to be false
      this.state = {
        visibility: false
      };
    }

    /** On click function
     * The function state is now set to true 
     * */

    click(){
      this.setState((prevState) => {
        return{
          visibility:!prevState.visibility
        };
      });
    }

    /** Returns the template
     * 
     */
    render(){
      return(
        <div>
          <h1>Visibility Toggle</h1> 
          <button onClick = {this.click}> {this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
          <p hidden = {!this.state.visibility}> Hello!</p>
          </div>
        );
      } 
    }

    ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));









  
  