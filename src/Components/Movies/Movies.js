import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Item from "../shared/Item/Item";
import styles from "./Movies.module.css";

const Movies = () => {
  const data = useSelector((state) => state.appState.trendingList);

  return (
    <div className={styles["movies"]}>
      <h4 className={styles["movie-name"]}>Movies</h4>
      <div className={styles["movie-items"]}>
        {data?.map((item, i) => {
          return (
            <Item
              id={item.id}
              key={item.id}
              item={item}
              title={item.title}
              poster={item.poster_path}
              overview={item.overview}
              backdropImage={item.backdrop_path}
            ></Item>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
