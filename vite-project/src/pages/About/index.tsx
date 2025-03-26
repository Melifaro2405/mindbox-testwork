import styles from "./index.module.scss";

function About() {
  return (
    <section className={styles.aboutPage}>
      <h1>About Page</h1>
      <h3>В приложении использован следующий стек:</h3>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>css.modules + Classnames</li>
      </ul>
      <p>State менеджер не использовался, т.к. нецелесообразно</p>
      <p>Стилизация выполнена при помощи css.modules + Classnames</p>
      <p>
        Список дел можно редактировать, удалять, добавлять, реализована
        фильтрация
      </p>
      <p>
        В полях добавления и редактирования задачи реализовано завершение по
        нажатию клавиши Enter
      </p>
    </section>
  );
}

export default About;
