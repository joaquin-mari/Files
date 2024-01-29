import Input from './Components/ColorInput'

const App = () => {
  function setBackgroung({colorCode}){
    console.log("Running method")
    var body = document.body
    body.style.backgroundColor = colorCode
    }

  return (
    <div className="App">
      <div className="container">
      <h1>Color Picker App</h1>
      <Input 
      text='Color: ' 
      buttonText='Enter'
      onClick={(colorCode) => setBackgroung({ colorCode })}/>
      </div>
    </div>
  );
}

export default App;
