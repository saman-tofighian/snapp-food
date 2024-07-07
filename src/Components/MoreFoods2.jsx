import { useEffect, useState } from "react";
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
import { useTranslation } from "react-i18next";

function MoreFoods2() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
        <path
          fill="#f2f5f8"
          fillOpacity="1"
          d="M0,32L40,69.3C80,107,160,181,240,186.7C320,192,400,128,480,122.7C560,117,640,171,720,202.7C800,235,880,245,960,218.7C1040,192,1120,128,1200,133.3C1280,139,1360,213,1400,250.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>

      <section className="w-full pt-[32px] pb-[40px] mb-[40px] bg-[#f2f5f8]">
        <div className="w-full px-[4%] md:px-[6%] lg:px-[10%] xl:px-[max(140px,15%)]">
          <MoreFoodsItems />
        </div>
      </section>
    </>
  );
}

function MoreFoodsItems() {
  const { t, i18n } = useTranslation();
  const [items, setItems] = useState([
    {
      id: 1,
      Image: Image11,
      Name: t("MoreFoodsTitle1"),
      Desc: t("MoreFoodsDesc1"),
    },

    {
      id: 2,
      Image: Image5,
      Name: t("MoreFoodsTitle2"),
      Desc: t("MoreFoodsDesc2"),
    },
    {
      id: 3,
      Image: Image2,
      Name: t("MoreFoodsTitle3"),
      Desc: t("MoreFoodsDesc3"),
    },
    {
      id: 4,
      Image: Image1,
      Name: t("MoreFoodsTitle4"),
      Desc: t("MoreFoodsDesc4"),
    },
    {
      id: 5,
      Image: Image6,
      Name: t("MoreFoodsTitle5"),
      Desc: t("MoreFoodsDesc5"),
    },
    {
      id: 6,
      Image: Image3,
      Name: t("MoreFoodsTitle6"),
      Desc: t("MoreFoodsDesc6"),
    },
    {
      id: 7,
      Image: Image8,
      Name: t("MoreFoodsTitle7"),
      Desc: t("MoreFoodsDesc7"),
    },
    {
      id: 8,
      Image: Image7,
      Name: t("MoreFoodsTitle8"),
      Desc: t("MoreFoodsDesc8"),
    },
    {
      id: 9,
      Image: Image4,
      Name: t("MoreFoodsTitle9"),
      Desc: t("MoreFoodsDesc9"),
    },
    {
      id: 10,
      Image: Image9,
      Name: t("MoreFoodsTitle10"),
      Desc: t("MoreFoodsDesc10"),
    },

    {
      id: 11,
      Image: Image10,
      Name: t("MoreFoodsTitle11"),
      Desc: t("MoreFoodsDesc11"),
    },
  ]);

  useEffect(() => {
    const newItems = [
      {
        id: 1,
        Image: Image11,
        Name: t("MoreFoodsTitle1"),
        Desc: t("MoreFoodsDesc1"),
      },

      {
        id: 2,
        Image: Image5,
        Name: t("MoreFoodsTitle2"),
        Desc: t("MoreFoodsDesc2"),
      },
      {
        id: 3,
        Image: Image2,
        Name: t("MoreFoodsTitle3"),
        Desc: t("MoreFoodsDesc3"),
      },
      {
        id: 4,
        Image: Image1,
        Name: t("MoreFoodsTitle4"),
        Desc: t("MoreFoodsDesc4"),
      },
      {
        id: 5,
        Image: Image6,
        Name: t("MoreFoodsTitle5"),
        Desc: t("MoreFoodsDesc5"),
      },
      {
        id: 6,
        Image: Image3,
        Name: t("MoreFoodsTitle6"),
        Desc: t("MoreFoodsDesc6"),
      },
      {
        id: 7,
        Image: Image8,
        Name: t("MoreFoodsTitle7"),
        Desc: t("MoreFoodsDesc7"),
      },
      {
        id: 8,
        Image: Image7,
        Name: t("MoreFoodsTitle8"),
        Desc: t("MoreFoodsDesc8"),
      },
      {
        id: 9,
        Image: Image4,
        Name: t("MoreFoodsTitle9"),
        Desc: t("MoreFoodsDesc9"),
      },
      {
        id: 10,
        Image: Image9,
        Name: t("MoreFoodsTitle10"),
        Desc: t("MoreFoodsDesc10"),
      },

      {
        id: 11,
        Image: Image10,
        Name: t("MoreFoodsTitle11"),
        Desc: t("MoreFoodsDesc11"),
      },
    ];
    setItems(newItems);
  }, [i18n.language, t]);

  return (
    <div className="flex flex-wrap justify-center w-full">
      {items.map((val) => {
        return (
          <Link
            to="/"
            key={val.id}
            className="bg-white border border-[#e5e5e5] flex rounded-[18px] py-1 text-[#3f3f3f] m-4 w-9/12 md:w-5/12 lg:w-[29%] duration-700 ease-linear hover:shadow-lg px-3"
          >
            <div className="flex items-center justify-center w-16 h-16">
              <img
                src={val.Image}
                alt={val.Name}
                loading="lazy"
                className="rounded-[9px] h-[62px] w-[62px]"
              />
            </div>
            <div className="flex flex-col justify-center px-3 py-2">
              <h3 className="my-1 text-[15px]">{val.Name}</h3>
              <p className="text-[#a3a3a3] text-[13px]">{val.Desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default MoreFoods2;
