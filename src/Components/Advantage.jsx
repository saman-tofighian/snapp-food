import advantageImage from "./../assets/Images/advange.jpg";
import { useTranslation } from "react-i18next";

function Advantage() {
  return (
    <section className="w-full mt-8 pb-[40px]">
      <div className="w-full px-[6%]">
        <AdvantageParent />
      </div>
    </section>
  );
}

function AdvantageParent() {
  return (
    <section className="flex flex-wrap items-center justify-center w-full lg:justify-around xl:justify-between gap-y-8 xl:gap-y-0">
      <AdvantageImage />
      <AdvantageText />
    </section>
  );
}

function AdvantageImage() {
  return (
    <figure className="w-11/12 lg:w-1/2">
      <img
        src={advantageImage}
        alt="advantageImage"
        className="h-[50vh] w-full object-cover rounded-lg"
      />
    </figure>
  );
}

function AdvantageText() {
  const { t } = useTranslation();
  return (
    <div className="w-11/12 lg:w-2/5">
      <h2 className="mb-[12px] text-[22px] font-bold">{t("AdvantageTitle")}</h2>
      <p className="my-[8px] leading-[32px] text-justify">
        {t("AdvantageDesc")}
      </p>
    </div>
  );
}

export default Advantage;
