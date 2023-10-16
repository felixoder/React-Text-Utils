import React, { useState } from 'react';


  // Declare a new state variable, which we'll call "count"
  
  export default function TextForm(props) {
    const handleUpclick =()=>{
       
        let newText = text.toUpperCase();

        setText(newText)
    }
    
    const handleOnChange =(event)=>{
        
        setText(event.target.value)
    }
    const handleLwclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleRevclick = ()=>{
      let newText = text.split(" ").reverse().join(" ")
       setText(newText)
    }
    const handlePuncvclick = ()=>{
        function RemovePunc(text){

            let punctuationList = 
            /[!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~\\]/
              ;
              let newText = text.replace( punctuationList, "");
              return newText
        }
        let newText = RemovePunc(text);
        setText(newText)

       
    }
    const handleWhiteRemvvclick  =()=>{
        let newText = text.replace(/\s+/g, ' ')
        setText(newText)

    }
    const handleClearvclick =()=>{
        let newText ="";
        setText(newText)
    }
    const handleBinaryToDecimalclick =()=>{
        
        
        let newText = parseInt(text , 2).toString()
        setText(newText)

    }
    const copy = () => {
        const textToCopy = text; // Get the text to copy from the state
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
       
        document.body.removeChild(textArea);
       
    };
        
    
    
    const [text, setText] = useState("Enter the Text here");


  
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      
      <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
   

      <button className="btn btn-primary mx-3" onClick={handleUpclick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-3 " onClick={handleLwclick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-3 " onClick={handleRevclick}>
        Make the Text Reverse
      </button>
      <button className="btn btn-primary mx-3 " onClick={handlePuncvclick}>
        Remove the Punctuations
      </button>
      <button className="btn btn-primary mx-3 " onClick={handleWhiteRemvvclick}>
        Remove the WhiteSpace
      </button>
      <button className="btn btn-primary mx-3 " onClick={handleClearvclick}>
        Clear the Text
      </button>
      <button className="btn btn-primary mx-3 my-2 " onClick={handleBinaryToDecimalclick}>
        Convert Binary To Decimal
      </button>
    </div>
    <div className="container my-3">
        <h1>This is The summery of the Text</h1>
        <p> {text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes Read</p>
        <h2>Preview</h2>
        <h5>{text}</h5>
        <button onClick={copy}>Copy text</button>
    </div>
    </>
    
  );
}
