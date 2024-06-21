import React from 'react'
import interactive from "../assets/look_down.svg";
import interactive1 from "../assets/interactive.svg";
import mix from "../assets/mix.svg";
import backend from "../assets/backend.svg";
import books from "../assets/books.svg";
import frontend from "../assets/frontend.svg";
import mobil from "../assets/mobile.svg";
import languageChanger from '../utils/languageChanger';
import ModeChanger from '../utils/ModeChanger';
import light from "../assets/light.gif";

const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="relative  rounded-lg border  p-2  hover:shadow-lg transition-all duration-200 ease-in-out">
        <div className="flex flex-col gap-3 justify-between rounded-md p-6">
          <img
            alt="team"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            data-nimg="1"
            className={`w-20 h-20 ${ModeChanger("","filter invert-[0.9]")}`}
            style={{ color: 'transparent' }}
            src={icon}
          />
          <div className="space-y-2">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm ">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  
export const Section1 = () => {
    const features = [
        {
          icon: interactive1,
          title: languageChanger("Interactive lessons","Интерактивные уроки","Interaktiv darslar"),
          description: languageChanger("Learn to program at your own pace","Научитесь программировать в своем собственном темпе","O'zingizga qulay vaqtingizda dasturlashni o'rganing"),
        },
        {
          icon: books,
          title: languageChanger("High quality lessons","Уроки высокого качества","Yuqori sifatdagi darslar"),
          description: languageChanger("Learn interesting lessons for 42 days","Изучайте интересные уроки в течение 42 дней","Qiziqarli darslarni 42 kun mobaynida o\'rganing"),
        },
        {
          icon: mix,
          title: languageChanger("Cross learning opportunity","Возможность перекрестного обучения","Kross o'rganish imkoniyati"),
          description: languageChanger("Learn the basics of programming in 3 directions in 42 days","Изучите основы программирования по 3 направлениям за 42 дня","42 kun ichida 3 yo'nalishda dasturlash asoslarini o'rganing"),
        },
        {
          icon: backend,
          title: languageChanger("Backend Basics","Основы бэкэнда","Backend Asoslari"),
          description: languageChanger("Learn backend basics","Изучите основы бэкэнда","Backend asoslari bilan tanishing"),
        },
        {
          icon: frontend,
          title: languageChanger("Frontend Basics","Основы фронтенда","Frontend Asoslari"),
          description: languageChanger("Learn the basics of frontend","Фронтенд asoslari bilan tannishing","Frontend asoslari bilan tanishing"),
        },
        {
          icon: mobil ,
          title: languageChanger("Fundamentals of mobile programming","Основы мобильного программирования","Mobil dasturlash asoslari"),
          description: languageChanger("Learn the basics of mobile programming","Изучите основы мобильного программирования","Mobil dasturlash asoslari bilan tanishing"),
        },
      ];
  return (
<>
<section className={`mx-auto p-10 max-w-screen-xl py-8 ${ModeChanger("","bg-black text-white ")} `}>
<div className="z-10 relative flex flex-col md:flex-row items-end">
      <div className="flex flex-col items-start space-y-4 text-left py-4">
        <h2 className=" text-3xl font-semibold  sm:text-3xl md:text-6xl">{languageChanger("What awaits you?","Что вас ждет?","Sizni nima kutmoqda?")}</h2>
        <p className="text-left max-w-[65%]   sm:text-lg ">
          {languageChanger("Learn the basics of programming from the pros in 42 days through an interactive programming learning environment!","Изучите основы программирования у профессионалов за 42 дня в интерактивной среде обучения программированию!","Interaktiv dasturlashni o'rganish muhiti orqali proffessionllardan dasturlash asoslarini 42 kun ichida o'rganing!")}
        </p>
      </div>
      <img
        alt="team"
        loading="lazy"
        width="200"
        height="200"
        decoding="async"
        data-nimg="1"
        className={`relative -mb-4 ${ModeChanger("","filter invert-[0.9]")} `}
        style={{ color: 'transparent' }}
        src={interactive}
      />
    </div>
    <div className="z-0 mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
    <div className=' flex flex-col  items-center '>
    <p className=" py-14  max-w-[650px]  text-center sm:text-lg">
      {languageChanger("After 42 days, you will learn the basics of programming and choose one of 3 directions!","Через 42 дня вы изучите основы программирования и выберете одно из 3 направлений!","42 kundan so'ng siz dasturlash asoslari bilan tanishasiz va 3 yo'nalishdan birini tanlaysiz!")}
    </p>
    <div>
         <a
            href="#"
            className={`inline-flex  ${ModeChanger("bg-black text-white","bg-white text-black")} items-center justify-center text-sm  fbone   h-11 rounded-md px-8  md:text-xl font-semibold md:py-8`}
          >
            <img
              alt="ZapIcon"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              className="mr-2"
              src={light}
              style={{ color: 'transparent' }}
            />
           {languageChanger("Participation","Участвовать"," Ishtirok etish")}
          </a>
    </div>
    </div>
    <div className='py-20'>
    <div className="mx-auto flex max-w-[928px] flex-col items-center space-y-4 text-center">
        <h2 className="text-3xl font-semibold  sm:text-3xl md:text-6xl">{languageChanger("Until today","До сегодняшнего дня","Shu kunga qadar")}</h2>
        <p className="max-w-[85%]  sm:text-lg ">{languageChanger("Our goal is to help students become professional IT professionals.","Наша цель — помочь студентам стать профессиональными ИТ-специалистами.","Bizning maqsadimiz - o'quvchilarni IT sohasida professional mutaxassislar bo'lishiga yordam berish.")}</p>
      </div>
      <dl className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className={`rounded-lg px-4 py-5 shadow flex flex-col ${ModeChanger("","bg-blue-gray-600")} gap-4 sm:p-6  hover:shadow-md`}>
          <dt className=" text-xl font-medium ">{languageChanger("Average team experience","Средний опыт команды","O'rtacha jamoaviy tajriba")}</dt>
          <dd className="mt-1 text-5xl font-semibold ">5+ {languageChanger("year","год","yil")}</dd>
        </div>
        <div className={`rounded-lg px-4 py-5 shadow flex flex-col ${ModeChanger("","bg-blue-gray-600")} gap-4 sm:p-6  hover:shadow-md`}>
          <dt className="text-xl font-medium">{languageChanger("Total number of students","Общее количество студентов","Umumiy o'quvchilar soni")}</dt>
          <dd className="mt-1 text-5xl font-semibold ">422+</dd>
        </div>
        <div className={`rounded-lg px-4 py-5 shadow flex flex-col ${ModeChanger("","bg-blue-gray-600")} gap-4 sm:p-6  hover:shadow-md`}>
          <dt className=" text-xl font-medium ">{languageChanger("Duration of written lessons","Продолжительность письменных занятий","Yozilgan darslar davomiyligi")}</dt>
          <dd className="mt-1 text-5xl font-semibold">61+ {languageChanger("hour","час","soat")}</dd>
        </div>
      </dl>
    </div>
</section>
</>
  )
}
