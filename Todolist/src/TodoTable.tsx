import "./TodoTable.css";

type Todo = {
  id: string;
  description: string;
  date: string;
};

type Props = {
  todos: Todo[];
  deleteTodo: (id: string) => void;
};

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fi-fi");
}

function TodoTable({ todos, deleteTodo }: Props) {
  return (
    <table className="todo-table">
      {todos.length > 0 && (
        <thead>
          <tr>
            <td>Date</td>
            <td>Description</td>
            <td>Actions</td>
          </tr>
        </thead>
      )}
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>
              {formatDate(todo.date)}
            </td>
            <td>{todo.description}</td>
            <td>
              <button
                className="delete-button"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
