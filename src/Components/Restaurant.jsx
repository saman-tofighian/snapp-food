import { useState } from "react";

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
  return (
    <div className="w-full text-center mt-[8px] mb-[16px]">
      <h2 className="text-[22px] font-semibold">
        پرطرفدارترین رستوران‌ها در اسنپ
      </h2>
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
  return (
    <div className="w-full xl:w-4/5 my-3">
      <p className="leading-9 text-justify font-light">
        با وجود دنیایی از غذاهای ایرانی و غیرایرانی که در منوی رستوران‌ها
        می‌بینید، انواع فست‌فودها، ساندویچ‌ها و غذاهای محلی و بین‌المللی که
        آماده سفارش هستند؛ بعضی‌ها هم که از قدیم پرطرفدار بوده‌اند و هنوز هم
        مشتریان همیشگی دارند. مثلا از میان منوهای سنتی، کباب‌ها و از میان
        فست‌فودها، انواع برگر با استقبال بیشتری روبه‌رو می‌شوند. پیتزا مثل همیشه
        در صدر فهرست پرطرفدارترین‌هاست و کودک و جوان عاشقش هستند. حتی این‌روزها
        که سبک زندگی تغییر کرده و علاقه به سالم‌خوری بیشتر از قبل شده، خیلی از
        مخاطبان اسنپ برای وعده‌های اصلی سراغ سالادهای مختلف می‌روند که جای تحسین
        دارد.
      </p>
    </div>
  );
}

export default Restaurant;
