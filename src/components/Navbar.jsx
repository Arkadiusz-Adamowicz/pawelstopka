import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <nav className='w-full h-[40px] bg-[black]'>
      <div className='max-w-[1200px] h-full mx-auto flex justify-between items-center text-white p-3'>
        <Link to='/'>
          <h2 className='font-bold text-2xl '>
            Paweł<span className='text-indigo-500'>Stopka</span>
          </h2>
        </Link>

        <div className='nav'>
          <ul className='hidden md:flex'>
            <li>
              <Link to='/'>Strona Główna</Link>
            </li>
            <li>
              <Link to='/about'>O mnie</Link>
            </li>
            <li>
              <Link to='/offer'>Oferta</Link>
            </li>
            <li>
              <Link to='/contact'>Kontakt</Link>
            </li>
          </ul>
        </div>
        <div className='block md:hidden right-3 z-[10]' onClick={handleNav}>
          {!nav ? (
            <AiOutlineClose size={25} className='cursor-pointer' />
          ) : (
            <AiOutlineMenu size={25} className='cursor-pointer' />
          )}
        </div>
      </div>

      <div
        className={
          nav
            ? 'md:hidden flex justify-center items-center text-center h-screen w-full fixed top-0 left-[-100%] mobile-nav transition-all duration-300 z-[1]'
            : 'md:hidden flex justify-center items-center text-center h-screen w-full fixed top-0 left-[0] mobile-nav transition-all duration-300 z-[1]'
        }
      >
        <ul>
          <li>
            <Link to='/' onClick={handleClose}>
              Strona Główna
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={handleClose}>
              O mnie
            </Link>
          </li>
          <li>
            <Link to='/offer' onClick={handleClose}>
              Oferta
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={handleClose}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
