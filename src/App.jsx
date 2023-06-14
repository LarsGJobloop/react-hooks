import "./styles/normalize.css";
import "./styles/palettes.css";
import "./styles/typography.css";
import "./App.css";

import { ArticleFeed } from "./components/ArticleFeed/ArticleFeed";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { LinkExternal } from "./components/LinkExternal/LinkExternal";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <section className="section">
          <header id="main">
            <h2>Fetching data</h2>
          </header>

          <ArticleFeed id="feed" />

          <footer>
            <nav id="links">
              <h3>Further Reading</h3>
              <ul className="external-links">
                <li>
                  <LinkExternal href="https://react.dev/reference/react/useEffect">
                    React useEffect
                  </LinkExternal>
                </li>
                <li>
                  <LinkExternal href="https://react.dev/learn/reusing-logic-with-custom-hooks">
                    React custom hooks
                  </LinkExternal>
                </li>
                <li>
                  <LinkExternal href="https://web.dev/fetch-api-error-handling/">
                    Article about Error handling
                  </LinkExternal>
                </li>
                <li>
                  <LinkExternal href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch">
                    MDN Try..catch
                  </LinkExternal>
                </li>
                <li>
                  <LinkExternal href="https://jsdoc.app/tags-typedef.html">
                    JSDoc Type definition
                  </LinkExternal>
                </li>
              </ul>
            </nav>
          </footer>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
