import React, {useState} from 'react';

export default function HomePage() {
  
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
  
    function handleInputChange(event) {
      setNewTask(event.target.value);
    }
  
    function addTask(){

            if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
  
    function deleteTask(index) {
        const updatetasks = tasks.filter((_, i) => i !== index);
        setTasks(updatetasks);

    }
  
    return (
      
      <div className='Destination-list'>
        
        <h1 style={{ color: 'green' }}>Destinations</h1>
        <div>
          <input type="text" value={newTask} onChange={handleInputChange} placeholder="Enter Destination..."/>
          <button className="add-button" onClick={addTask}>Add</button>
        </div>

          <ol>
            {tasks.map((task,index)=>
            <li key={index}>
              <span className='text'>{task}</span>
              <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
            </li>
          
          )}
          </ol>
      </div>
    )
}