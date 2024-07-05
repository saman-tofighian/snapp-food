import { useEffect } from "react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

const Motto = () => {
  useEffect(() => {
    const _moto = document.getElementById("moto");
    const _text = document.getElementById("text");
    gsap.to(_moto, {
      x: 0,
      duration: 2.5,
      ease: "sine.out",
    });
    gsap.to(_text, {
      x: 0,
      duration: 2.5,
      ease: "sine.out",
    });
  }, []);

  return (
    <section className="w-full mt-[6rem] lg:h-[421px]">
      <div className="flex flex-wrap items-center w-full h-full">
        <MottoText />
        <MottoImage />
      </div>
    </section>
  );
};

const MottoText = () => {
  const { t } = useTranslation();
  return (
    <div
      className="h-full w-full lg:w-[50%] py-[32px] px-[6%] flex flex-wrap flex-col justify-center bg-[#ff00a6] translate-x-[1000px]"
      id="text"
    >
      <h1 className="text-white mb-[16px] text-[22px] lg:text-[29px] xl:text-[38px] text-center lg:text-right">
        {t("MotoTitle")}
      </h1>
      <p className="text-white text-[17px] lg:text-[18px] xl:text-[20px] leading-[37px] text-center lg:text-right">
        {t("MotoDesc")}
      </p>
      <div className="w-full mt-6 flex justify-center lg:justify-start">
        <button className="outline-none cursor-pointer text-white rounded-[6px] border border-white bg-transparent py-[13px] px-[27px] duration-700 ease-out hover:bg-[#ffffff23] text-[17px]">
          {t("MotoButton")}
        </button>
      </div>
    </div>
  );
};

const MottoImage = () => {
  return (
    <figure
      className="h-full w-full lg:w-[50%] translate-x-[-1000px]"
      id="moto"
    >
      <img
        className="object-cover w-full h-full max-h-[421px]"
        src="https://web-cdn.snapp.ir/snappir-marketing/images/food/sec1food.webp"
        alt="MottoImage"
      />
    </figure>
  );
};

export default Motto;
