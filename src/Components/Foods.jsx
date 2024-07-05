import { useState, useEffect } from "react";
import ImageItem1 from "./../assets/Images/irani.jpg";
import ImageItem2 from "./../assets/Images/fastfood.jpg";
import ImageItem3 from "./../assets/Images/pizza.jpg";
import ImageItem4 from "./../assets/Images/sandwich.jpg";
import ImageItem5 from "./../assets/Images/kebab.jpg";
import ImageItem6 from "./../assets/Images/burger.jpg";
import ImageItem7 from "./../assets/Images/fried.jpg";
import ImageItem8 from "./../assets/Images/pasta.jpg";
import ImageItem9 from "./../assets/Images/salad.jpg";
import ImageItem10 from "./../assets/Images/seafood.jpg";
import ImageItem11 from "./../assets/Images/international.jpg";
import ImageItem12 from "./../assets/Images/gilani.jpg";
import { useTranslation } from "react-i18next";

function Foods() {
  return (
    <>
      <section className="w-full pt-[30px] bg-[#f5f5f6]">
        <div className="w-full px-[6%]">
          <FoodItems />
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f5f5f6"
          fillOpacity="1"
          d="M0,32L40,64C80,96,160,160,240,192C320,224,400,224,480,202.7C560,181,640,139,720,106.7C800,75,880,53,960,42.7C1040,32,1120,32,1200,64C1280,96,1360,160,1400,192L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

function FoodItems() {
  const { t, i18n } = useTranslation();
  const [items, setItems] = useState([
    {
      id: 1,
      image: ImageItem1,
      name: t("Food1"),
      alt: t("Food1"),
    },
    {
      id: 2,
      image: ImageItem2,
      name: t("Food2"),
      alt: t("Food2"),
    },
    {
      id: 3,
      image: ImageItem3,
      name: t("Food3"),
      alt: t("Food3"),
    },
    {
      id: 4,
      image: ImageItem4,
      name: t("Food4"),
      alt: t("Food4"),
    },
    {
      id: 5,
      image: ImageItem5,
      name: t("Food5"),
      alt: t("Food5"),
    },
    {
      id: 6,
      image: ImageItem6,
      name: t("Food6"),
      alt: t("Food6"),
    },
    {
      id: 7,
      image: ImageItem7,
      name: t("Food7"),
      alt: t("Food7"),
    },
    {
      id: 8,
      image: ImageItem8,
      name: t("Food8"),
      alt: t("Food8"),
    },
    {
      id: 9,
      image: ImageItem9,
      name: t("Food9"),
      alt: t("Food9"),
    },
    {
      id: 10,
      image: ImageItem10,
      name: t("Food10"),
      alt: t("Food10"),
    },
    {
      id: 11,
      image: ImageItem11,
      name: t("Food11"),
      alt: t("Food11"),
    },
    {
      id: 12,
      image: ImageItem12,
      name: t("Food12"),
      alt: t("Food12"),
    },
  ]);

  useEffect(() => {
    setItems([
      {
        id: 1,
        image: ImageItem1,
        name: t("Food1"),
        alt: t("Food1"),
      },
      {
        id: 2,
        image: ImageItem2,
        name: t("Food2"),
        alt: t("Food2"),
      },
      {
        id: 3,
        image: ImageItem3,
        name: t("Food3"),
        alt: t("Food3"),
      },
      {
        id: 4,
        image: ImageItem4,
        name: t("Food4"),
        alt: t("Food4"),
      },
      {
        id: 5,
        image: ImageItem5,
        name: t("Food5"),
        alt: t("Food5"),
      },
      {
        id: 6,
        image: ImageItem6,
        name: t("Food6"),
        alt: t("Food6"),
      },
      {
        id: 7,
        image: ImageItem7,
        name: t("Food7"),
        alt: t("Food7"),
      },
      {
        id: 8,
        image: ImageItem8,
        name: t("Food8"),
        alt: t("Food8"),
      },
      {
        id: 9,
        image: ImageItem9,
        name: t("Food9"),
        alt: t("Food9"),
      },
      {
        id: 10,
        image: ImageItem10,
        name: t("Food10"),
        alt: t("Food10"),
      },
      {
        id: 11,
        image: ImageItem11,
        name: t("Food11"),
        alt: t("Food11"),
      },
      {
        id: 12,
        image: ImageItem12,
        name: t("Food12"),
        alt: t("Food12"),
      },
    ]);
  }, [i18n.language, t]);

  return (
    <section className="w-full flex flex-wrap justify-center xl:justify-evenly px-[max(140px,15%)] py-6 gap-y-7 xl:gap-y-0">
      {items.map((val) => {
        return (
          <div
            key={val.id}
            className="cursor-pointer py-[8px] flex items-center justify-between flex-col mb-[20px] ml-[16px] bg-transparent"
            title={val.name}
          >
            <img
              className="rounded-[9px] mb-[16px] w-[170px] h-[90px]"
              src={val.image}
              alt={val.alt}
              loading="lazy"
            />
            <h3 className="text-center text-[17px]">{val.name}</h3>
          </div>
        );
      })}
    </section>
  );
}

export default Foods;
