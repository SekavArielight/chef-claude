import React from 'react'
import chefClaudeLogo from "../assets/chef-claude-icon.png"

const Header = () => {
  return (
    <header>
        <img src={chefClaudeLogo} alt="chef claude logo" className='logo'/>
        <h1>Chef Claude</h1>
    </header>
  )
}

export default Header