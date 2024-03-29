import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Footer() {
  return (
    <section className="w-full py-10">
      <div className="w-full px-[6%] flex flex-col justify-center items-center">
        <FooterNav />
        <FooterIcons />
        <FooterValidation />
        <hr className="w-full lg:w-4/5 border-[#000] mt-4 mb-3" />
        <FooterCopyWrite />
      </div>
    </section>
  );
}

function FooterNav() {
  const [links] = useState([
    {
      Id: 1,
      Name: "فرصت‌های شغلی",
      To: "/",
    },
    {
      Id: 2,
      Name: "بلاگ",
      To: "/",
    },
    {
      Id: 3,
      Name: "شرایط و قوانین",
      To: "/",
    },
    {
      Id: 4,
      Name: "پنل سازمانی",
      To: "/",
    },
    {
      Id: 5,
      Name: "سوالات متداول",
      To: "/",
    },
    {
      Id: 6,
      Name: "باشگاه رانندگان",
      To: "/",
    },
    {
      Id: 7,
      Name: "ثبت نام راننده اسنپ",
      To: "/",
    },
    {
      Id: 8,
      Name: "درباره ما",
      To: "/",
    },
    {
      Id: 9,
      Name: "تماس با ما",
      To: "/",
    },
  ]);
  return (
    <nav className="w-full pr-2 flex flex-wrap justify-center">
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
    <div className="w-full flex justify-center my-4">
      {icons.map((val) => (
        <Link
          // data-aos="fade-right"
          key={val.id}
          to={val.To}
          title={val.Title}
          target="_blank"
          className="no-underline mx-2"
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
    <div className="w-full flex justify-center my-4">
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
  return (
    <div className="w-full flex justify-center mt-4">
      <h6>
        توسعه یافته توسط{" "}
        <strong className="text-[#ff00a6]"> سامان توفیقیان</strong> تمامی حقوق
        محفوظ است
      </h6>
    </div>
  );
}
export default Footer;
