import React from 'react';
import './styles/app.scss';
import Toolbar from "./components/Toolbar";
import Settingsbar from "./components/Settingsbar";
import Canvas from "./components/Canvas";

function App() {
  return (
    <div className="App">
      <Toolbar/>
      <Settingsbar/>
      <Canvas/>
    </div>
  );
}

export default App;
