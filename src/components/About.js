import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  FaCaretLeft,
  FaCaretRight,
  FaChevronRight,
  FaChevronDown,
  FaRandom,
  FaEllipsisH,
} from "react-icons/fa"
import "./About.css"

const config = require("../../data/siteConfig")

const About = props => {
  const [arrow, setArrow] = useState("right")

  const handleOpenClick = event => {
    if (arrow === "right") {
      setArrow("down")
      props.handleOpenAll()
    } else {
      setArrow("right")
      props.handleCloseAll()
    }
  }

  const handleRandomClick = event => {
    props.handleRandom()
  }

  const handlePrevClick = event => {
    props.handlePrev()
  }

  const handleNextClick = event => {
    props.handleNext()
  }

  const handleResetClick = event => {
    setArrow("right")
    props.handleReset()
  }

  return (
    <div className="about">
      <hr />
      <div className="about-section">
        <p>
          {config.siteNote} Code is on{" "}
          <a
            rel="noopener noreferrer"
            href={config.siteNoteGitHub}
            target="_blank"
          >
            Github
          </a>
        </p>
        <div className="about-section-header full-width">
          {config.siteImagePre ? (
            <img
              className="about-imagepre"
              src={config.siteImagePre}
              alt="about imagepre"
            />
          ) : null}
          <h1>{config.siteTitle}</h1>
          {config.siteImagePost ? (
            <img
              className="about-imagepost"
              src={config.siteImagePost}
              alt="about imagepost"
            />
          ) : null}
          <p>{config.siteDescription}</p>
        </div>
      </div>
      <div className="about-button-section">
        <button className="about-button" onClick={handleOpenClick}>
          <h3 className="about-label">
            {arrow === "right" ? <FaChevronRight /> : <FaChevronDown />} all
          </h3>
        </button>
        <button className="about-button" onClick={handleRandomClick}>
          <h3 className="about-label">
            <FaRandom /> rand
          </h3>
        </button>
        <button className="about-button" onClick={handlePrevClick}>
          <h3 className="about-label">
            <FaCaretLeft /> prev
          </h3>
        </button>
        <button className="about-button" onClick={handleNextClick}>
          <h3 className="about-label">
            <FaCaretRight /> next
          </h3>
        </button>
        <button className="about-button" onClick={handleResetClick}>
          <h3 className="about-label">
            <FaEllipsisH /> rst
          </h3>
        </button>
      </div>
    </div>
  )
}

About.propTypes = {
  handleOpenAll: PropTypes.func.isRequired,
  handleCloseAll: PropTypes.func.isRequired,
  handleRandom: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
}

export default About
