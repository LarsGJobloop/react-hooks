import './styles/normalize.css'
import './styles/palettes.css'
import './styles/typography.css'
import './index.css'
import './App.css'

import { ArticleFeed } from './components/ArticleFeed/ArticleFeed'
import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Navbar />

      <main>
        <section className='section'>
          <header id='main'>
            <h2>Fetching data</h2>
          </header>

          <ArticleFeed id="feed" />
          
          <footer>
            <nav id='links'>
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

      <Footer />
    </div>
  )
}

export default App
