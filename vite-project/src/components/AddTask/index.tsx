import { ChangeEvent, KeyboardEvent, useState } from "react";
import { generateId } from "../../utils/generateId.ts";
import styles from "./index.module.scss";
import { TTodo } from "../../types/types.ts";

type TAddTaskProps = {
  todos: TTodo[];
  setTodos: (items: TTodo[]) => void;
};

function AddTask({ todos, setTodos }: TAddTaskProps) {
  const [newTask, setNewTask] = useState<string>("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      const newTodo = {
        id: generateId(),
        value: newTask,
        editable: false,
        checked: false,
      };

      setTodos([...todos, newTodo]);
      setNewTask("");
    }
  };

  const handleKeyPressNewTask = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      handleAddTask();
    }
  };

  const handleChangeInput = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.accessKey === "Enter") {
      console.log("Нажата клавиша Enter, ура!");
    }

    setNewTask(evt.target.value);
  };

  return (
    <div className={styles.addTask}>
      <input
        className={styles.inputTodoText}
        value={newTask}
        onKeyUp={handleKeyPressNewTask}
        onChange={handleChangeInput}
        placeholder="What need to be done?"
        autoFocus={true}
      />
      <button onClick={handleAddTask} disabled={!newTask.trim()}>
        Add task
      </button>
    </div>
  );
}

export default AddTask;
