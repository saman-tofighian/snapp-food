import { useState } from "react";
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

function Foods() {
  return (
    <section className="w-full py-[40px] bg-[#f5f5f6]">
      <div className="w-full px-[6%]">
        <FoodItems />
      </div>
    </section>
  );
}

function FoodItems() {
  const [items] = useState([
    {
      id: 1,
      image: ImageItem1,
      name: "ایرانی",
      alt: "ایرانی",
    },
    {
      id: 2,
      image: ImageItem2,
      name: "فست فود",
      alt: "فست فود",
    },
    {
      id: 3,
      image: ImageItem3,
      name: "پیتزا",
      alt: "پیتزا",
    },
    {
      id: 4,
      image: ImageItem4,
      name: "ساندویچ",
      alt: "ساندویچ",
    },
    {
      id: 5,
      image: ImageItem5,
      name: "کباب",
      alt: "کباب",
    },
    {
      id: 6,
      image: ImageItem6,
      name: "برگر",
      alt: "برگر",
    },
    {
      id: 7,
      image: ImageItem7,
      name: "سوخاری",
      alt: "سوخاری",
    },
    {
      id: 8,
      image: ImageItem8,
      name: "پاستا",
      alt: "پاستا",
    },
    {
      id: 9,
      image: ImageItem9,
      name: "سالاد",
      alt: "سالاد",
    },
    {
      id: 10,
      image: ImageItem10,
      name: "دریایی",
      alt: "دریایی",
    },
    {
      id: 11,
      image: ImageItem11,
      name: "بین المللی",
      alt: "بین المللی",
    },
    {
      id: 12,
      image: ImageItem12,
      name: "گیلانی",
      alt: "گیلانی",
    },
  ]);
  return (
    <section className="w-full flex flex-wrap justify-center xl:justify-evenly px-[max(140px,15%)] py-6 gap-y-7 xl:gap-y-0">
      {items.map((val) => {
        return (
          <div
            key={val.id}
            className="cursor-pointer py-[8px] flex items-center justify-between flex-col mb-[20px] ml-[16px] bg-transparent"
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
