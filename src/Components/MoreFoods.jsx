import { useState } from "react";
import Image1 from "./../assets/Images/bread2.png";
import Image2 from "./../assets/Images/confec2.png";
import Image3 from "./../assets/Images/icecream2.png";
import Image4 from "./../assets/Images/protein2.png";
import Image5 from "./../assets/Images/super2.png";
import Image6 from "./../assets/Images/fruit2.png";
import Image7 from "./../assets/Images/nuts2.png";
import Image8 from "./../assets/Images/cafe2.png";
import { Link } from "react-router-dom";

function MoreFoods() {
  return (
    <section className="w-full py-[32px]">
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
      Image: Image1,
      Name: "نان تازه",
    },
    {
      id: 2,
      Image: Image2,
      Name: "شیرینی",
    },
    {
      id: 3,
      Image: Image3,
      Name: "آبمیوه بستنی",
    },
    {
      id: 4,
      Image: Image4,
      Name: "پروتئین",
    },
    {
      id: 5,
      Image: Image5,
      Name: "سوپرمارکت",
    },
    {
      id: 6,
      Image: Image6,
      Name: "میوه",
    },
    {
      id: 7,
      Image: Image7,
      Name: "آجیل",
    },
    {
      id: 8,
      Image: Image8,
      Name: "کافه",
    },
  ]);
  return (
    <div className="w-full parent-grid">
      {items.map((val) => {
        return (
          <Link
            to="/"
            key={val.id}
            className="bg-[#f5f5f6] flex rounded-[9px] mb-[16px] p-[16px] items-center flex-col justify-between text-[#3f3f3f] duration-700 ease-linear hover:shadow-lg hover:bg-[#ff00a6] hover:text-white"
          >
            <img
              src={val.Image}
              alt={val.Name}
              loading="lazy"
              className="rounded-[9px] mb-[16px] h-[70px] w-[auto]"
            />
            <strong className="text-center text-[17px]">{val.Name}</strong>
          </Link>
        );
      })}
    </div>
  );
}

export default MoreFoods;
