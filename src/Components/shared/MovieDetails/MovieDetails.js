import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import styles from "./MovieDetails.module.css";
import { getMovieCredits, getMovieTags } from "../../../Store/app-actions";
import Images from "../Images/Images";
import Tags from "../Tags/Tags";
import Button from "@mui/material/Button";
import { Fragment } from "react";
import ReactPlayer from "react-player";
import { movieVideos } from "../../../Store/app-actions";
import { similarVideos } from "../../../Store/app-actions";
import "@splidejs/react-splide/css";
import Item from "../Item/Item";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

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

const MovieDetails = () => {
  const { id } = useParams();
  // console.log("ID: ", id);
  const { state } = useLocation();
  const dispatch = useDispatch();
  const castData = useSelector((state) => state.appState.movieCredits);
  const movieTags = useSelector((state) => state.appState.movieTags);
  const videos = useSelector((state) => state.appState.movieVideo);
  const similar = useSelector((state) => state.appState.similar);

  // console.log("VIDEOS: ", videos);

  // TRAILER MODAL LOGIC
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const castMembers = castData.slice(0, 4);

  useEffect(() => {
    dispatch(getMovieCredits(id));
    dispatch(getMovieTags(id));
    dispatch(movieVideos(id));
    dispatch(similarVideos(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      <div
        className={styles["movie-details"]}
        style={{
          backgroundImage: `url("https://www.themoviedb.org/t/p/original/${state.backdrop}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: "black",
        }}
      >
        <div className={styles["content-section"]}>
          <div className={styles["poster"]}>
            <img src={`${state?.poster}`} alt="" className={styles["img"]} />
          </div>
          <div className={styles["content"]}>
            <p className={styles["movie-name"]}>{state?.title}</p>
            <div className={styles["tags"]}>
              {movieTags?.map((item, i) => {
                return <Tags key={i} name={item.name}></Tags>;
              })}
            </div>
            <div className={styles["summary"]}>
              <p className={styles["summary-content"]}>{state?.overview}</p>
            </div>
            <div className="cast">
              <p className={styles["casts"]}>{""} Cast</p>
              <div className={styles["images"]}>
                {castMembers?.map((item, i) => {
                  return (
                    <Images
                      key={i}
                      name={item.name}
                      picture={item.profile_path}
                    ></Images>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className={styles["trailer-btn"]}
        style={{
          backgroundColor: "red",
          position: "absolute",
          left: "220px",
          bottom: "80px",
          color: "white",
          border: "2px solid red",
          borderRadius: "10px",
          padding: "10px 30px",
          fontWeight: "bold",
        }}
        onClick={handleOpen}
      >
        Watch Trailer
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
      </Modal>
      {/* <div className={styles["trailer-section"]}>
        <h3 className={styles["trailer-name"]}>{state?.title} Trailer</h3>
        <ReactPlayer
          className={styles["player"]}
          width="900px"
          height="600px"
          url={`https://www.youtube.com/watch?v=${videos?.key}`}
        />
      </div> */}
      <div className={styles["movies"]}>
        <h4 className={styles["movie-name2"]}>Similar</h4>
        <div className={styles["movie-items"]}>
          {similar?.map((item, i) => {
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
    </Fragment>
  );
};

export default MovieDetails;
