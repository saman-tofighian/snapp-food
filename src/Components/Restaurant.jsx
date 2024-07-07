import { useState } from "react";
import { useTranslation } from "react-i18next";

function Restaurant() {
  return (
    <section className="w-full my-[32px]">
      <div className="w-full px-[6%] flex flex-wrap flex-col items-center">
        <RestaurantTitle />
        <RestaurantLogo />
        <RestaurantDescription />
      </div>
    </section>
  );
}

function RestaurantTitle() {
  const { t } = useTranslation();
  return (
    <div className="w-full text-center mt-[8px] mb-[16px]">
      <h2 className="text-[22px] font-semibold">{t("RestaurantTitle")}</h2>
    </div>
  );
}

function RestaurantLogo() {
  const [data] = useState([
    {
      id: 1,
      Image:
        "https://web-cdn.snapp.ir/snapp-website/images/food/restaurants/Shila.png",
      Alt: "شیلا",
    },
    {
      id: 2,
      Image:
        "https://web-cdn.snapp.ir/snapp-website/images/food/restaurants/Perperook.png",
      Alt: "پرپروک",
    },
    {
      id: 3,
      Image:
        "https://web-cdn.snapp.ir/snapp-website/images/food/restaurants/Baguette.png",
      Alt: "باگت",
    },
    {
      id: 4,
      Image:
        "https://web-cdn.snapp.ir/snapp-website/images/food/restaurants/Hani.png",
      Alt: "هانی",
    },
    {
      id: 5,
      Image:
        "https://web-cdn.snapp.ir/snapp-website/images/food/restaurants/Procalory.png",
      Alt: "پروکالری",
    },
    {
      id: 6,
      Image:
        "https://web-cdn.snapp.ir/snapp-website/images/food/restaurants/Raftari.png",
      Alt: "رفتاری",
    },
    {
      id: 7,
      Image:
        "https://web-cdn.snapp.ir/snapp-website/images/food/restaurants/Burger%20Land.png",
      Alt: "برگرلند",
    },
    {
      id: 8,
      Image:
        "https://web-cdn.snapp.ir/snapp-website/images/food/restaurants/Bergur1385.png",
      Alt: "برگر1385",
    },
  ]);
  return (
    <div className="w-full xl:w-4/5 mt-7 ">
      <ul className="flex flex-wrap list-none justify-evenly gap-y-8 xl:gap-y-0">
        {data.map((val) => (
          <li key={val.id}>
            <figure className="pointer-events-none flex rounded-[9px] mb-[16px] mx-[16px]">
              <img
                src={val.Image}
                alt={val.Alt}
                className="h-[48px]"
                loading="lazy"
              />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RestaurantDescription() {
  const { t } = useTranslation();
  return (
    <div className="w-full my-3 xl:w-4/5">
      <p className="font-light leading-9 text-justify">{t("ResturantDesc")}</p>
    </div>
  );
}

export default Restaurant;
