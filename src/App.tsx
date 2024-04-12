import React, { useState } from "react";
import "./App.css";
import logo from "./images/336442851_1277974583102386_5163510510687732777_n-1.png";
import hamburgerImage from "./images/Foods/pngtree-hamburger-png-illustration-png-image_10158744.png";
import omeletImage from "./images/Foods/sekandari.app.omlet.khoshmaze_dcb6dbcd-6bdd-4e94-9874-0e4b1872337f.png";
import beanFeedImage from "./images/Foods/loobia.jpg";
import lentilFeedImage from "./images/Foods/adas.png";
import eggplantCurdImage from "./images/Foods/tazeen-kashk-o-bademjan-2_11zon.png";
import homsImage from "./images/Foods/hummus_PNG15.png";
import specialPotatosImage from "./images/Foods/potato-fries.png";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import FoodItem from "./Components/food-item/food-item";

function App() {
  const [mode, setMode] = useState("increase");
  const toggleMode = () => {
    setMode(mode === "increase" ? "decrease" : "increase");
    console.log(mode);
  };

  return (
    <div>
      <input type="text" onKeyUp={toggleMode} />
      <Header cafeName="Café Chi" Instagram="cafechi1402" logo={logo} />
      <main>
        <FoodItem
          image={hamburgerImage}
          foodName="همبرگر"
          description="گوشت چرخ کرده + سبزیجات"
          count={20}
          price={120000}
          foodCardMode={mode}
        />
        <FoodItem
          image={omeletImage}
          foodName="املت"
          description="تخم مرغ + گوجه + سبزیجات"
          count={-1}
          price={40000}
          foodCardMode={mode}
        />
        <FoodItem
          image={beanFeedImage}
          foodName="خوراک لوبیا"
          description="لوبیا چیتی + قارچ + روغن زیتون"
          count={15}
          price={60000}
          foodCardMode={mode}
        />
        <FoodItem
          image={lentilFeedImage}
          foodName="خوراک عدس"
          description="عدس + سیب زمینی + روغن زیتون"
          count={15}
          price={60000}
          foodCardMode={mode}
        />
        <FoodItem
          image={eggplantCurdImage}
          foodName="کشک بادمجان"
          description="بادمجان کبابی + کشک + گردو + سیر داغ و پیاز داغ"
          count={0}
          price={90000}
          foodCardMode={mode}
        />
        <FoodItem
          image={homsImage}
          foodName="حمص"
          description="نخود + ارده + ادویه + روغن زیتون"
          count={5}
          price={110000}
          foodCardMode={mode}
        />
        <FoodItem
          image={specialPotatosImage}
          foodName="سیب زمینی ویژه"
          description="سیب زمینی سرخ شده + پنیر گودا"
          count={15}
          price={90000}
          foodCardMode={mode}
        />
      </main>
      <Footer
        instagram="@Atishots"
        description="مجموعه عکس های طبیعت و محیط زیست"
        instagramID="Atishots"
      />
      <Footer
        instagram="imtaha_ir"
        description="آموزش برنامه نویسی"
        instagramID="@imtaha_ir"
      />
      <Footer
        instagram="fitgirl_collection"
        description="فروشگاه لباس های ورزشی زنانه"
        instagramID="@fitgirl_collection"
      />
    </div>
  );
}

export default App;
