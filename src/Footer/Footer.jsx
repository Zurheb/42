import React from 'react';
import { FaGithub, FaInstagram, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';
import ModeChanger from '../utils/ModeChanger';
import languageChanger from '../utils/languageChanger';

const Footer = () => {
  return (
    <footer className={` ${ModeChanger("","` bg-gray-900 text-gray-300")} py-20 px-4 md:px-16 lg:px-32`}>
      <div className="flex flex-col  justify-between items-center">
        <div className="mb-6 flex gap-20 md:mb-0">
          <a href="#" className="block mb-2 hover:text-orange-500">{languageChanger("About us","О нас","Biz haqimizda")}</a>
          <a href="#" className="block mb-2 hover:text-orange-500">{languageChanger("Curs","Курсы","Kurslar")}</a>
          <a href="#" className="block mb-2 hover:text-orange-500">42Podcast</a>
          <a href="#" className="block hover:text-orange-500">FAQ</a>
        </div>
        <div className="flex items-center mt-5  space-x-10">
          <FaInstagram className="text-gray-400 hover:text-red-500" size={27} />
          <FaTelegram className="text-gray-400 hover:text-red-500" size={27} />
          <FaTwitter className="text-gray-400 hover:text-red-500" size={27} />
          <FaGithub className="text-gray-400 hover:text-red-500" size={27} />
          <FaYoutube className="text-gray-400 hover:text-red-500" size={27} />
        </div>
      
      <div className="mt-8 text-center md:text-right">
        <p className="text-sm">&copy; 2023 QIRIKKI LLC.{languageChanger("All rights reserved.","Все права защищены.","Barcha huquqlar himoyalangan.")}</p>
        <div className="mt-2 text-center">
          <a href="#" className="text-sm hover:text-orange-500 mr-4">Terms and Conditions</a>
          <a href="#" className="text-sm hover:text-orange-500">Privacy Policy</a>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
