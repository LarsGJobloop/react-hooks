import style from "./style.module.css";

import { ArticleCard } from "../ArticleCard/ArticleCard";
import { getAllArticles } from "../../data/articles/articleHandlers";

export function ArticleFeed() {
  // Retrive the list of articles
  const allArticles = getAllArticles();

  // === Event Handlers ===
  // TODO: create implementation for each of these
  function nextPage() {console.log("next page")}
  function previousPage() {console.log("previous page")}

  function applyFilter(filter) {console.log(`applying filter: ${filter}`)}
  function resetFilter() {console.log("resetting filters")}

  // === The HTML (JSX) ===
  return (
    <section className={style["container"]}>
      <header>
        <h2>Filters</h2>
        <ul>
          <li>
            <button onClick={applyFilter}>Tag #1</button>
            <button onClick={applyFilter}>Tag #2</button>
          </li>
        </ul>

        <button onClick={resetFilter}>Reset Filters</button>
      </header>

      <section>
        <ul className={style["feed"]}>
          {allArticles.map((article) => {
            return (
              <li key={article.slug}>
                <ArticleCard {...article} />
              </li>
            );
          })}
        </ul>
      </section>

      <footer>
        <nav>
          <button onClick={previousPage}>Previous Page</button>
          <button onClick={nextPage}>Next Page</button>
        </nav>
      </footer>
    </section>
  );
}
