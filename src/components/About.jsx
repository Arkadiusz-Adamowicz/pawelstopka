import React from 'react';
import { motion } from 'framer-motion';
import foto from '../assets/pawel.webp';
import { BsFacebook } from 'react-icons/bs';

const About = () => {
  return (
    <section className='max-w-[1200px] mx-auto px-3 bg-white h-full rounded-xl'>
      <motion.div
        className='flex md:flex-row md:gap-8 md:p-8 p-6 flex-col-reverse justify-around items-center h-full'
        transition={{ duration: 0.2, delay: 0.2 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className='w-full h-full md:ml-5 max-w-[700px]'>
          <h1 className='text-4xl md:text-left text-center font-bold md:py-4 py-3 leading-[3rem]'>
            Specjalista
            <span className='text-[#6366F1]'> marketingu internetowego</span>
          </h1>
          <div className='text-md leading-8'>
            <p className='pb'>Dzień dobry !</p>

            <p className='pb'>
              Perswazja to sztuka przekonywania a raczej wpływania na kogoś, w
              taki sposób, by skłonić ją do określonych zachowań. Warto
              zrozumieć psychologię zachowań ludzkich i konsumentów, by
              skuteczniej sprzedawać i tworzyć wokół siebie grupę stałych i
              zadowolonych klientów.
            </p>

            <p className='pb'>
              Pracowałem w różnych instytucjach finansowych, w których od
              podstaw uczyłem się sprzedaży. Doświadczenie zdobywałem w branży
              windykacyjnej, w której odzyskałem ponad 12 mln złotych
              zaległości.
            </p>

            <p className='pb'>
              Marketing internetowy to moja pasja. Tworzyłem strony pod
              affiliacje i reklamy. Prowadziłem kampanie reklamowe na Facebooku
              i google. Teraz tworzę dla moich klientów.
            </p>
            <p className='pb'>
              Dzielę się wiedzą i pomagam właścicielom firm a także osobom,
              które aktywnie działają w internecie w sprzedaży i promocji ich
              biznesów.
            </p>
            <p className='mb-2'>
              Porozmawiajmy o{' '}
              <span className='p-color text-lg font-bold'>Twoim</span> projekcie
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <motion.img
            src={foto}
            alt='foto'
            transition={{ duration: 1, delay: 0.2 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className='md:w-[80%] md:h-[80%] w-[50%] h-[50%] object-contain rounded-full border-2 border-[#6366F1]'
          ></motion.img>
          <h2 className='p-4'>Pawel Stopka</h2>
          <motion.div
            transition={{ repeat: Infinity, duration: 2 }}
            animate={{ rotate: [-10, 10, -10] }}
          >
            <a href='https://www.facebook.com/financepawel/' target='_blank'>
              <BsFacebook className='md:text-5xl text-4xl p-color cursor-pointer z-0' />
            </a>
          </motion.div>
          <p className='mt-3'>facebook.com/financepawel</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
