
let visibility = false;


const click = () => {
    visibility = !visibility;
    render();
  }; 
  

const render = () => {
    const template = (
      <div>
        <h1> Visibility Toggle</h1>
        <button onClick = {click}> {visibility ? 'Hide Details' : 'Show Details'}
        </button>
        <p hidden ={!visibility}> Poop </p>
      </div>
    );
    ReactDOM.render(template, document.getElementById('app'));
  };
  
  render();
  
  
  
  