import MainTodo from "./components/MainTodo";
import { AppDataProvider } from "./components/NewContext";

export default function App() {
  return (

    <AppDataProvider>
      <MainTodo/>
    </AppDataProvider>

  )
}