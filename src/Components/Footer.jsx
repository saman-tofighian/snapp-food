import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
        <path
          fill="#f2f5f8"
          fillOpacity="1"
          d="M0,0L48,26.7C96,53,192,107,288,128C384,149,480,139,576,128C672,117,768,107,864,133.3C960,160,1056,224,1152,218.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <section className="w-full py-10 bg-[#f2f5f8]">
        <div className="w-full px-[6%] flex flex-col justify-center items-center">
          <FooterNav />
          <FooterIcons />
          <FooterValidation />
          <hr className="w-full lg:w-4/5 border-[#000] mt-4 mb-3" />
          <FooterCopyWrite />
        </div>
      </section>
    </>
  );
}

function FooterNav() {
  const { t, i18n } = useTranslation();
  const [links, setLinks] = useState([
    { id: 1, Name: t("navtxt1"), To: "/" },
    { id: 2, Name: t("navtxt2"), To: "/" },
    { id: 3, Name: t("navtxt8"), To: "/" },
    { id: 4, Name: t("navtxt5"), To: "/" },
    { id: 5, Name: t("navtxt9"), To: "/" },
    { id: 6, Name: t("navtxt3"), To: "/" },
    { id: 7, Name: t("navtxt4"), To: "/" },
    { id: 7, Name: t("navtxt6"), To: "/" },
    { id: 7, Name: t("navtxt7"), To: "/" },
  ]);

  useEffect(() => {
    setLinks([
      { id: 1, Name: t("navtxt1"), To: "/" },
      { id: 2, Name: t("navtxt2"), To: "/" },
      { id: 3, Name: t("navtxt8"), To: "/" },
      { id: 4, Name: t("navtxt5"), To: "/" },
      { id: 5, Name: t("navtxt9"), To: "/" },
      { id: 6, Name: t("navtxt3"), To: "/" },
      { id: 7, Name: t("navtxt4"), To: "/" },
      { id: 7, Name: t("navtxt6"), To: "/" },
      { id: 7, Name: t("navtxt7"), To: "/" },
    ]);
  }, [i18n.language, t]);

  return (
    <nav className="flex flex-wrap justify-center w-full pr-2">
      {links.map((val) => {
        return (
          <Link
            key={val.Id}
            to={val.To}
            className="mr-4 my-2 no-underline ease-out duration-700 hover:text-[#ff00a6]"
          >
            {val.Name}
          </Link>
        );
      })}
    </nav>
  );
}

function FooterIcons() {
  const [icons] = useState([
    {
      id: 1,
      Image: <FaLinkedin size="2.4rem" color="#0e76a8" />,
      To: "https://www.linkedin.com/in/saman-tofighian/",
      Title: "linkedin",
    },
    {
      id: 2,
      Image: <IoLogoGithub size="2.4rem" color="#171515" />,
      To: "https://github.com/saman-tofighian",
      Title: "github",
    },
  ]);
  return (
    <div className="flex justify-center w-full my-4">
      {icons.map((val) => (
        <Link
          // data-aos="fade-right"
          key={val.id}
          to={val.To}
          title={val.Title}
          target="_blank"
          className="mx-2 no-underline"
        >
          {val.Image}
        </Link>
      ))}
    </div>
  );
}
function FooterValidation() {
  const [logo] = useState([
    {
      id: 1,
      Logo: "https://www.alock.ir/portals/0/samandehi-silver.png",
      Alt: "samandehi",
    },
    {
      id: 2,
      Logo: "https://ecunion.ir/bundles/pouyasoft/home/img/namad.png",
      Alt: "ecunion",
    },
  ]);
  return (
    <div className="flex justify-center w-full my-4">
      {logo.map((val) => (
        <img
          src={val.Logo}
          key={val.id}
          alt={val.Alt}
          className="w-[130px] h-[130px] mx-2"
        />
      ))}
    </div>
  );
}

function FooterCopyWrite() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-center w-full mt-4">
      <h6>
        {t("copyRight1")}{" "}
        <strong className="text-[#ff00a6]">{t("SamanTofighian")} </strong>
        {t("copyRight2")}
      </h6>
    </div>
  );
}
export default Footer;
