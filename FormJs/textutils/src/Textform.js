import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  const handleUpClick = () => setText(text.toUpperCase());
  const handleLowClick = () => setText(text.toLowerCase());
  const handleClearClick = () => {
    setText("");
    setSentenceCount(0);
    setParagraphCount(0);
  };
  const handleOnChange = (event) => setText(event.target.value);

  const handleSentenceCount = () => {
    const count = text.split(/[.!?]+/).filter((s) => s.trim().length !== 0).length;
    setSentenceCount(count);
  };
  const handleParagraphCount=()=>{
    const count=text.split(/\n+/).filter((p)=>p.trim().length!==0).length;
    setParagraphCount(count);
  }
  const handleCopyText=()=>{
     navigator.clipboard.writeText(text)
      .then(() => alert("Text copied to clipboard!"))
      .catch((err) => console.log("Failed to copy text: ", err));
  };

const handleExtraSpaces=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(""))
}

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control mx-4"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-3" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-warning mx-3" onClick={handleSentenceCount}>
          Count Sentences
        </button>
        <button className="btn btn-success mx-3" onClick={handleParagraphCount}>Paragraph Count</button>
        <button className="btn btn-info max-3" onClick={handleCopyText}>Copy to clipboard</button>
    <button className="btn btn-success mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

      </div>

      <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>
          {text.trim().split(/\s+/).filter((word) => word.length !== 0).length} words,{" "}
          {sentenceCount} sentences and  {paragraphCount} paragraph {text.length} characters
        </p>
        <p>
          {0.008 *
            text.trim().split(/\s+/).filter((word) => word.length !== 0).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
  }
