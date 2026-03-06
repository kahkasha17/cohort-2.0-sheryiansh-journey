import React from "react";
import { useNavigate } from "react-router-dom";

const Button = (props) => {

const navigate=useNavigate()

  return (
    <div className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 w-fit mt-2" 
     onClick={()=>{
      navigate(props.navigate)
     }}
    
    >
      {props.name}
    </div>
  );
};

export default Button;
