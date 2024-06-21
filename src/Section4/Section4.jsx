import React from "react";
import hahahaha from "../assets/hero-2.svg"
import light from "../assets/light.gif";
import ModeChanger from "../utils/ModeChanger";
import languageChanger from "../utils/languageChanger";

export const Section4 = () => {
  return (
    <section>
      <section className={`p-8 md:pt-24 ${ModeChanger("","bg-black text-white")} pb-0 flex flex-col gap-12`}>
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl font-semibold leading-[1.1] sm:text-3xl md:text-6xl">
            {languageChanger("Did we get you interested?","Мы вас заинтересовали?","Sizni qiziqtira oldikmi?")}
          </h2>
          <p className="max-w-5xl leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {languageChanger("Programming together with experts with international experience start learning!","Программирование вместе с экспертами с международным опытом начни учиться!", `Xalqaro tajribaga ega mutaxassislar bilan birga dasturlashni
            o'rganishni boshlang!`)}
          </p>
          <div className="w-full flex flex-col md:flex-row justify-center py-2 gap-1 md:gap-3">
            <a
              href="#"
              className={`inline-flex items-center ${ModeChanger("bg-black text-white","bg-white text-black")}  justify-center rounded-md text-sm font-medium   h-10 px-4 py-2`}
            >
              <img
                width="24"
                height="24"
                className="mr-1"
                src={light}
              />
              {languageChanger("Participation","Участвовать"," Ishtirok etish")}
            </a>
            <span className="border-l"></span>
            <a
              href="#"
              className={`inline-flex items-center ${ModeChanger("","bg-white text-black")} justify-center rounded-md text-sm font-medium   disabled:opacity-50 border-1  border-black h-10 px-4 py-2`}
            >
              {languageChanger("Do you have a question?","У вас есть вопрос?","Savolingiz bormi?")}
            </a>
          </div>
        </div>
        <img
          
          width="620"
          height="200"
          className={`w-full md:w-2/5 mx-auto ${ModeChanger("","invert-[0.85] filter")} `}
          src={hahahaha}
          
        />
      </section>
    </section>
  );
};
