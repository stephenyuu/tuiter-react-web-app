import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../../styles/styles.css";
import { createTuitThunk } from "../../services/tuits-thunks";

const WhatsHappening = () => {
  const [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      tuit: whatsHappening,
    };
    dispatch(createTuitThunk(newTuit));
  };
  return (
    <div className="row border border-0">
      <div className="col-auto">
        <img
          src="/images/tuiter-ceo-pfp.jpeg"
          alt="Elon Musk Profile Pic"
          className="rounded-circle wd-profile-pic"
        />
      </div>
      <div className="col-10">
        <textarea
          value={whatsHappening}
          placeholder="What's happening?"
          className="form-control border-0"
          onChange={(event) => setWhatsHappening(event.target.value)}
        ></textarea>
        <div className="mt-3">
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={tuitClickHandler}
          >
            Tuit
          </button>
          <div className="text-primary fs-2">
            <i className="bi bi-card-image me-3"></i>
            <i className="bi bi-filetype-gif me-3"></i>
            <i className="bi bi-bar-chart me-3"></i>
            <i className="bi bi-emoji-smile me-3"></i>
            <i className="bi bi-geo-alt"></i>
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
};

export default WhatsHappening;
