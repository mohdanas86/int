import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="w-full shadow">
        <div className="w-full md:w-[80%] m-auto py-4 px-4 md:px-0 flex justify-between items-center text-slate-900">
          {/* LOGO */}
          <div className="logo flex justify-center items-center text-lg font-semibold">
            <a href="/">Stomilar</a>
          </div>

          {/* MENU */}
          <div className="menu flex justify-center items-center text-2xl" onClick={() => setShowMenu(prev => !prev)}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>

      {/* OVERLAY MENU ON CLICK ICON */}
      <div className={`h-full w-full fixed top-0 left-0 flex justify-center items-center bg-[#4b4b4b5f] to-slate-900 duration-300 ${!showMenu ? "hidden" : "flex"}`} onClick={() => setShowMenu(prev => !prev)}>
        <div className="h-full w-[60%] fixed top-0 left-0 flex justify-start items-start bg-white text-slate-900 duration-300 py-4 px-4" onClick={(e) => e.stopPropagation()}>
          <ul className="w-full gap-3 flex flex-col justify-center items-start mt-12">
            <li className="list-none"><a href="/">Home</a></li>
            <li className="list-none"><a href="/">About</a></li>
            <li className="list-none"><a href="/">Course</a></li>
            <li className="list-none"><a href="/">Privacy & Policy</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
