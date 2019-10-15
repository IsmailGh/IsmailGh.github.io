import React from "react";
import ReactDOM from 'react-dom';
import Home from "./components/Home";



function App() {
    return <div className="Home">
    <Home />
    </div>
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);