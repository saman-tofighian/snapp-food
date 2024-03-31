import { useState } from "react";

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
  const [buttons, setButtons] = useState([
    {
      id: 1,
      Text: "انتخاب نوع غذا",
      BgColor: "#FF00A6", // رنگ پیش‌فرض برای دکمه اول
      TextColor: "#fff", // رنگ متن پیش‌فرض برای دکمه اول
    },
    {
      id: 2,
      Text: "انتخاب رستوران",
      BgColor: "#f5f5f6",
      TextColor: "#545567",
    },
    {
      id: 3,
      Text: "انتخاب غذای دلخواه",
      BgColor: "#f5f5f6",
      TextColor: "#545567",
    },
    {
      id: 4,
      Text: " انتخاب روش تحویل و پرداخت",
      BgColor: "#f5f5f6",
      TextColor: "#545567",
    },
  ]);

  const [selectedButton, setSelectedButton] = useState(null);

  const clickBtn = (id) => {
    setButtons((prevButtons) =>
      prevButtons.map((button) => ({
        ...button,
        BgColor: button.id === id ? "#FF00A6" : "#f5f5f6",
        TextColor: button.id === id ? "#fff" : "#545567",
      }))
    );
    setSelectedButton(id);
  };

  return (
    <div className="flex flex-col">
      {buttons.map((button) => (
        <button
          key={button.id}
          className="text-[#545567] px-8 py-3 rounded-[9px] mb-6 text-center cursor-pointer"
          onClick={() => clickBtn(button.id)}
          style={{
            background: button.BgColor,
            color:
              selectedButton === button.id
                ? button.TextColor
                : button.TextColor,
          }}
        >
          {button.Text}
        </button>
      ))}
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
