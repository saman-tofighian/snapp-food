import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function News() {
  return (
    <section className="w-full my-[34px]">
      <div className="w-full px-[6%]">
        <NewsImage />
      </div>
    </section>
  );
}

function NewsImage() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([
    {
      id: 1,
      Image:
        "https://web-cdn.snapp.ir/snapp-website/images/food/iranian-variant.jpg",
      Src: "عکس قورمه سبزی",
      Title: t("NewsTitle1"),
      Desc: t("NewsDesc1"),
    },
    {
      id: 2,
      Image:
        "https://web-cdn.snapp.ir/snapp-website/images/food/order-no-cost.jpg",
      Src: "عکس فست فود",
      Title: t("NewsTitle2"),
      Desc: t("NewsDesc2"),
    },
  ]);

  useEffect(() => {
    setData([
      {
        id: 1,
        Image:
          "https://web-cdn.snapp.ir/snapp-website/images/food/iranian-variant.jpg",
        Src: "عکس قورمه سبزی",
        Title: t("NewsTitle1"),
        Desc: t("NewsDesc1"),
      },
      {
        id: 2,
        Image:
          "https://web-cdn.snapp.ir/snapp-website/images/food/order-no-cost.jpg",
        Src: "عکس فست فود",
        Title: t("NewsTitle2"),
        Desc: t("NewsDesc2"),
      },
    ]);
  }, [i18n.language]);

  return (
    <section className="flex flex-wrap items-center justify-center w-full gap-y-3">
      {data.map((val) => (
        <div
          key={val.id}
          className="w-11/12 md:w-9/12 lg:w-[48%] xl:w-5/12 rounded-[9px] flex flex-col my-[14px] mx-[8px] py-[16px] px-[20px] duration-700 ease-linear bg-[rgb(245,245,246)] hover:bg-[#FF00A6] hover:text-white cursor-pointer min-h-[650px] max-h-fit"
        >
          <figure className="w-full mb-[16px]">
            <img
              src={val.Image}
              alt={val.Src}
              className="rounded-[6px] object-scale-down"
            />
          </figure>
          <h3 className="text-center text-[18px] md:text-[20px] lg:text-[21px] xl:text-[22px] mb-[16px] font-semibold">
            {val.Title}
          </h3>
          <p className="leading-7 text-justify whitespace-pre-wrap text-[14px]">
            {val.Desc}
          </p>
        </div>
      ))}
    </section>
  );
}

export default News;
