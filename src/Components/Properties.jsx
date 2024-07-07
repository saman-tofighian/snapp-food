import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Properties() {
  return (
    <section className="w-full pt-8 xl:pt-0 pb-10 xl:mt-[-80px]">
      <div className="w-full px-[6%]">
        <PropertiesArticle />
      </div>
    </section>
  );
}

function PropertiesArticle() {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState([]);

  useEffect(() => {
    setState([
      {
        id: 1,
        Img: "https://web-cdn.snapp.ir/snapp-website/images/food/4.png",
        Alt: "food",
        Title: t("PropertiesTitle1"),
        Description: t("PropertiesDesc1"),
      },
      {
        id: 2,
        Img: "https://web-cdn.snapp.ir/snapp-website/images/food/3.png",
        Alt: "delivery",
        Title: t("PropertiesTitle2"),
        Description: t("PropertiesDesc2"),
      },
      {
        id: 3,
        Img: "https://web-cdn.snapp.ir/snapp-website/images/food/5.png",
        Alt: "support",
        Title: t("PropertiesTitle3"),
        Description: t("PropertiesDesc3"),
      },
    ]);
  }, [i18n.language, t]);

  return (
    <article className="flex flex-wrap items-center justify-center w-full md:justify-around lg:justify-evenly gap-y-10 lg:gap-y-0">
      {state.map((val) => {
        return <PropertiesArticleChild key={val.id} {...val} />;
      })}
    </article>
  );
}

function PropertiesArticleChild({ Img, Alt, Title, Description }) {
  return (
    <div className="w-11/12 md:w-[43%] lg:w-1/4">
      <figure className="w-full rounded-[18px] bg-[#f2f5f8] overflow-hidden">
        <img
          src={Img}
          alt={Alt}
          className="h-[190px] w-full object-scale-down"
          loading="lazy"
        />
      </figure>
      <p className="my-[16px] text-[17px] font-medium">{Title}</p>
      <p className="text-[13px] leading-6">{Description}</p>
    </div>
  );
}

export default Properties;
