import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoTable from "./TodoTable";
import './TodoList.css';

type Todo = {
  id: string;
  description: string;
  date: string;
};

function TodoList() {
  const [todo, setTodo] = useState<Todo>({
    id: uuidv4(),
    description: "",
    date: "",
  });
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = () => {
    setTodos([...todos, { ...todo, id: uuidv4() }]);
    setTodo({ id: uuidv4(), description: "", date: "" });
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <input
      className="todo-input"
        placeholder="Description"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        value={todo.description}
      />
      <input
      className="todo-input"
        placeholder="Date"
        type="date"
        onChange={(e) => setTodo({...todo, date: e.target.value})}
        value={todo.date}
      />
      <button className="todo-button" onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoList;