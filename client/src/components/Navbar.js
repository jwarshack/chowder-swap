import React from 'react';
import './Navbar.css';
import logo from '../img/chowder-logo.png';
import { NavLink } from 'react-router-dom';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { shortAddress } from '../utils/helpers';

function Navbar() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  return (
    <div className='navbar__container'>
      <div className='navbar__logoContainer'>
        <img src={logo} height='30px' width='30px' alt='logo'/>
      </div>
      <div className='navbar__btnContainer'>
        <NavLink to='/' activeClassName='navbar__selected'><button className='navbar__btn'>Swap</button></NavLink>
        <NavLink to='/pool'><button className='navbar__btn'>Pool</button></NavLink>
      </div>
      <button className='navbar__connectBtn' onClick={!isConnected ? connect : disconnect}>{!isConnected ? 'Connect Wallet' : shortAddress(address)}</button>

    </div>
  )
}

export default Navbar;