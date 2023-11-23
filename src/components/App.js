import React from 'react';
import { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown'

function App() {
const [text, setText]= useState();


  return (
    <div className="app"> 
      <div className="preview">
        <textarea name="" className='textarea'
        value={text}
        onChange={(e)=>{
          setText(e.target.value)
        }}
         id="" cols="30" rows="10"></textarea>
      </div>
      <div className="loading">
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
