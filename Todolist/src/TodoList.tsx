import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";
import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

type Todo = {
  id: string;
  description: string;
  priority: string;
  date: string;
};

function TodoList() {
  const [todo, setTodo] = useState<Todo>({
    id: uuidv4(),
    description: "",
    priority: "Low",
    date: "",
  });
  const [todos, setTodos] = useState<Todo[]>([]);
  const gridRef = useRef<AgGridReact<Todo>>(null);

  const addTodo = () => {
    setTodos([...todos, { ...todo, id: uuidv4() }]);
    setTodo({ id: uuidv4(), description: "", priority: "", date: "" });
  };

  const deleteTodo = () => {
    setTodos(
      todos.filter(
        (_todo, id) =>
          id !== Number(gridRef.current?.api.getSelectedNodes()[0].id)
      )
    );
  };

  const [columnDefs] = useState<ColDef<Todo>[]>([
    { field: "description", sortable: true, filter: true },
    {
      field: "priority",
      sortable: true,
      filter: true,
      cellStyle: (params) =>
        params.value === "High"
          ? { color: "red" }
          : params.value === "Medium"
          ? { color: "orange" }
          : params.value === "Low"
          ? { color: "green" }
          : { color: "black" },
    },
    { field: "date", sortable: true, filter: true },
  ]);

  return (
    <div className="todo-container">
      <input
        className="todo-input"
        placeholder="Description"
        type="text"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        value={todo.description}
      />

      <label>
        <span style={{ marginRight: "8px" }}> Choose priority:</span>
        <select
          className="todo-input"
          value={todo.priority}
          onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
        >
          <option value={"Low"}>Low</option>
          <option value={"Medium"}>Medium</option>
          <option value={"High"}>High</option>
        </select>
      </label>

      <input
        className="todo-input"
        placeholder="Date"
        type="date"
        onChange={(e) => setTodo({ ...todo, date: e.target.value })}
        value={todo.date}
      />

      <div className="button-container">
        <button className="todo-button" onClick={addTodo}>
          Add
        </button>

        <button className="delete-button" onClick={deleteTodo}>
          Delete
        </button>
      </div>

      <div style={{ width: 700, height: 500 }}>
        <AgGridReact
          ref={gridRef}
          columnDefs={columnDefs}
          rowData={todos}
          rowSelection="multiple"
        />
      </div>
    </div>
  );
}

export default TodoList;
