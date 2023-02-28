const ToDoItem = ({
  todo = {
    done: true,
    tile: "Buy milk",
    status: "COMPLETED",
  },
}) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={todo.done} />
      {todo.tile}({todo.status})
    </li>
  );
};
export default ToDoItem;
