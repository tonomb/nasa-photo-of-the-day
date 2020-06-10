import React from "react";
import "./App.css";

import Heading from './components/heading/heading.jsx';
import Picture from './components/photo/picture.jsx';
import Descritpion from './components/description/description.jsx'

function App() {
  return (
    <div className="App">
      <Heading />
      <Picture />
      <Descritpion />
    

    </div>
  );
}

export default App;
