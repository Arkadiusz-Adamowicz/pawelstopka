import React from 'react';
import { motion } from 'framer-motion';
import { GiGps } from 'react-icons/gi';
import { BsClock, BsFacebook } from 'react-icons/bs';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <section className='max-w-[1200px] h-full mx-auto'>
      <div className='bg-white h-full w-full text-center rounded-xl no-scrollbar'>
        <motion.div
          className='flex justify-center pt-4'
          transition={{ duration: 0.5, delay: 0.2 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className='text-4xl md:text-left text-center font-bold md:py-2 py-4 leading-[3rem]'>
            Zapraszam <span className='text-[#6366F1]'>do współpracy</span>
          </h1>
        </motion.div>
        <motion.div
          transition={{ duration: 0.5, delay: 0.8 }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className='flex flex-1 gap-6 md:flex-row flex-col justify-evenly p-6'
        >
          <div className='h-auto w-full'>
            <div className='flex flex-col max-w-[500px] h-full  mt:2 mx-auto leading-10 text-left'>
              <div>
                <h2 className='text-2xl border-b border-[#6366F1] inline'>
                  Paweł Stopka
                </h2>
              </div>
              <div className='flex mt-2 px-3 justify-center items-center'>
                <GiGps size={35} style={{ color: '#6366F1' }} />
                <div className='flex flex-col ml-2 w-full p-2'>
                  <p>
                    ul. Lubomierska 14, <br className='md:hidden block' />{' '}
                    54-062 Wrocław{' '}
                  </p>
                </div>
              </div>
              <a href='tel:695-810-303'>
                <div className='flex mt-2 px-3 justify-center items-center cursor-pointer'>
                  <AiOutlinePhone size={35} style={{ color: '#6366F1' }} />
                  <div className='flex flex-col ml-2 w-full p-2'>
                    <p>695-810-303</p>
                  </div>
                </div>
              </a>

              <div className='flex mt-2 px-3 justify-center items-center'>
                <BsClock size={30} style={{ color: '#6366F1' }} />
                <div className='flex flex-col ml-2 w-full p-2'>
                  <p>
                    Poniedziałek-Sobota <br className='md:hidden' />
                    (10:00-19:00)
                  </p>
                </div>
              </div>

              <a href='mailto: pawelstopka@gmail.com'>
                <div className='flex mt-2 px-3 justify-center items-center cursor-pointer'>
                  <AiOutlineMail size={35} style={{ color: '#6366F1' }} />
                  <div className='flex flex-col ml-2 w-full p-2'>
                    <p>pawelstopka@gmail.com </p>
                  </div>
                </div>
              </a>
              <a href='https://www.facebook.com/financepawel/' target='_blank'>
                <div className='flex mt-2 px-3 justify-center items-center cursor-pointer'>
                  <BsFacebook size={35} style={{ color: '#6366F1' }} />
                  <div className='flex flex-col ml-2 w-full p-2'>
                    <p>facebook.com/financepawel </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className='h-full w-full'>
            <form
              target='_blank'
              action='https://formsubmit.co/arek.adamowicz81@gmail.com'
              method='POST'
              onSubmit='submit'
              className='flex flex-col max-w-[500px] w-full mx-auto'
            >
              <input
                type='text'
                name='name'
                placeholder='Imie' required
                className='w-full px-2 py-2 mb-2 rounded-xl border border-[#6366F1] outline-none'
              />

              <input
                type='email'
                name='email'
                placeholder='Email' required
                className='w-full px-2 py-2 mb-2 rounded-xl border border-[#6366F1] outline-none'
              />
              <input
                type='text'
                name='subject'
                placeholder='Temat' required
                className='w-full px-2 py-2 mb-2 rounded-xl border border-[#6366F1] outline-none'
              />
              <textarea
                cols='30'
                rows='6'
                name='message'
                required
                className='w-full px-2 py-2 mb-2 rounded-xl border resize-none border-[#6366F1] outline-none'
              ></textarea>
              <p>
                <button
                  type='submit'
                  className='px-4 py-2 border rounded-lg p-bgcolor text-white'
                >
                  Wyślij
                </button>
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
