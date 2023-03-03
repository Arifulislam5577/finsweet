import React from "react";
import BlogArea from "./components/BlogArea";
import EpisodeArea from "./components/EpisodeArea";
import HeroArea from "./components/HeroArea";
import PodcastArea from "./components/PodcastArea";
import SponsorArea from "./components/SponsorArea";

const HomePage = () => {
  return (
    <section>
      <HeroArea />
      <PodcastArea />
      <EpisodeArea />
      <BlogArea />
      <SponsorArea />
    </section>
  );
};

export default HomePage;
