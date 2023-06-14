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
            <h2>Fetching local data</h2>
          </header>

          <ArticleFeed />
          
        </section>

        <section id='sectionExternalData' className='section'>
          <header>
            <h2>Fetching external data</h2>
          </header>

          
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
