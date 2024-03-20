import { useState } from "react";

function News() {
  return (
    <section className="w-full my-[32px]">
      <div className="w-full px-[6%]">
        <NewsImage />
      </div>
    </section>
  );
}

function NewsImage() {
  const [data] = useState([
    {
      id: 1,
      Image:
        "https://web-cdn.snapp.ir/snapp-website/images/food/iranian-variant.jpg",
      Src: "عکس قورمه سبزی",
      Title: "انواع غذاهای ایرانی و فرنگی",
      Desc: "در اسنپ تا دلتان بخواهد، رستوران ایرانی و فرنگی هست: از انواع کباب‌ها و خورش‌ها و غذاهای دریایی گرفته تا سینی‌های محلی مانند کباب ترش با همان دستور پخت اصیل تا انواع ‌وعده‌های محلی مثل آش دوغ تبریز و قیمه نثار قزوین. امتحان‌کردن طعم‌های بین‌المللی هم فکر خوبی است. اسپرینگ‌رول سبزیجات دوست دارید یا ترکیب ماهی سالمون با آووکادو و برنج در قالب سوشی؟ عاشق دونر کباب ترکی با سس سیر و گوشت هستید یا پاستای ایتالیایی؟ فست‌فود می‌پسندید؟ انواع پیتزا، برگر یا ساندویچ‌های سرد گزینه‌های جذابی هستند که می‌توانید با اسنپ سفارش بدهید.",
    },
    {
      id: 2,
      Image:
        "https://web-cdn.snapp.ir/snapp-website/images/food/order-no-cost.jpg",
      Src: "عکس فست فود",
      Title: "سفارش بدون هزینه اضافی",
      Desc: "جلب رضایت مشتری یعنی اختلاف قیمت خرید حضوری و آنلاین آن‌قدر کم است که اصلا نمی‌ارزد راهی رستوران شوید! این دقیقا اتفاقی است که اسنپ رقم می‌زند. بدون دردسر و معطلی و هزینه‌های اضافی، سفارشتان را درب منزل تحویل می‌گیرید. هزینه خرید آنلاین نه‌تنها تفاوتی با خرید حضوری ندارد بلکه فرصت بهره‌مندی از تخفیف‌های هیجان‌انگیز هم برایتان فراهم می‌شود. حالا تصور کنید یک رستوران ارسال رایگان هم داشته باشد و بدون پرداخت هیچ‌گونه هزینه پیک، ناهارتان را درب منزل دریافت کنید! البته معمولا هزینه پیک مقرون‌ به‌ صرفه است و می‌ارزد به دود و دم شهرهای بزرگ.",
    },
  ]);
  return (
    <section className="w-full flex justify-center  items-center flex-wrap gap-y-3">
      {data.map((val) => (
        <div
          key={val.id}
          className="w-11/12 md:w-1/2 xl:w-5/12 rounded-[9px] flex flex-col my-[14px] mx-[4px] py-[16px] px-[20px]  duration-700 ease-linear bg-[rgb(245,245,246)] hover:bg-[#FF00A6] cursor-pointer max-h-[617px]"
        >
          <figure className="w-full mb-[16px]">
            <img
              src={val.Image}
              alt={val.Src}
              className="rounded-[6px] object-scale-down"
            />
          </figure>
          <h3 className="text-center text-[22px] mb-[16px] font-semibold">
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
