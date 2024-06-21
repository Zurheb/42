import React from "react";
import Heads from "../assets/heads.svg";
import { Carousel, Rating } from "@material-tailwind/react";
import languageChanger from "../utils/languageChanger";
import ModeChanger from "../utils/ModeChanger";

 export const Something = () => {
  return (
    <section className={`py-12 px-4 ${ModeChanger("","bg-black text-white")} `}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-8">Bizning o'quvchilar</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          O'quvchilarimizning ish joylariga qo'ng'iroq qilamiz va ularning o'zlarining o'zgartiriladigan natijalariga tanishamiz.
        </p>
      </div>
      <img className="mx-auto mt-8 md:mt-12 max-w-full" src={Heads} alt="Students" />
      <div className="py-20">
         <Carousel
      className="rounded-xl"
      loop={true}
      autoplay={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="max-w-2xl mx-auto">
        <div className={`bg-gray-100 ${ModeChanger("` bg-gray-100","bg-blue-gray-600 " )} rounded-2xl shadow-2xl border border-gray-600  p-6`}>
          <img className="rounded-full w-20 h-20 mb-4 mx-auto" src="https://42.uz/_next/image?url=%2Fstudents%2F1688970568501.jpeg&w=128&q=75" alt="Shukhrat Mirrakhimov" />
          <div className="text-center">
            <h1 className="text-lg font-bold mb-1">Shukhrat Mirrakhimov</h1>
            <div className="flex justify-center gap-5">
                <p className={`text-sm  ${ModeChanger("text-gray-600","text-gray-300")}`} >Software Engineer Intern </p>
                <img className="w-14" src="https://42.uz/_next/image?url=%2Fcompanies%2Fgoogle.png&w=128&q=75" alt="" />
            </div>
            
          </div>
          <p className={`text-sm ${ModeChanger("text-gray-600", "text-gray-300")} mt-4`}>
            {languageChanger("I'm so excited to announce that I will be joining Google Assistant team at Google Zürich as a STEP Intern this summer. I have always been so curious about working at Google and now I am super excited.","Я так рад сообщить, что этим летом я присоединяюсь к команде Google Assistant в Google Zürich в качестве стажера STEP. Мне всегда было интересно работать в Google, и теперь я очень взволнован.","Shu yozda Google Tsyurixdagi Google Assistant jamoasiga STEP Intern sifatida qo‘shilishimni e’lon qilishdan juda xursandman. Men har doim Googleda ishlashga juda qiziqganman va hozir juda hayajondaman.")}
          </p>
          <div className="flex items-center  text-center  justify-center mt-4">
            <p className="text-lg font-bold mr-1">5.0</p>
            <Rating unratedColor="amber" ratedColor="amber" />
          
          <a href="#" className="block text-blue-600 mt-1 text-sm hover:underline">On LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className={`bg-gray-100 ${ModeChanger("` bg-gray-100","bg-blue-gray-600 " )} rounded-2xl shadow-2xl border border-gray-600  p-6`}>
          <img className="rounded-full w-20 h-20 mb-4 mx-auto" src="https://42.uz/_next/image?url=%2Fstudents%2F1688970568501.jpeg&w=128&q=75" alt="Shukhrat Mirrakhimov" />
          <div className="text-center">
            <h1 className="text-lg font-bold mb-1">Shukhrat Mirrakhimov</h1>
            <div className="flex justify-center gap-5">
                <p className={`text-sm  ${ModeChanger("text-gray-600","text-gray-300")}`}>Software Engineer Intern </p>
                <img className="w-14" src="https://42.uz/_next/image?url=%2Fcompanies%2Fgoogle.png&w=128&q=75" alt="" />
            </div>
            
          </div>
          <p className={`text-sm ${ModeChanger("text-gray-600", "text-gray-300")} mt-4`}>
            {languageChanger("I'm so excited to announce that I will be joining Google Assistant team at Google Zürich as a STEP Intern this summer. I have always been so curious about working at Google and now I am super excited.","Я так рад сообщить, что этим летом я присоединяюсь к команде Google Assistant в Google Zürich в качестве стажера STEP. Мне всегда было интересно работать в Google, и теперь я очень взволнован.","Shu yozda Google Tsyurixdagi Google Assistant jamoasiga STEP Intern sifatida qo‘shilishimni e’lon qilishdan juda xursandman. Men har doim Googleda ishlashga juda qiziqganman va hozir juda hayajondaman.")}
          </p>
          <div className="flex items-center text-center justify-center mt-4">
            <p className="text-lg font-bold mr-1">5.0</p>
            <Rating unratedColor="amber" ratedColor="amber" />
          <a href="#" className="block text-blue-600 mt-1 text-sm hover:underline">On LinkedIn</a>
           </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className={`bg-gray-100 ${ModeChanger("` bg-gray-100","bg-blue-gray-600 " )} rounded-2xl shadow-2xl border border-gray-600  p-6`}>
          <img className="rounded-full w-20 h-20 mb-4 mx-auto" src="https://42.uz/_next/image?url=%2Fstudents%2F1688970568501.jpeg&w=128&q=75" alt="Shukhrat Mirrakhimov" />
          <div className={`text-center ${ModeChanger("","")}`}>
            <h1 className="text-lg font-bold mb-1">Shukhrat Mirrakhimov</h1>
            <div className="flex justify-center gap-5">
                <p className={`text-sm  ${ModeChanger("text-gray-600","text-gray-300")}`}>Software Engineer Intern </p>
                <img className="w-14" src="https://42.uz/_next/image?url=%2Fcompanies%2Fgoogle.png&w=128&q=75" alt="" />
            </div>
            
          </div>
          <p className={`text-sm ${ModeChanger("text-gray-600", "text-gray-300")} mt-4`}>
            {languageChanger("I'm so excited to announce that I will be joining Google Assistant team at Google Zürich as a STEP Intern this summer. I have always been so curious about working at Google and now I am super excited.","Я так рад сообщить, что этим летом я присоединяюсь к команде Google Assistant в Google Zürich в качестве стажера STEP. Мне всегда было интересно работать в Google, и теперь я очень взволнован.","Shu yozda Google Tsyurixdagi Google Assistant jamoasiga STEP Intern sifatida qo‘shilishimni e’lon qilishdan juda xursandman. Men har doim Googleda ishlashga juda qiziqganman va hozir juda hayajondaman.")}
          </p>
          <div className="flex items-center text-center justify-center mt-4">
            <p className="text-lg font-bold mr-1">5.0</p>
            <Rating unratedColor="amber" ratedColor="amber" />
          <a href="#" className="block text-blue-600 mt-1 text-sm hover:underline">On LinkedIn</a>
          </div>
        </div>
      </div>
    </Carousel>
      </div>
     
    </section>
  );
};


