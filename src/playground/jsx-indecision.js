var object = {
    title : 'Indecision App',
    subtitle: 'woooooo',
    options: []
  };
  
  const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;
  
    if(option){
      object.options.push(option);
      e.target.elements.option.value = ' ';
      render();
    }
  };
  
  const onRemoveAll = () => {
    object.options  = [];
    render();
  };
  
  const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * object.options.length);
    const optionz = object.options[randomNum]; 
    alert(optionz);
  }
  
  
  const appRoot = document.getElementById('app');
  
  
  const render = () => {
    const template = (
      <div>
        <h1> {object.title} </h1>
        {object.subtitle && <p> {object.subtitle} </p>}
        <p>{object.options.length > 0 ? "Here are your options" : 'No options'} </p>
        <button disabled ={object.options.length ===0} onClick = {onMakeDecision}>What do?</button>
        <button onClick = {onRemoveAll}> Remove All </button>
  
        <ol>
          {
          object.options.map((option) =>{
            return <li key = {option}>{option}</li>;
            })
          }
        </ol>
        <form onSubmit = {onFormSubmit}>
        <input type = "text" name = "option"/>
        <button>Add Option</button>
        </form>
      </div>
    );
    ReactDOM.render(template, appRoot);
  };
  
  render();
  
  
  
  