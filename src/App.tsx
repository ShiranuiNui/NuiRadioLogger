import React from "react";
import "./App.css";
import QSOForm from "./QSOForm";

function App() {
  return (
    <div className="App">
      <QSOForm onCreate={(new_qso) => console.log(new_qso)}></QSOForm>
    </div>
  );
}

export default App;
