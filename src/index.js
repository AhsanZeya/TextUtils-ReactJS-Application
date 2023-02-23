import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
// const root=createRoot(rootElement);
root.render(
    <React.StrictMode>
        {/* //   <StrictMode> */}

        <App />

    </React.StrictMode>
);

// rootElement.render(<h1>Hello World</h1>);


// function clock(){
//   const element=(
//     <div>
//        <h1>Hello Ahsan!!</h1>
//       <p>It is {new Date().toLocaleTimeString()}</p>
//     </div>
//   );
//   root.render(element);
// }

//  setInterval(clock,1000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
