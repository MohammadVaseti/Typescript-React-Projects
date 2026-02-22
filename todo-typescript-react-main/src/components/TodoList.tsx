import { useContext } from "react";
import TodoItem from "./TodoItem";
import { NewContext } from "./NewContext";

export default function TodoList(){

    let {todos} = useContext(NewContext)
    
    return(
        <ul className="list-reset">
            {
                todos.map(
                    (todo,index) => <TodoItem key={index} todo={todo} />
                )
            }
        </ul>
    )
}