import React from "react";
import TrendingSection from "../Components/TrendingSection/TrendingSection";
import HeroSection from "../Components/HeroSection/HeroSection";
import styles from "./HomePage.module.css";
import TopRated from "../Components/TopRated/TopRated";
import TrendingTv from "../Components/TrendingSection/TrendingTv";
import TopRatedTv from "../Components/TopRated/TopRatedTv";

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <HeroSection></HeroSection>
      <TrendingSection></TrendingSection>
      <TopRated></TopRated>
      <TrendingTv></TrendingTv>
      <TopRatedTv></TopRatedTv>
    </div>
  );
};

export default HomePage;
