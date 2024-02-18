function Motto() {
  return (
    <section className="w-full mt-[6rem] lg:h-[421px]">
      <div className="flex flex-wrap items-center w-full h-full">
        <MottoText />
        <MottoImage />
      </div>
    </section>
  );
}

function MottoText() {
  return (
    <div className="h-full w-full lg:w-[50%] py-[32px] px-[6%] flex flex-wrap flex-col justify-center bg-[#ff00a6]">
      <h1 className="text-white mb-[16px] text-[22px] lg:text-[29px] xl:text-[38px] text-center lg:text-right">
        سفارش آنلاین غذا اسنپ!
      </h1>
      <p className="text-white text-[17px] lg:text-[18px] xl:text-[20px] leading-[37px] text-center lg:text-right">
        وقتی با چند کلیک، منوی بهترین رستوران‌ها و فست فودهای نزدیک و نظرات
        مشتریان قبلی‌شان را ببینیم و با خیال راحت سفارش غذا بدهیم و در یک چشم
        به‌هم‌زدن غذای موردعلاقه‌‌مان با بهترین بسته‌بندی درب منزل باشد، چرا
        خرید حضوری؟
      </p>
      <div className="w-full mt-6 flex justify-center lg:justify-start">
        <button className="outline-none cursor-pointer text-white rounded-[6px] border border-white bg-transparent py-[13px] px-[27px] duration-700 ease-out hover:bg-[#ffffff23] text-[17px]">
          سفارش غذا و ارسال سریع
        </button>
      </div>
    </div>
  );
}
function MottoImage() {
  return (
    <figure className="h-full w-full lg:w-[50%]">
      <img
        className="object-cover w-full h-full max-h-[421px]"
        src="https://web-cdn.snapp.ir/snappir-marketing/images/food/sec1food.webp"
        alt="MottoImage"
      />
    </figure>
  );
}
export default Motto;
