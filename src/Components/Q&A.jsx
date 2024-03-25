import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
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

  return (
    <>
      <div className="w-full my-[32px]">
        <h2 className="font-bold text-[1.6rem]">پرسش های پرتکرار</h2>
      </div>
      <Accordion
        open={open === 1}
        animate={CUSTOM_ANIMATION}
        className="bg-white shadow-lg rounded-[9px] py-[11px] px-[20px] my-[15px]"
      >
        <AccordionHeader onClick={() => handleOpen(1)}>
          <h4 className="text-[14px] sm:text-[18px] py-[2px]">
            تحویل غذا چقدر زمان می‌برد؟
          </h4>
        </AccordionHeader>

        <AccordionBody>
          <hr />
          <p className="text-[#737789] leading-[36px] font-medium py-[16px]">
            زمان تحویل سفارش متغیر است اما اسنپ‌ سعی می کند در سریع‌ترین زمان
            ممکن سفارش شما ‏را تحویل ‌دهد.‏
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
            از چه راه‌هایی می‌توان هزینه غذا را پرداخت کرد؟
          </h4>
        </AccordionHeader>

        <AccordionBody>
          <hr />
          <p className="text-[#737789] leading-[36px] font-medium py-[16px]">
            کاربران می‌توانند از سه طریق مختلف از جمله حضوری، اعتباری و آنلاین
            مبلغ سفارش خود را ‏پرداخت کنند.‏
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
            آیا می‌توان در یک ثبت سفارش از چند رستوران غذا تهیه کرد؟
          </h4>
        </AccordionHeader>

        <AccordionBody>
          <hr />
          <p className="text-[#737789] leading-[36px] font-medium py-[16px]">
            در هر سفارش می‌توان تنها از یک رستوران ثبت ‏سفارش داشت. اما برای
            سفارش از رستوران‌های بیشتر، پس از ثبت سفارش اول خود می‌توانید ‏سفارش
            جدیدی از رستورانی دیگر داشته باشید.
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
            از کجا کد تخفیف دریافت کنم؟
          </h4>
        </AccordionHeader>

        <AccordionBody>
          <hr />
          <p className="text-[#737789] leading-[36px] font-medium py-[16px]">
            تخفیف‌ها با توجه به کمپین‌های مختلف در اختیار مشتریان قرار می‌گیرند.
            از طریق اسنپ کلاب هم ‏می‌توانید تخفیف‌های تفکیک شده برای خدماتی نظیر
            سفارش غذا، کیک و شیرینی و نانوایی را ‏دریافت کنید. همچنین بسته‌های
            خدماتی در راستای کاهش هزینه‌های سفارش‌های شما نیز ارایه شده است.
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
            چگونه برای سفارش غذا اقدام کنم؟
          </h4>
        </AccordionHeader>

        <AccordionBody>
          <hr />
          <p className="text-[#737789] leading-[36px] font-medium py-[16px]">
            کافی است دکمه واقع در بالای صفحه را انتخاب کنید و از بهترین رستوران
            های و فست های اطراف خود، درخواست سفارش غذا را ثبت کنید.
          </p>
        </AccordionBody>
      </Accordion>
    </>
  );
}
export default FQ;
