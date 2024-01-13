import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const [inplist, setinplist] = useState("")
  const [items, setItems] = useState([])
  const [inpchange, set_inpchange] = useState('')

 
  
  const AddItems = () => {
    
      if (inpchange.trim() !== "" && inplist.trim() !== "") {
        setItems([...items, { title: inplist, description: inpchange }])
        setinplist("")
        set_inpchange("")
      
    }
    setinplist("")
  }
  const DelAll = (id) => {
    // console.log("zxj");

    setItems([])
  }
  const ondelt = (id) => {
    // console.log("zxj");

    const delete_Item = items.filter((elem,ind)=> {
      return ind !== id
    })
    setItems(delete_Item)
  }

  // function edit(id) {

  //   const editb = items.find((e) => e.id === id)

  //   setinplist(editb.inplist)


  
  return (
    <div className='Main-div'>
      <div className='Center-div'>
        <br />
        <h1>ToDo App</h1>
        <br />
        <input
          type="text"
          placeholder='Add a tittle'
          value={inplist}
          onChange={(e) => setinplist(e.target.value)}
        />

        <input
          type="text"
          placeholder='Add a Description'
          value={inpchange}
          onChange={(t) => set_inpchange(t.target.value)}
        />
        <button onClick={AddItems}>+</button><button onClick={DelAll} className='btn'><i className="fa-regular fa-trash" style={{ color: "#fafafa" }}></i></button>

        <ol>
          {

            items.map((imval, index) => {
              return(
       <div key={index} className='li_text'>
        <i className="fa fa-times" aria-hidden = "true"  
        onClick={()=>{
          ondelt(index)
        }}
        />
        {/* <i className="fa-solid fa-pen"
        onClick={()=>{
        
        }}
        /> */}
         <li><h4>{imval.title}:</h4></li>
         <li><p>{imval.description}</p></li>
       </div>
      )
            })
          }
        </ol>
      </div>
    </div>
  )
  
  
}
export default App
