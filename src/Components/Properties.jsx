import { useState } from "react";

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
  const [state] = useState([
    {
      id: 1,
      Img: "https://web-cdn.snapp.ir/snapp-website/images/food/4.png",
      Alt: "food",
      Title: "غذای ملل مختلف",
      Description:
        "دست‌تان برای انتخاب انواع غذاهای ایرانی، لبنانی، ایتالیایی، هندی، ترکی، چینی و ... باز است.",
    },
    {
      id: 2,
      Img: "https://web-cdn.snapp.ir/snapp-website/images/food/3.png",
      Alt: "delivery",
      Title: "تحویل سریع",
      Description:
        "بدون فوت وقت در ترافیک یا انتظار پشت تلفن، شام یا ناهار دلخواه را همراه با مخلفات، آنلاین سفارش دهید.",
    },
    {
      id: 3,
      Img: "https://web-cdn.snapp.ir/snapp-website/images/food/5.png",
      Alt: "support",
      Title: "پشتیبانی تمام وقت",
      Description:
        "تیم اسنپ هر روز هفته، به‌صورت شبانه‌روزی، پاسخ‌گوی سؤالات و مشکلات احتمالی است.",
    },
  ]);
  return (
    <article className="w-full flex justify-center md:justify-around lg:justify-evenly items-center flex-wrap gap-y-10 lg:gap-y-0">
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
