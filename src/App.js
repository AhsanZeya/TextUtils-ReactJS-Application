// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Alert from './Component/Alert';
// import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom"


function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type

    })
    setTimeout(() => {
      setAlert('')

    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042546';
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextUtils- Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled", "success");
      document.title = "TextUtils- Light Mode"
    }

  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>

        <Alert alert={alert}></Alert>

        <div className="container my-3">
          {/* <Routes> */}

            {/* <Route exact path='/about'
              element={<About/>}>
            </Route> */}

            {/* <Route exact path='/' */}
              {/* element={<TextForm texttitle="Enter the text to analyze" showAlert={showAlert} mode={mode}/>}> */}
              <TextForm texttitle="Enter the text to analyze" showAlert={showAlert} mode={mode}/>
            {/* </Route> */}

          {/* </Routes> */}

        </div>

      {/* </Router> */}

    </>

  );
}

// Equivalent

// export className App2 extends React.Component{
//   render(){
//     return(
//       <div>
//       <h1>Hello Ahsan!!</h1>
//       <p>{this.props.city}</p>
//     </div>

//     );
//   }
// }
export default App;

