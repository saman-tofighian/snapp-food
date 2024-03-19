function Advertisement() {
  return (
    <section className="w-full mt-[50px] py-[50px] bg-[#f5f5f6]">
      <div className="w-full px-[6%]">
        <AdvertisementVideo />
      </div>
    </section>
  );
}

function AdvertisementVideo() {
  return (
    <div className="w-full flex justify-center items-center my-[40px]">
      <video
        src="https://web-cdn.snapp.ir/snapp-website/videos/ventures/3Food.mp4"
        className="w-full md:w-[70%] max-w-[800px] rounded-[9px]"
        poster="https://web-cdn.snapp.ir/snapp-website/images/food/food-cover-1.jpg"
        controlsList="nodownload"
        preload="none"
        controls
      ></video>
    </div>
  );
}

export default Advertisement;
