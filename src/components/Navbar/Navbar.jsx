import style from "./style.module.css";

export function Navbar() {

  return (
    <header className={style['navbar']}>
        <h1>Async React</h1>

        <nav>
          <ul>
            <li>
              <a href="#main">Top</a>
            </li>
            <li>
              <a href="#feed">Feed</a>
            </li>
            <li>
              <a href="#links">Links</a>
            </li>
          </ul>
        </nav>
      </header>
  );
}
