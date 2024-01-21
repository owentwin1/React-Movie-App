import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["name"]}>
        <Link to={"./"} className={styles["footer-name"]}>
          <h2 className={styles["app-name"]}>
            <span>
              {" "}
              <FontAwesomeIcon
                className={styles["icon"]}
                icon={faCirclePlay}
              />{" "}
            </span>{" "}
            rMovies.com
          </h2>
        </Link>
      </div>
      <div className={styles["all-links"]}>
        <div className={styles["container-1"]}>
          <Link className={styles["link"]} to={"/"}>
            Home
          </Link>
          <Link className={styles["link"]}>Contact us</Link>
          <Link className={styles["link"]}>Term Of service</Link>
          <Link className={styles["link"]}>About us</Link>
        </div>
        <div className={styles["container-2"]}>
          <Link className={styles["link"]}>Live</Link>
          <Link className={styles["link"]}>FAQ</Link>
          <Link className={styles["link"]}>Premium</Link>
          <Link className={styles["link"]}>Privacy policy</Link>
        </div>
        <div className={styles["container-3"]}>
          <Link className={styles["link"]} to={"/movies"}>
            You must watch
          </Link>
          <Link className={styles["link"]} to={"/top-movies"}>
            Recent release
          </Link>
          <Link className={styles["link"]} to={"/top-movies"}>
            Top IMDB
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
