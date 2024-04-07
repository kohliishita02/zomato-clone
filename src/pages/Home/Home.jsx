import React, { useState } from "react";
import Footer from "../../components/common/Footer/Footer";
import Header from "../../components/common/Header/Header";
import TabOptions from "../../components/common/TabOptions/TabOptions";
import Delivery from "../../components/Delivery/Delivery";
import DiningOut from "../../components/DiningOut/DiningOut";
import Nightlife from "../../components/Nightlife/Nightlife";

const getCorretScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;

    case "Dining Out":
      return <DiningOut />;

    case "Nightlife":
      return <Nightlife />;

    default:
      return <Delivery />;
  }
};

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorretScreen(activeTab)}
      <Footer />
    </div>
  );
};

export default HomePage;
