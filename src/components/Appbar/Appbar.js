import { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { Link } from 'react-router-dom'

const styles = {
  links: {
    textDecoration: 'none',
    color: 'inherit'
  }
}

const Appbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand>
          <Link to='/' style={styles.links}>
            Jacob Zavita - Full Stack Web Development
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink>
                <Link to='/portfolio' style={styles.links}>
                  Portfolio
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to='/contact' style={styles.links}>
                  Contact
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Appbar