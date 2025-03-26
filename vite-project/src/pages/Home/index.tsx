import { useState } from "react";
import { Link } from "react-router";
import AddTask from "../../components/AddTask";
import TodoList from "../../components/TodoList";
import FiltersList from "../../components/FiltersList";
import { TFilterType, TTodo } from "../../types/types.ts";
import styles from "./index.module.scss";

function Home() {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [filterType, setFilterType] = useState<TFilterType>("All");

  return (
    <section>
      <Link to="about" className={styles.aboutApp}>
        {"--->"} About App {"<---"}
      </Link>
      <h1 className={styles.title}>TODOS</h1>
      <AddTask todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} filterType={filterType} />

      {!!todos.length && (
        <FiltersList filterType={filterType} setFilterType={setFilterType} />
      )}
    </section>
  );
}

export default Home;
