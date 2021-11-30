import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [textInput, setTextInput] = useState("")
  const [categoryInput, setCategoryInput] = useState("Code")
  
  const renderOptions = () => {
    return categories.map(category => {
      return <option key={uuidv4()}>{category}</option>
    })
  }

  const handleChange = (e) => {
    if(e.target.name === "text") {
      setTextInput(e.target.value)
    } else {
        setCategoryInput(e.target.value)
    }
    
  }
  
  return (
    <form onSubmit={(e) => onTaskFormSubmit(e, textInput, categoryInput)} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} type="text" name="text" value={textInput} />
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category" value={categoryInput}>
          {renderOptions()}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
