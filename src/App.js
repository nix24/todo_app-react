import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function App() {
 
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  

    //creating function to update ul with task when we hit the button
    const addTask = (event) => {
      event.preventDefault();
      setTodos([...todos, input]);
      setInput('');
    }
    return (
      <div className="App">
        {/* creating a todo list app */}
        <h1>Todo List 🌌</h1>
        {/*whatever we type in the input box will be stored*/}
        {/*when we hit the button, task will be displayed in ul*/}
        <form>
          <div className="input">
            <TextField id="outlined-basic" label="Todo" variant="outlined"
              placeholder="add task" value={input}
              onChange={(event) => setInput(event.target.value)} />
            <Button disabled={!input} type='submit' onClick={addTask} variant="contained">
              Add Task
            </Button>
          </div>
        </form>

        <ul>
          {/* tasks added to the list using Todo component */}
          {todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </ul>
      </div>
    );
  }

export default App;
