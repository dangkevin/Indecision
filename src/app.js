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
  }
};
const template = (
  <div>
    <h1> {object.title}  </h1>
    {object.subtitle && <p> {object.subtitle} </p>}
    <p>{object.options.length > 0 ? "Here are your options" : 'No options'} </p>
    <p>{app.options.length}</p>
    <ol>
      <li> List </li>
      <li> List2</li>
    </ol>
    <form onSubmit = {onFormSubmit}>
     <input type = "text" name = "option"/>
     <button>Add Option</button>
     </form>
  </div>
);






var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);