import Header from "../Components/Header";
import Motto from "../Components/Motto";
import Foods from "../Components/Foods";
import MoreFoods from "../Components/MoreFoods";
import Advantage from "../Components/Advantage";
import Properties from "../Components/Properties";
import Advertisement from "../Components/Advertisement";
import News from "../Components/News";

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
    </main>
  );
}

export default Home;
