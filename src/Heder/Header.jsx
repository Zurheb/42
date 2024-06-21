import React, { useContext } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { LuSun } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";
import { TestApi } from "../TestContext/TestContext";
import { LocalizationApi } from "../Localization/Localization";
import languageChanger from "../utils/languageChanger";
import ModeChanger from "../utils/ModeChanger";
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0  lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className={`font-medium ${ModeChanger("","text-white")}`}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          {languageChanger("Home", "Дом", "Bosh Shahifa")}
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className={`font-medium ${ModeChanger("","text-white")}`}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          {languageChanger("Curs", "Курсы", "Kurslar")}
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className={`font-medium ${ModeChanger("","text-white")}`}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          {languageChanger("Something", "Предложения", "Taklifimiz")}
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className={`font-medium ${ModeChanger("","text-white")}`}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          {languageChanger("Comunity", "Группа", "Jamoa")}
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className={`font-medium ${ModeChanger("","text-white")}`}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          {languageChanger("Student", "Ученики", "Oquvchilar")}
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className={`font-medium ${ModeChanger("","text-white")}`}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          {languageChanger(" Contact Us", "Контакты", "Bis bilan boglanig")}
        </ListItem>
      </Typography>
    </List>
  );
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const { theme, ToggleTheme } = useContext(TestApi);
  const { language, setLanguage } = useContext(LocalizationApi);
  return (
    <header className="mx-auto max-w-screen-xl">
       <Navbar
      className={`  px-4 py-2 ${ModeChanger(
        "",
        "bg-black "
      )}`}
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          <img
            className="w-14 h-12"
            src="https://static.wikia.nocookie.net/the-jh-movie-collection-official/images/6/6f/42_Logo.png"
            alt=""
          />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-10 lg:flex">
          <div className="relative">
            <select
              defaultValue="uz"
              onChange={(e) => setLanguage(e.target.value)}
              className={`block appearance-none w-full  border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white ${ModeChanger("bg-white","bg-black text-white border-none focus:bg-black")} focus:border-gray-500`}
            >
              <option value="en">English</option>
              <option value="ru">Russian</option>
              <option value="uz">Uzbek</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 0 1-.7-.29l-4-4a1 1 0 0 1 1.42-1.42L10 10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-.7.29z"
                />
              </svg>
            </div>
          </div>

          <button className={`${ModeChanger("","text-white")}`} onClick={ToggleTheme}>
            {theme === "light" ? <IoMoon  /> : <LuSun />}
          </button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full justify-between flex-nowrap items-center gap-2 lg:hidden">
        <div className="relative">
        <select
              defaultValue="uz"
              onChange={(e) => setLanguage(e.target.value)}
              className={`block appearance-none w-full  border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white ${ModeChanger("bg-white","bg-black text-white border-none focus:bg-black")} focus:border-gray-500`}
            >
              <option value="en">English</option>
              <option value="ru">Russian</option>
              <option value="uz">Uzbek</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 0 1-.7-.29l-4-4a1 1 0 0 1 1.42-1.42L10 10.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-.7.29z"
                />
              </svg>
            </div>
          </div>
          <button className={`${ModeChanger("text-black","text-white")}`} onClick={ToggleTheme}>
            {theme === "light" ? <IoMoon  /> : <LuSun />}
          </button>
        </div>
      </Collapse>
    </Navbar>
    </header>
   
  );
}
