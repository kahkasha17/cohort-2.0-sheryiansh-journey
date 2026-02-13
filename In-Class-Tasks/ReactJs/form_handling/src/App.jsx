import React, { useState } from 'react'

const App = () => {

const SubmitHandler=(e)=>{
  e.preventDefault();
  console.log("Form submitted")
  console.log(userList)
setuserList([...userList, User]);
  setUser("");
}

const [User, setUser] = useState('');
const [userList, setuserList] = useState([]);

  return (
    <div className='h-screen flex items-center justify-center gap-2 flex-col'>
      <form onSubmit={(e)=>{
        SubmitHandler(e)
      }}>
        <input type="text" placeholder='Enter your Name' className='border border-white p-2 mr-2' 
           value={User}
        onChange={(e)=>{
          setUser(e.target.value)
    
        }}
     
        
        />
        <button className='bg-amber-600 border border-none rounded-3xl p-2'>Submit</button>
      </form>

      {
        userList.map((elem)=>{

          return(
              <div>
            <h1>
              {elem}
            </h1>
          </div>
          )
        
        })
      }
    </div>
  )
}

export default App