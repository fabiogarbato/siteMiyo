import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState } from 'react'

export function Header() {
  const [isActive, setActive] = useState(false)

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <Router>
        <div className="left-section">
          <HashLink smooth to="#home" className="logo">
            <span>{"Miyo "}</span>
            <span>{" 美代"}</span>
          </HashLink>
          <div className="controls">
            <input
              onChange={toggleTheme}
              className="container_toggle"
              type="checkbox"
              id="switch"
              name="mode"
            />
          </div>
        </div>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#horario" onClick={closeMenu}>
            Horário
          </NavHashLink>
          <NavHashLink smooth to="#cardapio-rodizio" onClick={closeMenu}>
            Cardápio Rodízio
          </NavHashLink>
          <NavHashLink smooth to="#bebidas" onClick={closeMenu}>
            Bebidas
          </NavHashLink>
          <NavHashLink smooth to="#delivery" onClick={closeMenu}>
            Delivery
          </NavHashLink>
          <NavHashLink smooth to="#blog" onClick={closeMenu}>
            Blog
          </NavHashLink>
          <NavHashLink smooth to="#contato" onClick={closeMenu}>
            Contato
          </NavHashLink>
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => setActive(!isActive)}
        ></div>
      </Router>
    </Container>
  )
}
