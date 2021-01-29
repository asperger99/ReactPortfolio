import React, { useState } from "react";
import "./Projects.css";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { grey } from "@material-ui/core/colors";

function Projects(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: "black",
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      color: "azure",
    },
  }));
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const body = (
    // <div style={modalStyle} className={classes.paper}>
    <div style={modalStyle} className={`${classes.paper} modal`}>
      <h2>
        <span style={{ fontSize: "1rem", fontWeight: "300" }}>Title: </span>
        {props.title}
      </h2>
      <p>{props.description}</p>
      <p>
        {props.github ? (
          <a href={props.github} target="_blank">
            Github Repo
          </a>
        ) : (
          <>
            <a href={props.githubF} target="_blank">
              Github Repo(Front End)
            </a>
            <a href={props.githubB} target="_blank">
              Github Repo(Back End)
            </a>
          </>
        )}
      </p>
      <p>
        <a href={props.live} target="_blank">
          Live version
        </a>
      </p>
      <div className="techused__container">
        <h3>Tech Used:</h3>
        {props.techs?.map((tech) => (
          <img className="techused__icons" src={tech} alt="" />
        ))}
      </div>
    </div>
  );

  return (
    <div className="project__container">
      <div className="project__img__section">
        <img className="project__container__img" src={props.url} alt="" />
      </div>

      <div className="project__details">
        {/* <h3 className="project">Title</h3> */}
        <button onClick={() => setOpen(true)}>Details</button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default Projects;
