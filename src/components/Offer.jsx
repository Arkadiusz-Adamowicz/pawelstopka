import React from 'react';
import {
  AiOutlinePieChart,
  AiOutlineLayout,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import OfferCard from './OfferCard';
import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { BiRocket } from 'react-icons/bi';
import { FaEdit } from 'react-icons/fa';
import { GoTasklist } from 'react-icons/go';
import { HiOutlineChatAlt2 } from 'react-icons/hi';

const Offer = () => {
  return (
    <section className='max-w-[1200px] h-full mx-auto'>
      <div className='bg-white md:h-full w-full text-center rounded-t-xl no-scrollbar'>
        <motion.h1
          className='text-4xl text-center font-bold py-6 leading-[3rem] md:pt-[2rem]'
          transition={{ duration: 0.5, delay: 0.5 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          W czym mogę <span className='text-[#6366F1]'> pomóc?</span>
        </motion.h1>
        <div className='grid grid-cols md:grid-cols-2 gap-1 pb-6'>
          <motion.div
            transition={{ duration: 0.5, delay: 1 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <OfferCard
              icon={<AiOutlineLayout size={60} />}
              heading='Perswazyjne Strony Internetowe'
              text='Otrzymasz  sprzedającą stronę internetową. Odpowiedni układ i odpowiednie słowa skutecznie będą zachęcać klientów do kontaktu z Tobą i skorzystania z Twoich usług. Strony zoptymalizowane pod kątem pozycjonowania, zgodne z wytycznymi google. Strony, które widoczne są wysoko w wyszukiwarce….'
            />
          </motion.div>
          <motion.div
            transition={{ duration: 0.5, delay: 1.5 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <OfferCard
              icon={<FiSend size={60} />}
              heading='Popularne Sklepy Internetowe'
              text='Otrzymasz dobrze poukładany sklep, zoptymalizowany pod seo (pozycjonowanie). Sklep zgodny z wytycznymi google i najlepszymi wskazówkami co do układu, kolorystyki czy rozmieszczenia produktów. Sklep, który sprzedaje.'
            />
          </motion.div>
          <motion.div
            transition={{ duration: 0.5, delay: 2 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <OfferCard
              icon={<AiOutlinePieChart size={60} />}
              heading='Skuteczne SEO & Facebook ADS'
              text='Poprowdzę dla Ciebie pozycjonowanie lokalne, stworzę dla Ciebie skuteczną reklamę pozyskiwania klientów. Strona będzie widoczna na właściwe słowa kluczowe, tak by przyprowadzały Tobie odpowiednich klientów – tych właściwych.'
            />
          </motion.div>
          <motion.div
            transition={{ duration: 0.5, delay: 2.5 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <OfferCard
              icon={<AiOutlineShareAlt size={60} />}
              heading='Efektywne Social Media'
              text='Poprowadzę Twoje konto na facebook’u, instagramie, lub zajmę się treściami na Twoim blogu. Pomogę stworzyć odpowiednie perswazyjne treści i zdjęcia, które przyciągają uwagę.'
            />
          </motion.div>
        </div>
      </div>
      <div className='separator w-full'></div>

      <div className='h-full w-full bg-[#6366F1]'>
        <motion.h1
          className='text-4xl text-center font-bold py-6 leading-[3rem]'
          transition={{ duration: 0.5, delay: 3 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Jak<span className='text-white'> pracuję?</span>
        </motion.h1>
        <div className='flex flex-wrap md:flex-row w-full flex-col justify-around items-center text-white'>
          <motion.div
            className='flex flex-col justify-center items-center p-2'
            transition={{ duration: 0.5, delay: 3.2 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className='hover:scale-125 hover:bg-indigo-800 hover:rounded-full hover:p-3 p-3 transition-all duration-300'>
              <HiOutlineChatAlt2 size={45} style={{ cursor: 'pointer' }} />
            </div>
            <h2 className='max-w-[200px] text-center p-4'>
              Rozmawiamy o Twoim projekcie
            </h2>
          </motion.div>
          <motion.div
            className='flex flex-col justify-center items-center p-2'
            transition={{ duration: 0.5, delay: 3.3 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className='hover:scale-125 hover:bg-indigo-800 hover:rounded-full hover:p-3 p-3 transition-all duration-300'>
              <FaEdit size={45} style={{ cursor: 'pointer' }} />
            </div>
            <h2 className='max-w-[200px] text-center p-4'>
              Masz gwarancje umowy
            </h2>
          </motion.div>

          <motion.div
            className='flex flex-col justify-center items-center p-2'
            transition={{ duration: 0.5, delay: 3.4 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className='hover:scale-125 hover:bg-indigo-800 hover:rounded-full hover:p-3 p-3 transition-all duration-300'>
              <GoTasklist size={45} style={{ cursor: 'pointer' }} />
            </div>
            <h2 className='max-w-[200px] text-center p-4'>
              Wspólnie ustalamy co trzeba zrobić
            </h2>
          </motion.div>

          <motion.div
            className='flex flex-col justify-center items-center p-2'
            transition={{ duration: 0.5, delay: 3.5 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className='hover:scale-125 hover:bg-indigo-800 hover:rounded-full hover:p-3 p-3 transition-all duration-300'>
              <BiRocket size={45} style={{ cursor: 'pointer' }} />
            </div>
            <h2 className='max-w-[200px] text-center p-4'>
              Uruchamiamy Twój projekt
            </h2>
          </motion.div>
        </div>
      </div>
      <div className='separator-reverse w-full rounded-b-xl'></div>
      <div>
        {/* pdf */}
      </div>
    </section>
  );
};

export default Offer;
