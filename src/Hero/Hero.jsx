import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@material-tailwind/react";
import light from "../assets/light.gif";
import hey from "../assets/hey.svg";
import languageChanger from "../utils/languageChanger";
import ModeChanger from "../utils/ModeChanger";
export const Hero = () => {
  return (
    <section className={`mx-auto max-w-screen-xl p-6 md:p-12 pb-0 md:pb-0 shadow-sm rounded-md flex items-start md:items-end flex-col md:flex-row gap-4 justify-between ${ModeChanger("","bg-black text-white")} min-h-64`}>
      <div className="flex flex-col gap-4 pb-12 w-full">
        <h2 className="text-4xl md:text-5xl text-start xl:text-6xl font-bold ">
          <span className="block sm:inline-block">{languageChanger("In 42 days","Через 42 дня","42 kunda")}</span>
          <span className="underline sm:mx-2">
            <span className="">
              <TypeAnimation
                sequence={[
                  'mobil',
                  1000, 
                  'Frontend', 
                  2000, 
                  'BachEnd',
                ]}
                wrapper="span"
                speed={50}
                cursor={true}
                repeat={Infinity}
                
              />
            </span>
          </span>
          <br />
          {languageChanger(`learn programming`,"изучать программирование","dasturlashni o'rganing")}
        </h2>
        <p className="max-w-lg text-lg">
          ⚡️ {languageChanger("Work on yourself for 42 days and find a way to your future!","Работайте над собой 42 дня и найдите путь в свое будущее!","42 kun o'z ustingizda ishlang va kelajagingiz sari yo'l toping!")}
        </p>
        <div className="">
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
      <img
        alt="team"
        loading="lazy"
        width="620"
        height="200"
        decoding="async"
        data-nimg="1"
        className={`w-full ${ModeChanger("","invert-[0.9] filter")} md:w-2/5`}
        src={hey}
        
      />
    </section>
  );
};
