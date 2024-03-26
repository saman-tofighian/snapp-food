import Header from "../Components/Header";
import Motto from "../Components/Motto";
import Foods from "../Components/Foods";
import MoreFoods from "../Components/MoreFoods";
import Advantage from "../Components/Advantage";
import Properties from "../Components/Properties";
import Advertisement from "../Components/Advertisement";
import News from "../Components/News";
import Restaurant from "../Components/Restaurant";
import Descriptions from "../Components/Descriptions";
import MoreFoods2 from "../Components/MoreFoods2";
import Banner from "../Components/Banner";
import FQ from "../Components/Q&A";
import Footer from "../Components/Footer";

function Home() {
  return (
    <main className="w-full">
      <Header />
      <Motto />
      <Foods />
      <MoreFoods />
      <Advantage />
      <Properties />
      <Advertisement />
      <News />
      <Restaurant />
      <Descriptions />
      <MoreFoods2 />
      <FQ />
      <Banner />
      <Footer />
    </main>
  );
}

export default Home;
