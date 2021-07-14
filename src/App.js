import {
  HashRouter,
  // BrowserRouter as Router,
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
    <HashRouter>
      <div>
        <Appbar />
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'}>
            <About />
          </Route>
          <Route path='/jacob-react-portfolio/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/jacob-react-portfolio/contact'>
            <Contact />
          </Route>
          <Route path='/jacob-react-portfolio/resume'>
            <Resume />
          </Route>
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
