import React, { useState } from 'react'

const App = () => {

  const [marks, setmarks] = useState([95,12,34,76,65,87]);

  function graceMarks(){
    const newMarks=marks.map(function(elem){
      return elem>90?elem:elem+5;
      
    })

    setmarks(newMarks)

  }
  return (
    <div>
      {
        marks.map(function(elem,idx){
          return <h1>Marks of Student {idx+1} = {elem} ({elem>33?"PASS":"FAIL"})</h1>
        })

    
      }
      <button onClick={graceMarks}> Give them Grace by 5 marks</button>
    </div>
  )
}

export default App