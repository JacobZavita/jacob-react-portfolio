import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

import Appbar from './components/Appbar'
import Footer from './components/Footer'

import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Appbar />
        <Switch>
          <Route exact path=''>
            <About />
          </Route>
          <Route exact path='/jacob-react-portfolio/portfolio'>
            <Portfolio />
          </Route>
          <Route exact path='/jacob-react-portfolio/contact'>
            <Contact />
          </Route>
          <Route exact path='/jacob-react-portfolio/resume'>
            <Resume />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
