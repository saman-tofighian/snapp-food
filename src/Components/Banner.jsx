import food from "./../assets/Images/food.svg";
function Banner() {
  return (
    <section className="w-full relative z-20 mb-16">
      <div className="banner back-size"></div>
      <BannerText />
    </section>
  );
}

function BannerText() {
  return (
    <div className="w-full px-5 md:px-32 xl:px-[max(140px,15%)] py-10 text-right">
      <img src={food} alt="food" className="w-[62px] h-[62px]" loading="lazy" />
      <h3 className="text-[22px] font-bold mt-2 text-white" id="shadow1">
        سفارش آنلاین انواع غذاها
      </h3>
      <p className="my-4 text-white leading-7 sm:max-w-[500px]" id="shadow2">
        ناهار خانگی دوست دارید یا شام فست‌فودی؟ گوشت لذیذ یا سالادهای رنگارنگ؟
        خرید آنلاین غذا را با اسنپ تجربه کنید و در کوتاه‌ترین زمان و با
        بسته‌بندی مناسب، درب منزل یا محل کارتان تحویل بگیرید. تابلوی «غذا حاضر
        است» همیشه به سردر رستوران‌های اسنپ آویخته شده است!
      </p>
      <div className="w-full">
        <button className="mt-3 px-7 font-semibold bg-white py-[14px] rounded-[6px]">
          غذا سفارش دهید
        </button>
      </div>
    </div>
  );
}
export default Banner;
