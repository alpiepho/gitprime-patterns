import React from "react"
import PropTypes from "prop-types"
import ChevronPane from "./ChevronPane"
import "./SubTermGoogle.css"

const SubTermGoogle = ({subTerm, forceOpen}) => {
  return (
    <ChevronPane
      classBase="subtermgoogle"
      classButton="subtermgoogle-button"
      classLabel="subtermgoogle-label"
      classContent="subtermgoogle-section"
      name={subTerm.name}
      forceOpen={forceOpen}
    >
      <ul>
        {subTerm.list.map(function(item, idx) {
          let googleSearchHref  = "https://www.google.com/search?q=" + item.name;

          return (
            <li key={idx}>
              <a
                className="subtermgoogle-link"
                target="_blank"
                rel="noopener noreferrer"
                href={googleSearchHref}
              >
                {item.name}
              </a>
            </li>
          )
        })}
      </ul>
    </ChevronPane>
  )
}

SubTermGoogle.propTypes = {
  subTerm: PropTypes.object.isRequired,
  forceOpen: PropTypes.bool,
}

export default SubTermGoogle
