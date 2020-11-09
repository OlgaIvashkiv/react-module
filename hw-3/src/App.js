import React from 'react'
import './App.css';
import IdForm from "./components/Form/id-form";
import NameForm from "./components/Form/name-form";

function App() {
  return (
    <div>
        <div className="myForm">
            <IdForm/>
            <hr/>
            <NameForm/>
        </div>

    </div>
  );
}

export default App;
