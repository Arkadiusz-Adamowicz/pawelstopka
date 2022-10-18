import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <section className='max-w-[1200px] mx-auto text-white text-center'>
    <div>
      <ul className='flex md:flex-row flex-col justify-center items-center w-full m-2'>
        <Link to='/'>
          <li>Strona Główna</li>
        </Link>
        <Link to='/contact'>
          <li>Kontakt</li>
        </Link>
        <Link to='/privacy'
        >
          <li>Polityka Prywatności</li>
        </Link>
      </ul>
    </div>
    <p>Copyright © 2022</p>
  </section>
);

export default Footer;

