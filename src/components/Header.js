import React from 'react'
import Logo from '../assets/logofb.png'

function Header () {
  return (
    <div id="header">
      <div>
        <img height="50px" src={Logo} alt="logofb"/>
      </div>
      <div>
        <a id="profile" href="/perfil"><h2>Meu perfil<i className="fas fa-user"></i></h2></a>
      </div>
    </div>
  )
}

export default Header;
