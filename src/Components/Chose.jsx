function Chose() {
  return (
    <section className="w-full my-4">
      <div className="w-full px-[6%]">
        <ChoseParent />
      </div>
    </section>
  );
}

function ChoseParent() {
  return (
    <div className="w-full flex items-center flex-wrap justify-center">
      <ChoseButtons />
      <ChoseText />
      <ChoseImage />
    </div>
  );
}

function ChoseButtons() {
  return (
    <div className="flex flex-col">
      <button className="bg-[#f5f5f6] text-[#545567] px-8 py-3 rounded-[9px] mb-6 text-center cursor-pointer">
        انتخاب نوع غذا
      </button>
      <button className="bg-[#f5f5f6] text-[#545567] px-8 py-3 rounded-[9px] mb-6 text-center cursor-pointer">
        انتخاب رستوران
      </button>
      <button className="bg-[#f5f5f6] text-[#545567] px-8 py-3 rounded-[9px] mb-6 text-center cursor-pointer">
        انتخاب غذای دلخواه
      </button>
      <button className="bg-[#f5f5f6] text-[#545567] px-8 py-3 rounded-[9px] mb-6 text-center cursor-pointer">
        انتخاب روش تحویل و پرداخت
      </button>
    </div>
  );
}

function ChoseText() {
  return (
    <div className="w-[33vw]  pr-8 flex flex-col">
      <h2 className="font-bold text-[20px] my-4">شروع سفارش و انتخاب غذا</h2>
      <p className="leading-8 text-justify">
        با کلیک بر روی دکممه بالای صفحه، به صفحه سفارش غذا هدایت می شوید و پس از
        مشاهده رستوران‌های اطراف، آدرس‌تان را وارد کنید. حالا غذای موردنظرتان را
        بالای صفحه بنویسید یا گزینه رستوران را بزنید. راه آسان‌تر این است که در
        بخش دسته‌بندی‌ها، نوع غذا را مشخص کنید. از فودپارتی، جایزه خرید یا
        تخفیف‌ها هم غافل نشوید.
      </p>
    </div>
  );
}

function ChoseImage() {
  return (
    <figure className="mx-10">
      <img
        src="https://web-cdn.snapp.ir/snapp-website/images/food/4-1-new.jpg"
        alt=""
        className="rounded-[9px] h-[200px]"
        loading="lazy"
      />
    </figure>
  );
}

export default Chose;
