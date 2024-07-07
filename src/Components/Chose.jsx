import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Chose() {
  const { t } = useTranslation();
  const [buttons, setButtons] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    setButtons([
      {
        id: 1,
        Text: t("ChoseBtn1"),
        BgColor: "#FF00A6",
        TextColor: "#fff",
        Title: t("ChoseTitle1"),
        Desc: t("ChoseDesc1"),
        Image: "https://web-cdn.snapp.ir/snapp-website/images/food/4-1-new.jpg",
        Alt: "Food1",
      },
      {
        id: 2,
        Text: t("ChoseBtn2"),
        BgColor: "#f5f5f6",
        TextColor: "#545567",
        Title: t("ChoseTitle2"),
        Desc: t("ChoseDesc2"),
        Image: "https://web-cdn.snapp.ir/snapp-website/images/food/4-2-new.jpg",
        Alt: "Food2",
      },
      {
        id: 3,
        Text: t("ChoseBtn3"),
        BgColor: "#f5f5f6",
        TextColor: "#545567",
        Title: t("ChoseTitle3"),
        Desc: t("ChoseDesc3"),
        Image: "https://web-cdn.snapp.ir/snapp-website/images/food/4-3-new.jpg",
        Alt: "Food3",
      },
      {
        id: 4,
        Text: t("ChoseBtn4"),
        BgColor: "#f5f5f6",
        TextColor: "#545567",
        Title: t("ChoseTitle4"),
        Desc: t("ChoseDesc4"),
        Image: "https://web-cdn.snapp.ir/snapp-website/images/food/4-4-new.jpg",
        Alt: "Food4",
      },
    ]);
  }, [t]);

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
    <div className="flex flex-col pr-8 ">
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
            {buttons[0]?.Title}
          </h2>
          <p className="leading-8 text-justify text-[14px]">
            {buttons[0]?.Desc}
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
