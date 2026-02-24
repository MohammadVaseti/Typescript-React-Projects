import { createContext, ReactNode, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Define Todo interface
export interface Todo {
  id: string;
  name: string;
  status: boolean;
}

// Define ContextType interface
interface ContextType {
  todos: Todo[];
  addTodo: (event: React.KeyboardEvent) => void;
  statusHandler: (todoId: string) => void;
  removeTodoHandler: (todoId: string) => void;
  changeHandler: (todoId: string, newName: string) => void;
}

// Create Context
export let NewContext = createContext({} as ContextType);

export function AppDataProvider({ children }: { children: ReactNode }) {
  // State for managing todos, initializing from localStorage if available
  let [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos
      ? JSON.parse(storedTodos)
      : [
          { id: uuidv4(), name: "Eating breakfast", status: false },
          { id: uuidv4(), name: "Going to gym", status: true },
          { id: uuidv4(), name: "Watching movie at 10", status: false },
        ];
  });

  // Effect to update localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo when Enter key is pressed
  function addTodo(event: React.KeyboardEvent) {
    if ((event.target as HTMLInputElement).value == "") {
      return;
    } else {
      if (event.key == "Enter") {
        let newTodo = {
          id: uuidv4(),
          name: (event.target as HTMLInputElement).value,
          status: false,
        };
        setTodos([...todos, newTodo]);
        (event.target as HTMLInputElement).value = "";
      }
    }
  }

  // Function to toggle todo status
  function statusHandler(todoId: string) {
    let updatedTodo = todos.map((item) => {
      if (item.id == todoId) {
        item.status = !item.status;
        return item;
      }
      return item;
    });
    setTodos(updatedTodo);
  }

  // Function to remove a todo by ID
  function removeTodoHandler(todoId: string) {
    let updatedTodos2 = todos.filter((item) => {
      return item.id != todoId;
    });
    setTodos(updatedTodos2);
  }

  // Function to change a todo's name
  function changeHandler(todoId: string, newName: string) {
    let updatedTodos3 = todos.map((item) => {
      if (item.id == todoId) {
        item.name = newName;
        return item;
      }
      return item;
    });
    setTodos(updatedTodos3);
  }

  return (
    <NewContext.Provider
      value={{ todos, addTodo, statusHandler, removeTodoHandler, changeHandler }}
    >
      {children}
    </NewContext.Provider>
  );
}
