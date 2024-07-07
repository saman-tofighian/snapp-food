import { useState, useEffect } from "react";
import SnappLogo from "./../assets/Images/snappTextLogo-svg.svg";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { TiDeleteOutline } from "react-icons/ti";
import { useTranslation } from "react-i18next";

function Header() {
  return (
    <header className="w-full h-[96px] fixed top-0 left-0 z-[999999] bg-white shadow-md border-b-[1px] border-[#e5e5e5]">
      <nav className="w-full h-full px-[6%] flex items-center">
        <HeaderLogo />
        <HeaderLinks />
        <Language />
      </nav>
    </header>
  );
}

function HeaderLogo() {
  return (
    <figure className="w-1/2 xl:w-[16%] h-full flex justify-center items-center">
      <img src={SnappLogo} alt="Snapp Logo" />
    </figure>
  );
}

function HeaderLinks() {
  const { t, i18n } = useTranslation();
  const [navLink, setNavLink] = useState([
    { id: 1, Name: t("navtxt1"), To: "/" },
    { id: 2, Name: t("navtxt2"), To: "/" },
    { id: 3, Name: t("navtxt3"), To: "/" },
    { id: 4, Name: t("navtxt4"), To: "/" },
    { id: 5, Name: t("navtxt5"), To: "/" },
    { id: 6, Name: t("navtxt6"), To: "/" },
    { id: 7, Name: t("navtxt7"), To: "/" },
  ]);

  useEffect(() => {
    setNavLink([
      { id: 1, Name: t("navtxt1"), To: "/" },
      { id: 2, Name: t("navtxt2"), To: "/" },
      { id: 3, Name: t("navtxt3"), To: "/" },
      { id: 4, Name: t("navtxt4"), To: "/" },
      { id: 5, Name: t("navtxt5"), To: "/" },
      { id: 6, Name: t("navtxt6"), To: "/" },
      { id: 7, Name: t("navtxt7"), To: "/" },
    ]);
  }, [i18n.language, t]);

  const OpenList = () => {
    document.getElementById("overlay").classList.remove("hidden");
    document.getElementById("overlay").classList.add("block");
    setTimeout(() => {
      document.getElementById("mobileList").classList.remove("w-[0]");
      document.getElementById("mobileList").classList.add("w-[220px]");
    }, 700);
  };

  const CloseList = () => {
    document.getElementById("mobileList").classList.remove("w-[220px]");
    document.getElementById("mobileList").classList.add("w-[0]");
    setTimeout(() => {
      document.getElementById("overlay").classList.remove("block");
      document.getElementById("overlay").classList.add("hidden");
    }, 1000);
  };

  return (
    <div className="h-full w-1/2 xl:w-[65%] flex items-center">
      <ul className="items-center justify-center hidden w-full h-full text-right xl:flex">
        {navLink.map((val) => (
          <li
            key={val.id}
            className="flex items-center justify-center h-full w-fit"
          >
            <Link
              className="w-fit h-fit text-slate-700 whitespace-nowrap text-[16px] mx-4 ease-out duration-700 hover:text-[#ff00a6]"
              to={val.To}
            >
              {val.Name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex xl:hidden w-full items-center justify-end pl-8">
        <span className="cursor-pointer" onClick={OpenList}>
          <HiBars3 size="2.2rem" />
        </span>
      </div>
      <div
        className="hidden fixed top-0 left-0 z-[99] bg-[#000000ae] w-full h-[100vh] xl:hidden duration-1000 ease-out"
        id="overlay"
      >
        <div
          id="mobileList"
          className="h-[100vh] w-[0] bg-white fixed top-0 right-0 overflow-hidden xl:hidden duration-1000 ease-out"
        >
          <div className="w-full">
            <span className="text-[2.3rem] py-4 pr-6 flex text-red-600">
              <TiDeleteOutline className="cursor-pointer" onClick={CloseList} />
            </span>
          </div>
          <ul className="w-full h-[88vh] mt-[.4rem] flex flex-wrap justify-center">
            {navLink.map((val) => (
              <li
                key={val.id}
                className="flex items-center justify-center w-full"
              >
                <Link
                  className="text-slate-700 w-fit h-fit duration-700 ease-out hover:text-[#ff00a6]"
                  to={val.To}
                >
                  {val.Name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Language() {
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState("fa");

  const onChangeLocale = (e) => {
    const { value } = e.target;
    setLocale(value);
    i18n.changeLanguage(value.toLowerCase());
  };

  return (
    <div className="w-1/5 h-full  flex justify-center items-center">
      <select
        value={locale}
        onChange={onChangeLocale}
        className="border px-3 py-2 shadow rounded-lg border-[#ff00a636] cursor-pointer"
      >
        <option value="fa">Persian</option>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </select>
    </div>
  );
}

export default Header;
