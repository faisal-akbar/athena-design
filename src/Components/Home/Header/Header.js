import React from 'react';
import HeaderMain from './HeaderMain';
import Navbar from '../Navbar/Navbar';

import './Header.css';
import Price from '../../Price/Price';
import Services from '../../Services/Services';
import Project from '../../Project/Project';
import Footer from '../../Footer/Footer';

const Header = () => {
  document.title = "Creative Agency";
  return (
    <main className="container ">
      <div className='header-container'>
        <Navbar></Navbar>
        <HeaderMain></HeaderMain>
       </div>
       
     
      <Project/>
      
     
     
    </main>
  );
};

export default Header;
