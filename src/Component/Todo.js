import { useState, use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, deleteAll } from "../Redux/Action/action";
import { FaTrash } from "react-icons/fa";

function Todo() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.addList.list);
  const [task, setTask] = useState("");

  return (
    <div className="container">
      <div className="addList">
        <input
          type="text"
          name="add"
          className="add"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add "
          autoComplete="off"
        />{" "}
        <button
          className="addTask"
          onClick={() => dispatch(addTodo(task), setTask(""))}
        >
          +
        </button>
      </div>

      {list.map((li) => {
        return (
          <div key={li.id} className="list">
            <div className="data">{li.data} </div>
            <div className="delete">
              <button onClick={() => dispatch(deleteTodo(li.id))}>
                <FaTrash />
              </button>
            </div>
          </div>
        );
      })}
      {list.length === 0 ? null : (
        <button className="deleteAll" onClick={() => dispatch(deleteAll())}>
          Delete all
        </button>
      )}
    </div>
  );
}

export default Todo;
