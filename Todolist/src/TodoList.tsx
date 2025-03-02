import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoTable from "./TodoTable";
import './TodoList.css';

type Todo = {
  id: string;
  description: string;
  date: Date;
};

function TodoList() {
  const [todo, setTodo] = useState<Todo>({
    id: uuidv4(),
    description: "",
    date: new Date(),
  });
  const [todos, setTodos] = useState<Todo[]>([]);
  const [dateInput, setDateInput] = useState<string>("");

  function parseDate() {
    const dateParts = dateInput.split(".");
    const day = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const year = parseInt(dateParts[2]);
    const date = new Date(year, month, day);
    return isNaN(date.getTime()) ? new Date(NaN) : date;
  }

  const addTodo = () => {
    const parsedDate = parseDate();
    if (isNaN(parsedDate.getTime())) {
      alert("Invalid date format. Please use dd.mm.yyyy");
      return;
    }
    setTodos([...todos, { ...todo, date: parsedDate, id: uuidv4() }]);
    setTodo({ id: uuidv4(), description: "", date: new Date() });
    setDateInput("");
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
        onChange={(e) => setDateInput(e.target.value)}
        value={dateInput}
      />
      <button className="todo-button" onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default TodoList;