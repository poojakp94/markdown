import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const markdown = `
# Welcome to my React Markdown Previewer!
---

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\` , between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:
`;
  const [data, setData] = useState(markdown);
  const [isEditorMaximized, updateEditor] = useState(false);
  const [isPreviewMaximized, updatePreview] = useState(false);
  
  useEffect(()=> {
    document.getElementById("preview").innerHTML = window.marked(data)
  }, [data])
  return (
    <div className="App">
      <div 
        style={
          {height: isEditorMaximized ? '100vh' : '300px',
        width: isEditorMaximized ? '100%' : '500px',
        marginBottom: isEditorMaximized ? '0px' : '50px',
        display: isPreviewMaximized ? 'none' : 'flex',
        flexDirection: 'column',
        boxShadow : '1px 1px 15px 1px #333' }
            
        }
      >
        <nav className="nav-bar">
        <p>Editor</p>
        <i  className={isEditorMaximized ? "fa fa-compress" : "fa fa-arrows-alt"} style={{transform: 'rotate(45deg)'}} onClick={()=>{
          updateEditor(!isEditorMaximized);
          
        }}></i>
        </nav>
        <textarea id="editor" value={data} onChange={(event)=>{
      event.preventDefault();
      setData(event.target.value);
    }}>

        </textarea>
      </div>
      <div style={
        {minHeight: '200px',
        width: isPreviewMaximized? '100%' : '800px',
        display: isEditorMaximized ? 'none' : 'flex',
        flexDirection: 'column',
        boxShadow : '1px 1px 15px 1px #333' }
      }>
        <nav className="nav-bar">
        <p>Preview</p>
        <i className={isPreviewMaximized ? "fa fa-compress" : "fa fa-arrows-alt"} style={{transform: 'rotate(45deg)'}} onClick={()=>{
          updatePreview(!isPreviewMaximized)
        }}></i>
        </nav>
      <div id="preview"></div>
      </div>
      
    </div>
  );
}

export default App;
