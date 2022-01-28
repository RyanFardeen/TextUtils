import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    // console.log(handleChange)
    setText(event.target.value);
  };

  const toUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted to UpperCase","success")
  };

  const toLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is converted to LowerCase","success")
  };

  const toClear = () => {
    setText("");
    props.showAlert("Text Cleared","success")
  };

  const toCopy = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Text Copied","success")
  }

  return (
    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
      <h2>Enter your text here</h2>
      <div className="mb-3">
        <textarea
          className={`form-control bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'}`}
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" type="submit" onClick={toUpper} >
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-1" type="submit" onClick={toLower}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-1" type="submit" onClick={toClear}>
        Clear text
      </button>
      <button className="btn btn-primary mx-1" type="submit" onClick={toCopy}>
        Copy text
      </button>
      <h3>
        {text.split(" ").length} words and {text.length} characters
      </h3>
      <h3>{0.8 * text.split(" ").length} seconds to read</h3>
      <h3>Preview :</h3>
      <p>{text.length === 0?"Enter any text to Preview":text}</p>
    </div>
  );
}
