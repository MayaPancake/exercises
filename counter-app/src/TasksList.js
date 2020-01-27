import React, {useState} from 'react';
import './App.css';
import AddButton from './AddButton';

function TasksList() {

  const [todos, setTodos] = useState([
    {
      content: 'Pick-up dry cleaning',
      isCompleted: true,
    },
    {
      content: 'Get Hair Cut',
      isCompleted: false,
    },
    {
      content: 'Build a todo app in react',
      isCompleted: false,
    }]);
  
  const addTodoList = (todo) => {
    const updateTodos = [...todos, { content: todo, isCompleted: false }];
    setTodos(updateTodos)
  }

  return (
    <div className="task-list">
      <label className="todo-list">
        <AddButton todoOnClick={(todo) => addTodoList(todo) }/>
        <ul>
          {todos.map((todo, i) => (
            <div className={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
              <div className={'checkbox'}>
                {todo.isCompleted && (
                  <span>&#x2714;</span>
                )}
              </div>
              <input
                type="text"
                value={todo.content}
                />
            </div>
          ))}
        </ul>
      </label>
    </div>
  );
}

export default TasksList;