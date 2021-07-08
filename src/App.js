import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

import Appbar from './components/Appbar'

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Appbar />
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
