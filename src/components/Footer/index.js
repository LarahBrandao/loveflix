import React from 'react';
import Logo from '../../assets/images/loveflix@logo.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://loveflix.vercel.app/">
        <img src={Logo} alt="Logo LoveFlix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/"> Imersão React da Alura </a> 
       {/* eslint-disable-next-line */}
    por <a href="https://www.linkedin.com/in/larahbrandao/">  <strong>Larah Brandão 🌹</strong> </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
