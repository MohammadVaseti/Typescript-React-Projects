import React, { useContext, useState } from "react";
import DeleteTodoIcon from "./DeleteTodoIcon";
import EditTodoIcon from "./EditTotoIcon";
import { NewContext, Todo } from "./NewContext";

export default function TodoItem({todo} : {todo:Todo}){

    let {changeHandler,statusHandler} = useContext(NewContext)

    let [editmode, setEditmode] = useState(false)

    function closeInput(event : React.KeyboardEvent){
        if(event.key=="Enter"){
            changeHandler(todo.id,(event.target as HTMLInputElement).value)
            setEditmode(false)
        }
    }

    return(
        <li className="relative flex items-center justify-between px-2 py-6 border-b">

            {
                editmode 
                ? <input onKeyDown={ (event)=>{closeInput(event)} } defaultValue={todo.name} className="w-full px-2 py-3 border rounded outline-none border-grey-600"  type="text" /> 
                : (
                    <div>
                        <div>
                            <input type="checkbox" className="" checked={todo.status} onChange={ ()=>{statusHandler(todo.id) } }/>
                            <p  className={`inline-block mt-1 ml-2 text-gray-600 ${todo.status?"line-through":""}`}>{todo.name} </p>
                        </div>
                        <button type="button" className="absolute right-0 flex items-center space-x-1">
                            <EditTodoIcon setEditmode={setEditmode}/>
                            <DeleteTodoIcon todo={todo}/>
                        </button>
                    </div>
                )
            }
        </li>
    )
}