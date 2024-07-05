import { useState } from "react";

function Chose() {
  const [buttons, setButtons] = useState([
    {
      id: 1,
      Text: "انتخاب نوع غذا",
      BgColor: "#FF00A6",
      TextColor: "#fff",
      Title: "شروع سفارش و انتخاب غذا",
      Desc: "با کلیک بر روی دکممه بالای صفحه، به صفحه سفارش غذا هدایت می شوید و پس از مشاهده رستوران‌های اطراف، آدرس‌تان را وارد کنید. حالا غذای موردنظرتان را بالای صفحه بنویسید یا گزینه رستوران را بزنید. راه آسان‌تر این است که در بخش دسته‌بندی‌ها، نوع غذا را مشخص کنید. از فودپارتی، جایزه خرید یا از کد تخفیف اسنپ فود هم غافل نشوید. ",
      Image: "https://web-cdn.snapp.ir/snapp-website/images/food/4-1-new.jpg",
      Alt: "Food1",
    },
    {
      id: 2,
      Text: "انتخاب رستوران",
      BgColor: "#f5f5f6",
      TextColor: "#545567",
      Title: "پیدا کردن رستوران دلخواه",
      Desc: "با انتخاب نوع غذا یا ورود به لیست رستوران‌ها، تعداد رستوران‌های باز را می‌بینید. به‌کمک فیلترهای بالای صفحه، می‌توانید دسته‌بندی غذا را جزئی‌تر هم بکنید، مثلاً مرغ یا خورش. با انتخاب گزینه «به ترتیب»، رستوران‌ها را براساس قیمت، امتیاز کاربران، عملکرد کلی و... مرتب کنید تا بتوانید بهتر تصمیم بگیرید.",
      Image: "https://web-cdn.snapp.ir/snapp-website/images/food/4-2-new.jpg",
      Alt: "Food2",
    },
    {
      id: 3,
      Text: "انتخاب غذای دلخواه",
      BgColor: "#f5f5f6",
      TextColor: "#545567",
      Title: "بررسی منو، انتخاب غذا و نوشتن توضیحات ",
      Desc: "در منوی رستوران، غذا و مخلفات موردنظرتان را انتخاب کنید. با گزینه «افزودن»، تعداد سفارش و موارد دلخواه مثل پک قاشق و چنگال را مشخص کنید. با زدن گزینه «تکمیل خرید»، در صفحه جدید، توضیحات دلخواه‌تان را بنویسید، مثلاً ظرف خورش داخل برنج نباشد. سپس گزینه «ادامه» را بزنید.",
      Image: "https://web-cdn.snapp.ir/snapp-website/images/food/4-3-new.jpg",
      Alt: "Food3",
    },
    {
      id: 4,
      Text: " انتخاب روش تحویل و پرداخت",
      BgColor: "#f5f5f6",
      TextColor: "#545567",
      Title: "پرداخت آنلاین یا اعتباری و تحویل با پیک یا حضوری",
      Desc: "روش تحویل سفارش را مشخص کنید: درب منزل ارسال شود یا خودتان به رستوران مراجعه می‌کنید؟ حالا نوبت انتخاب روش پرداخت است: آنلاین یا اعتباری؟ اگر کد تخفیف هم دارید، وارد کنید. با پرداخت فاکتور، در صفحه جدیدی که برای شما باز می‌شود، فرایند آماده‌سازی را خواهید دید.",
      Image: "https://web-cdn.snapp.ir/snapp-website/images/food/4-4-new.jpg",
      Alt: "Food4",
    },
  ]);

  const [selectedButton, setSelectedButton] = useState(null);

  return (
    <section className="w-full my-4">
      <div className="w-full px-[6%]">
        <ChoseParent
          buttons={buttons}
          setButtons={setButtons}
          selectedButton={selectedButton}
          setSelectedButton={setSelectedButton}
        />
      </div>
    </section>
  );
}

function ChoseParent({
  buttons,
  setButtons,
  selectedButton,
  setSelectedButton,
}) {
  return (
    <div className="flex flex-wrap items-center justify-center w-full">
      <ChoseButtons
        buttons={buttons}
        setButtons={setButtons}
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <ChoseText buttons={buttons} selectedButton={selectedButton} />
      <ChoseImage buttons={buttons} selectedButton={selectedButton} />
    </div>
  );
}

function ChoseButtons({
  buttons,
  setButtons,
  selectedButton,
  setSelectedButton,
}) {
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

function ChoseText({ buttons, selectedButton }) {
  const selected = buttons.find((button) => button.id === selectedButton);

  return (
    <div className="w-full md:w-[52vw] lg:w-[47vw] xl:w-[33vw] pr-8 flex flex-col">
      {selected && (
        <>
          <h2 className="font-bold text-[18px] xl:text-[19px] my-4">
            {selected.Title}
          </h2>
          <p className="leading-8 text-justify text-[14px]">{selected.Desc}</p>
        </>
      )}
      {!selected && (
        <>
          <h2 className="font-bold text-[18px] xl:text-[19px] my-4">
            شروع سفارش و انتخاب غذا
          </h2>
          <p className="leading-8 text-justify text-[14px]">
            با کلیک بر روی دکممه بالای صفحه، به صفحه سفارش غذا هدایت می شوید و
            پس از مشاهده رستوران‌های اطراف، آدرس‌تان را وارد کنید. حالا غذای
            موردنظرتان را بالای صفحه بنویسید یا گزینه رستوران را بزنید. راه
            آسان‌تر این است که در بخش دسته‌بندی‌ها، نوع غذا را مشخص کنید. از
            فودپارتی، جایزه خرید یا از کد تخفیف اسنپ فود هم غافل نشوید.
          </p>
        </>
      )}
    </div>
  );
}

function ChoseImage({ buttons, selectedButton }) {
  const selected = buttons.find((button) => button.id === selectedButton);
  return (
    <figure className="mx-10 my-5 md:my-0">
      {selected && (
        <img
          src={selected.Image}
          alt={selected.Alt}
          className="rounded-[9px] h-[200px]"
          loading="lazy"
        />
      )}
      {!selected && (
        <img
          src="https://web-cdn.snapp.ir/snapp-website/images/food/4-1-new.jpg"
          alt="Food1"
          className="rounded-[9px] h-[200px]"
          loading="lazy"
        />
      )}
    </figure>
  );
}

export default Chose;
