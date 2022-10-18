import React from 'react';
import book from '../assets/book.webp';
import marketing from '../assets/marketing.webp';
import { motion } from 'framer-motion';

const Home = () => (
  <section className='max-w-[1200px] h-full mx-auto'>
    <div className='bg-white h-full w-full text-center rounded-xl no-scrollbar'>
      <motion.div
        transition={{ duration: .5 }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className='md:text-[5rem] text-5xl font-bold md:p-7 p-3 leading-[4rem] md:leading-[6rem]'>
          <span className='text-[#6366F1] md:text-6xl text-4xl'>
            Perswazyjny
          </span>{' '}
          <br />
          Marketing Internetowy
        </h1>
        <h2 className='p-4 mt-[-1rem] font-bold text-xl text-gray-500'>Nie potrzebujesz lajków i dużej społeczności by pozyskiwać klientów !</h2>
        <div>
          <img src={marketing} alt='marketing' className='md:hidden block' />
        </div>
      </motion.div>
      <div className='flex gap-6 md:flex-row flex-col p-6'>
        <div className='p-4 max-w-[650px] md:ml-4'>
          <div className='flex justify-center items-center'>
            <motion.h2
              className='text-2xl p-color font-bold mb-4 leading-[2rem]'
              transition={{ duration: .5, delay: .5 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Nauczę cię jak mówić i pisać, by sprzedawać pod radarem klienta.
            </motion.h2>
          </div>
          <motion.p
            className='leading-8 text-left md:text-[1.1rem]'
            transition={{ duration: .5, delay: 1 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Jeśli odkryjesz jak właściwie posługiwać się perswazją, to otworzysz
            portfele klientów, którzy chętnie zakupią produkt lub usługę właśnie
            od Ciebie. Przejdźmy razem przez 5 dniowy kurs wartościowej wiedzy z
            konkretnymi przykładami, które od razu możesz wdrożyć w swoim
            biznesie 
          </motion.p>
        </div>
        <div className='flex justify-center md:ml-0 ml-6'>
          <motion.img
            src={book}
            alt='book'
            className='w-[60%] object-contain'
            transition={{ repeat: Infinity, duration: 5 }}
            animate={{ scale: [1, 1.09, 1] }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
