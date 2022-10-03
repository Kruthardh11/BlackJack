import React from "react";
import Nav from "./Nav";
import Main from "./Main"
function App() {
  const [darkMode, setdarkMode] = React.useState(false)

  function toggleDarkMode(){
      setdarkMode(prevMode=>!prevMode)
  }
  return (
    
    <div className="App">
      <Nav  darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode} />
    </div> 
  );
}

export default App;
