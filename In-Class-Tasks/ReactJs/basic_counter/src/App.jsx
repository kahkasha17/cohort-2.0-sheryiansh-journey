import React, { useState } from "react";

const App = () => {

  const [num, setnum] = useState(0)
  return (


    <div>
      <main>
        <h1>Counter</h1>
        <h1>{num}</h1>
        <div className="btn-grp">
          <button onClick={()=>{
            setnum(num+1)
          }}>Increase</button>
          <button onClick={()=>{
            setnum(num-1)
          }}>Decrease</button>
        </div>
      </main>
    </div>
  );
};

export default App;
