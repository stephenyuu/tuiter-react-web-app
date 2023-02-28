import ToDoItem from "./todo-item";
import todos from "./todos.json";

const ToDoList = () => {
    return (
        <>
        <h3>Todo List</h3>
        <ul>
            {todos.map(todo => {
                return(<ToDoItem todo={todo}/>)
            })
            }
        </ul>
        </>
    );
}
export default ToDoList; 