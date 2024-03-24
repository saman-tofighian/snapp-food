import { useState } from "react";
import Image1 from "./../assets/Images/bread2.png";
import Image2 from "./../assets/Images/confec2.png";
import Image3 from "./../assets/Images/icecream2.png";
import Image4 from "./../assets/Images/protein2.png";
import Image5 from "./../assets/Images/super2.png";
import Image6 from "./../assets/Images/fruit2.png";
import Image7 from "./../assets/Images/nuts2.png";
import Image8 from "./../assets/Images/cafe2.png";
import Image9 from "./../assets/Images/flower2.png";
import Image10 from "./../assets/Images/attari2.png";
import Image11 from "./../assets/Images/rest2.png";
import { Link } from "react-router-dom";

function MoreFoods2() {
  return (
    <section className="w-full pt-[32px] pb-[40px] mb-[40px] bg-[#f2f5f8]">
      <div className="w-full px-[4%] md:px-[6%] lg:px-[10%] xl:px-[max(140px,15%)]">
        <MoreFoodsItems />
      </div>
    </section>
  );
}

function MoreFoodsItems() {
  const [items] = useState([
    {
      id: 1,
      Image: Image11,
      Name: "رستوران",
      Desc: "سفارش غذا",
    },

    {
      id: 2,
      Image: Image5,
      Name: "سوپرمارکت",
      Desc: "سوپرمارکت آنلاین",
    },
    {
      id: 3,
      Image: Image2,
      Name: "شیرینی",
      Desc: "کیک و شیرینی",
    },
    {
      id: 4,
      Image: Image1,
      Name: "نانوایی",
      Desc: "سفارش نان",
    },
    {
      id: 5,
      Image: Image6,
      Name: "میوه",
      Desc: "خرید میوه",
    },
    {
      id: 6,
      Image: Image3,
      Name: "آبمیوه بستنی",
      Desc: "سفارش آبمیوه",
    },
    {
      id: 7,
      Image: Image8,
      Name: "کافه",
      Desc: "کافی شاپ",
    },
    {
      id: 8,
      Image: Image7,
      Name: "آجیل",
      Desc: "خرید آجیل",
    },
    {
      id: 9,
      Image: Image4,
      Name: "پروتئین",
      Desc: "محصولات پروتئین",
    },
    {
      id: 10,
      Image: Image9,
      Name: "سفارش گل",
      Desc: "",
    },

    {
      id: 11,
      Image: Image10,
      Name: "عطاری آنلاین",
      Desc: "",
    },
  ]);
  return (
    <div className="w-full flex flex-wrap justify-center">
      {items.map((val) => {
        return (
          <Link
            to="/"
            key={val.id}
            className="bg-white border border-[#e5e5e5] flex rounded-[18px] py-2    text-[#3f3f3f] m-4 w-11/12 md:w-5/12 lg:w-[29%] duration-700 ease-linear hover:shadow-lg"
          >
            <img
              src={val.Image}
              alt={val.Name}
              loading="lazy"
              className="rounded-[9px] mb-[16px] h-[62px] w-[62px] mx-2 flex items-center"
            />
            <div className="flex py-2 flex-col justify-center">
              <h3 className="text-right my-1">{val.Name}</h3>
              <p className="text-[#a3a3a3] text-[14px]">{val.Desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default MoreFoods2;
