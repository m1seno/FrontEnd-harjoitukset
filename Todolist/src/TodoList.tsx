import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { AgGridReact } from "ag-grid-react";
import { AllCommunityModule, ColDef, ModuleRegistry } from "ag-grid-community";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

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
    priority: "",
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setTodo({...todo, priority: event.target.value});
  };

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      setTodo((prevTodo) => ({
        ...prevTodo,
        date: date.format("YYYY-MM-DD"),
      }));
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    return dayjs(dateString).format("DD.MM.YYYY");
  };

  const [columnDefs] = useState<ColDef<Todo>[]>([
    {
      field: "description",
      sortable: true,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "priority",
      sortable: true,
      filter: true,
      floatingFilter: true,
      cellStyle: (params) =>
        params.value === "High"
          ? { color: "red" }
          : params.value === "Medium"
          ? { color: "orange" }
          : params.value === "Low"
          ? { color: "green" }
          : { color: "black" },
    },
    {
      field: "date",
      valueFormatter: ({ value }) => formatDate(value),
      sortable: true,
      filter: true,
      floatingFilter: true,
    },
  ]);

  return (
    <>
      <Stack mt={2} direction="row" spacing={2}justifyContent="center" alignItems="center">
        <TextField
          name="description"
          label="Description"
          type="text"
          onChange={handleChange}
          value={todo.description}
        />

        <FormControl sx={{ width: "250px" }}>
          <InputLabel id="priority-label">Priority</InputLabel>
          <Select
            name="priority"
            labelId="priority-label"
            id="priority"
            value={todo.priority}
            onChange={handleSelectChange}
            input={<OutlinedInput label="Priority" />}
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="date"
            name="date"
            value={todo.date ? dayjs(todo.date) : null}
            onChange={handleDateChange}
            format="DD.MM.YYYY"
            sx={{ width: "250px" }}
          />
        </LocalizationProvider>

          <Button
            onClick={addTodo}
            variant="contained"
            color="primary"
          >
            Add
          </Button>

          <Button onClick={deleteTodo} variant="contained" color="error" startIcon={<DeleteIcon/>}>
            Delete
          </Button>
      </Stack>

      <div style={{ width: "100%", maxWidth: "800px", height: 500, margin: "0 auto" }}>
        <AgGridReact
          ref={gridRef}
          columnDefs={columnDefs}
          rowData={todos}
          rowSelection="single"
          defaultColDef={{ floatingFilter: true }}
          pivotSuppressAutoColumn
        />
      </div>
    </>
  );
}

export default TodoList;
