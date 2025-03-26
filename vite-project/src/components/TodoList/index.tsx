import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import classNames from "classnames";
import { TFilterType, TTodo } from "../../types/types.ts";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import CheckedSvg from "../../icons/checked.svg?react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import UnCheckedSvg from "../../icons/unchecked.svg?react";
import styles from "./index.module.scss";

type TTodoListProps = {
  todos: TTodo[];
  setTodos: (items: TTodo[]) => void;
  filterType: TFilterType;
};

function TodoList({ todos, setTodos, filterType }: TTodoListProps) {
  const [filteredTodos, setFilteredTodos] = useState<TTodo[]>([]);

  const handleCheckedTask = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleEditModeTask = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, editable: !todo.editable };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleRemoveTask = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  };

  const handleEditTask = (evt: ChangeEvent<HTMLInputElement>, id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, value: evt.target.value };
      }

      return todo;
    });

    setTodos(updatedTodos);
  };

  const handleKeyPressEditTask = (
    evt: KeyboardEvent<HTMLInputElement>,
    id: string,
  ) => {
    if (evt.key === "Enter") {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, editable: false };
        }
        return todo;
      });
      setTodos(updatedTodos);
    }
  };

  useEffect(() => {
    if (filterType === "All") {
      setFilteredTodos(todos);
    }

    if (filterType === "Active") {
      setFilteredTodos(todos.filter((todo) => !todo.checked));
    }

    if (filterType === "Completed") {
      setFilteredTodos(todos.filter((todo) => todo.checked));
    }
  }, [todos, filterType]);

  return (
    <ul className={styles.todosList}>
      {!filteredTodos.length ? (
        <span className={styles.emptyList}>Empty list</span>
      ) : (
        filteredTodos.map(({ id, value, checked, editable }) => (
          <li
            key={id}
            className={styles.listItem}
          >
            <button className={styles.svgIcon} onClick={() => handleCheckedTask(id)}>
              {checked ? (
                <CheckedSvg fill="gold" />
              ) : (
                <UnCheckedSvg fill="gold" />
              )}
            </button>
            {editable ? (
              <input
                className={styles.editableTodo}
                type="text"
                value={value}
                onChange={(evt) => handleEditTask(evt, id)}
                onKeyUp={(evt) => handleKeyPressEditTask(evt, id)}
              />
            ) : (
              <span className={classNames({ [styles.checkedTask]: checked })}>
                {value}
              </span>
            )}
            <div className={styles.itemButtonsGroup}>
              <button
                className={styles.buttonEdit}
                onClick={() => handleEditModeTask(id)}
              >
                {editable ? "Ready" : "Edit"}
              </button>
              <button
                className={styles.buttonDelete}
                onClick={() => handleRemoveTask(id)}
                disabled={editable}
              >
                Delete
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default TodoList;
