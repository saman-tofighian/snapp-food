import advantageImage from "./../assets/Images/advange.jpg";

function Advantage() {
  return (
    <section className="w-full mt-8 pb-[40px]">
      <div className="w-full px-[6%]">
        <AdvantageParent />
      </div>
    </section>
  );
}

function AdvantageParent() {
  return (
    <section className="w-full flex justify-center lg:justify-around xl:justify-between items-center flex-wrap gap-y-8 xl:gap-y-0">
      <AdvantageImage />
      <AdvantageText />
    </section>
  );
}

function AdvantageImage() {
  return (
    <figure className="w-11/12 lg:w-1/2">
      <img
        src={advantageImage}
        alt="advantageImage"
        className="h-[50vh] w-full object-cover rounded-lg"
      />
    </figure>
  );
}

function AdvantageText() {
  return (
    <div className="w-11/12 lg:w-2/5">
      <h2 className="mb-[12px] text-[22px] font-bold">
        مزایای سفارش غذا از اسنپ
      </h2>
      <p className="my-[8px] leading-[32px] text-justify">
        وقت طلاست. تمام تلاش‌ اسنپ در بخش سفارش انلاین غذا بر مبنای همین جمله دو
        کلمه‌ای است. اینکه فهرست بلندی از غذاهای لذیذ با قیمت‌های مناسب پیش
        رویتان باشد، گزینه موردنظرتان با چند کلیک ساده در بهترین بسته‌بندی و طی
        سریع‌ترین زمان ممکن به دست‌تان برسد. به‌نظر شما جای تردید باقی می‌ماند؟
      </p>
    </div>
  );
}
export default Advantage;
