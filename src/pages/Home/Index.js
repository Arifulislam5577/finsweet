import React from "react";
import EpisodeArea from "./components/EpisodeArea";
import HeroArea from "./components/HeroArea";
import SponsorArea from "./components/SponsorArea";

const HomePage = () => {
  return (
    <section>
      <HeroArea />
      <SponsorArea />
      <EpisodeArea />
    </section>
  );
};

export default HomePage;
