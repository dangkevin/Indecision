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
  const randomNum = Math.random() * object.options.length
  console.log(randomNum);
}
const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
  const template = (
    <div>
      <h1> {object.title}  </h1>
      {object.subtitle && <p> {object.subtitle} </p>}
      <p>{object.options.length > 0 ? "Here are your options" : 'No options'} </p>
      <button onClick = {onMakeDecision}>What do?</button>
      <button onClick = {onRemoveAll}> Remove All </button>
      {
        numbers.map((number) => {
          return <p key = {number}> Number : {number} </p>;
        })
      }
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



