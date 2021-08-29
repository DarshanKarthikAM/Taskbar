import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TasksContainer from "./TasksContainer";

function App() {
  return (
    <div className="container">
      <h1>TaskBox</h1>
      <TasksContainer />
    </div>
  );
}

export default App;
