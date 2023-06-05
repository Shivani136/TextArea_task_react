import { React, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
// import "./styles.css";
import './App.css';

function App({error}) {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="App">
    <h4>This is Tectarea Component</h4>
      <textarea
        maxLength="100"
        cols="20"
        rows="5"
        onChange={inputHandler}
      ></textarea>
      <span style={{ color: 'red'}}>'special characters are not allowed'</span>
      <div className="progress">
      <div>
      <input id="submitBtn" type="submit" value="Submit"/>
      </div>
     
        <span className="charLeft">
          {50 - input.length} characters left
        </span>
        <LinearProgress
          className="charProgress"
          variant="determinate"
          value={input.length}
        />
        
      </div>
    </div>
  );
}
export default App;