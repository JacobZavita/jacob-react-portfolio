import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to ='/'>
              About
            </Link>
          </li>
          <li>
            <Link to='/portfolio'>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to='/contact'>
              Contact
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/'>
            <About />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
