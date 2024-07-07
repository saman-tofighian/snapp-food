import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
function FQ() {
  return (
    <section className="w-full pt-[100px] pb-[70px] bg-[#fbfafb]">
      <div className="w-[100%] px-[4%] md:px-[6%] lg:px-[10%] xl:px-[max(140px,15%)] flex items-center justify-center xl:justify-between flex-wrap">
        <AccordionCustomAnimation />
      </div>
    </section>
  );
}

function AccordionCustomAnimation() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const { t } = useTranslation();
  return (
    <>
      <div className="w-full my-[32px]">
        <h2 className="font-bold text-[1.6rem]">{t("QuestionTitle")}</h2>
      </div>
      <Accordion
        open={open === 1}
        animate={CUSTOM_ANIMATION}
        className="bg-white shadow-lg rounded-[9px] py-[11px] px-[20px] my-[15px]"
      >
        <AccordionHeader onClick={() => handleOpen(1)}>
          <h4 className="text-[14px] sm:text-[18px] py-[2px]">
            {t("QuestionSubTitle1")}
          </h4>
        </AccordionHeader>

        <AccordionBody>
          <hr />
          <p className="text-[#737789] leading-[36px] font-medium py-[16px]">
            {t("QuestionDesc1")}
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        animate={CUSTOM_ANIMATION}
        className="bg-white shadow-lg rounded-[9px] py-[11px] px-[20px] my-[15px]"
      >
        <AccordionHeader onClick={() => handleOpen(2)}>
          <h4 className="text-[14px] sm:text-[18px] py-[2px]">
            {t("QuestionSubTitle2")}
          </h4>
        </AccordionHeader>

        <AccordionBody>
          <hr />
          <p className="text-[#737789] leading-[36px] font-medium py-[16px]">
            {t("QuestionDesc2")}
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        animate={CUSTOM_ANIMATION}
        className="bg-white shadow-lg rounded-[9px] py-[11px] px-[20px] my-[15px]"
      >
        <AccordionHeader onClick={() => handleOpen(3)}>
          <h4 className="text-[14px] sm:text-[18px] py-[2px]">
            {t("QuestionSubTitle3")}
          </h4>
        </AccordionHeader>

        <AccordionBody>
          <hr />
          <p className="text-[#737789] leading-[36px] font-medium py-[16px]">
            {t("QuestionDesc3")}
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 4}
        animate={CUSTOM_ANIMATION}
        className="bg-white shadow-lg rounded-[9px] py-[11px] px-[20px] my-[15px]"
      >
        <AccordionHeader onClick={() => handleOpen(4)}>
          <h4 className="text-[14px] sm:text-[18px] py-[2px]">
            {t("QuestionSubTitle4")}
          </h4>
        </AccordionHeader>

        <AccordionBody>
          <hr />
          <p className="text-[#737789] leading-[36px] font-medium py-[16px]">
            {t("QuestionDesc4")}
          </p>
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 5}
        animate={CUSTOM_ANIMATION}
        className="bg-white shadow-lg rounded-[9px] py-[11px] px-[20px] my-[15px]"
      >
        <AccordionHeader onClick={() => handleOpen(5)}>
          <h4 className="text-[14px] sm:text-[18px] py-[2px]">
            {t("QuestionSubTitle5")}
          </h4>
        </AccordionHeader>

        <AccordionBody>
          <hr />
          <p className="text-[#737789] leading-[36px] font-medium py-[16px]">
            {t("QuestionDesc5")}
          </p>
        </AccordionBody>
      </Accordion>
    </>
  );
}
export default FQ;
