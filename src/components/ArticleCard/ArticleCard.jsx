import style from "./style.module.css";

/**
 * 
 * @param {import("../../hooks/articles/useArticles").Article} props 
 * @returns 
 */
export function ArticleCard(props) {
  const {
    title,
    description,
    tagList,
    author,
  } = props;

  return (
    <article className={style["container"]}>
      <header>
        <h2>{author.username}</h2>
      </header>

      <section>
        <h2>{title}</h2>
        <p>{description}</p>
      </section>

      <footer>
        <nav>
          <a>Link to full article</a>
        </nav>

        <div>{JSON.stringify(tagList)}</div>
      </footer>
    </article>
  );
}
