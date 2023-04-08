import { useState } from "react";
import { useTasksDispatch } from "../contexts/TasksContext";

let nextId = 4;

const AddTask = () => {
    const [text, setText] = useState("");
    const dispatch = useTasksDispatch();

    const addTask = (e) => {
        text &&
            dispatch({
                type: "ADD",
                task: { id: nextId++, task: text, done: false },
            });
        setText("");
        e.type === "click"
            ? e.target.parentNode.firstChild.focus()
            : e.target.focus();
    };

    return (
        <div className="addtask">
            <input
                value={text}
                type={"text"}
                autoFocus={true}
                placeholder={"Create a new task"}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTask(e)}
            />
            <i className={"fa-solid fa-xl fa-plus"} onClick={addTask}></i>
        </div>
    );
};

export default AddTask;
