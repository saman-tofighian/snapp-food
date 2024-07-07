import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Descriptions() {
  return (
    <section className="w-full my-8">
      <div className="w-full px-[6%]">
        <DescriptionsText />
      </div>
    </section>
  );
}

function DescriptionsText() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        id: 1,
        Title: t("DescriptionTitle1"),
        Desc: t("DescriptionDesc1"),
      },
      {
        id: 2,
        Title: t("DescriptionTitle2"),
        Desc: t("DescriptionDesc2"),
      },
      {
        id: 3,
        Title: t("DescriptionTitle3"),
        Desc: t("DescriptionDesc3"),
      },
      {
        id: 4,
        Title: t("DescriptionTitle4"),
        Desc: t("DescriptionDesc4"),
      },
    ]);
  }, [i18n.language, t]);

  return (
    <div className="flex flex-col flex-wrap items-center w-full desc">
      {data.map((val) => (
        <div key={val.id} className="w-full xl:w-4/5 my-4 p-4 rounded-[9px]">
          <h2 className="font-bold">{val.Title}</h2>
          <p className="font-light leading-9 text-justify">{val.Desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Descriptions;
