import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import {close} from '../assets/icons'
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Header logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray transition duration-500 hover:ease-linear hover:text-black hover:text-bold hover:underline "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={toggle?close:hamburger} alt="Hamburger" width={25} height={25} 
        onClick={()=>setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >

            <ul className="list-none flex justify-end items-start flex-col gap-4">

            {navLinks.map((item) => (
            <li key={item.label}
                className="font-palanquin font-medium cursor-pointer text-[15px] "
                onClick={()=>{
                    setToggle(!toggle);
                }}
            >
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray transition duration-500 hover:ease-linear hover:text-black hover:text-bold hover:underline "
              >
                {item.label}
              </a>
            </li>
          ))}

            </ul>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
