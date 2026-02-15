import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState(""); 
  const [phone, setPhone] = useState("");              
  const [contactList, setcontactList] = useState([]);


   const handleSubmit = (e) => {
  e.preventDefault();

  const contacts = {
    name: name,
    phone: phone
  };

  setcontactList([...contactList, contacts]);

  setName("");
  setPhone("");
};


  return (
    <div className="flex flex-col p-4 ">
      <div
        id="title "
        className="flex gap-2 border-b-2 border-gray-700  justify-center pb-3"
      >
        <i className="ri-contacts-book-3-fill text-2xl  md:text-3xl lg:text-4xl"></i>
        <h1 className="text-2xl text-nowrap md:text-3xl lg:text-4xl">
          {" "}
          Contact Generator
        </h1>
      </div>
      <div id="form" >
        <form  onSubmit={handleSubmit} className=" flex flex-col gap-2 p-3">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>{
              setName(e.target.value)
            }}
            className="block p-2 border border-gray-700"
          />
          <input
            type="number"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e)=>{
              setPhone(e.target.value)
            }}
            className="block p-2 border border-gray-700"
          />
          <button className="mt-2 p-2 rounded text-sm bg-blue-600  w-fit self-center md:text-xl lg:text-2xl">
            Add Contact
          </button>
        </form>
      </div>
      <div className="flex items-center gap-4 my-4">
        <div className="flex-1 h-px bg-gray-600"></div>

        <span className="text-gray-400 text-xl text-nowrap md:text-2xl ">
          Contact List
        </span>

        <div className="flex-1 h-px bg-gray-600"></div>
      </div>

      <div id="contact_list ">
        { contactList.length ===0 ?
        <h1 className="flex justify-center md:text-2xl lg:text-3xl">
                  No contacts added yet

        </h1> :
        contactList.map((item, index) => (
  <div key={index} className="border p-3 mb-2 rounded flex justify-between">

    <div>
<p className="font-semibold">Name: {item.name}</p>
    <p className="text-gray-500">Phone: {item.phone}</p>
    </div>
    

      <div class="flex gap-2">

    <button class="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded text-white flex items-center gap-1">
      <i class="ri-pencil-line"></i>
      Edit
    </button>

    <button class="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white flex items-center gap-1">
      <i class="ri-delete-bin-line"></i>
      Delete
    </button>

  </div>
  </div>
))
}
      </div>
    </div>
  );
};

export default App;
