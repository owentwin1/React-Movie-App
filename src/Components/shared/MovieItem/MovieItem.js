import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import { movieVideos } from "../../../Store/app-actions";
import styles from "./MovieItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";

const style = {
  position: "absolute",
  margin: "auto",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "black",
  border: "2px solid red",
  boxShadow: 24,
  p: 4,
};

const MovieItem = (props) => {
  const [open, setOpen] = React.useState(false);
  const [spinner, setSpinner] = React.useState(false);

  const handleOpen = () => {
    setSpinner(true);
    setTimeout(() => {
      setSpinner(false);
    }, 1000);
    dispatch(movieVideos(props?.id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(movieVideos());
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.appState.movieVideo);

  useEffect(() => {
    dispatch(movieVideos(props?.id));
  }, [dispatch, props?.id]);

  return (
    <div
      className={styles["movie-item"]}
      style={{
        backgroundImage: `url("https://www.themoviedb.org/t/p/original/${props.backdropImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        backgroundColor: "black",
      }}
    >
      <div className={styles["description"]}>
        <h2 className={styles["movie-name"]}>{props.title}</h2>
        <p className={styles["summary-plot"]}>{props.overview}</p>
        <div className={styles["btns"]}>
          <button
            onClick={() => {
              navigate(`/movie-details/${props.id}`, {
                state: {
                  title: props.title,
                  item: props.item,
                  id: props.id,
                  poster: `https://www.themoviedb.org/t/p/w500${props.poster}`,
                  overview: props.overview,
                  backdrop: props.backdropImage,
                },
              });
            }}
            className={styles["btn1"]}
          >
            Watch now
          </button>
          <button className={styles["btn2"]} onClick={handleOpen}>
            Watch trailer
          </button>
        </div>
      </div>
      <div className={styles["img"]}>
        <img
          src={`https://www.themoviedb.org/t/p/w500${props.poster}`}
          className={styles["img-poster"]}
          alt=""
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {spinner ? (
          <div
            style={{
              margin: "auto",
              transform: "translate(650px,300px)",
            }}
          >
            <Spinner />
          </div>
        ) : (
          <Box sx={style}>
            <button
              className=""
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "7px 40px",
                fontWeight: "bold",
                borderRadius: "10px",
                position: "absolute",
                top: "588px",
                cursor: "pointer",
                border: "2px solid red",
              }}
              onClick={handleClose}
            >
              Close
            </button>
            <ReactPlayer
              className={styles["player"]}
              width="900px"
              height="600px"
              url={`https://www.youtube.com/watch?v=${videos?.key}`}
            />
          </Box>
        )}
      </Modal>
    </div>
  );
};

export default MovieItem;
