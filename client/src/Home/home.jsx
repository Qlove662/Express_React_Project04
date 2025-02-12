import { useEffect } from 'react';
import React, {useState} from 'react';
import axios from 'axios';


export default function HomePage() {
  
    const [States, setState] = useState([]);
    const [newTask, setNewTask] = useState("");
  
    function handleInputChange(event) {
      setNewTask(event.target.value);
    }

    const fetchstate = async () => {
      try {
        const response = await axios.get ("http://localhost:3002/state/")
        console.log(response.data)
        setState (response.data)
      }
      catch (error) {
        console.log (error)
      }
    }
    const fetchCapital = async (stateID) => {
      try {
        const response = await axios.get ("http://localhost:3002/capital/")
        console.log(response.data)
        setState (response.data)
      }
      catch (error) {
        console.log (error)
      }
    }

    function addTask(){

            if(newTask.trim() !== ""){
            setState(t => [...t, newTask]);
            setNewTask("");
        }
    }
  
    function deleteTask(index) {
        const updatetasks = States.filter((_, i) => i !== index);
        setState(updatetasks);

    }
    useEffect (()=>{
      fetchstate()
    },[])
  
    return (
      
      <div className='Destination-list'>
        
        <h1 style={{ color: 'green' }}>Destinations</h1>
        <div>
          <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter Destination..."/>
          <button className="add-button" onClick={addTask}>Add</button>
        </div>

          <ol>
            {States.map((State,index)=>
            
            
            <li key={index}>
              <span className='text'>{State.statename}</span>
              <button className="delete-button" onClick={()=>fetchCapital(State.id)}>Capital</button>
              <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
            </li>
          
          ) 
            } 
          </ol>
      </div>
    )
}