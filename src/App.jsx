import './App.css'
import { ArticleFeed } from './components/ArticleFeed/ArticleFeed'

function App() {
  return (
    <div className='App'>
      <header className='navbar'>
        <h1>Async React</h1>

        <nav>
          <ul>
            <li>
              <a href="#sectionLocalData">Local</a>
            </li>
            <li>
              <a href="#sectionExternalData">External</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id='sectionLocalData' className='section'>
          <header>
            <h2>Fetching data</h2>
          </header>

          <ArticleFeed />
          
          <footer>
            <nav>
              <h3>Further Reading</h3>
              <ul className='external-links'>
                <li>
                  <a target='_blank' href="https://react.dev/reference/react/useEffect">React useEffect</a>
                </li>
                <li>
                  <a target='_blank' href="https://react.dev/learn/reusing-logic-with-custom-hooks">React custom hooks</a>
                </li>
                <li>
                  <a target='_blank' href="https://web.dev/fetch-api-error-handling/">Article about Error handling</a>
                </li>
                <li>
                  <a target='_blank' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch">MDN Try..catch</a>
                </li>
              </ul>
            </nav>
          </footer>
        </section>
      </main>

      <footer className='footer'>
        <h2>
          &copy; Lars Gunnar
        </h2>
      </footer>
    </div>
  )
}

export default App
