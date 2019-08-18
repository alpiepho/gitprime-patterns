import React from "react"
import PropTypes from "prop-types"
import ChevronPane from "./ChevronPane"
import "./SubTermLinks.css"

const SubTermLinks = ({subTerm, forceOpen}) => {
  return (
    <ChevronPane
      classBase="subtermlinks"
      classButton="subtermlinks-button"
      classLabel="subtermlinks-label"
      classContent="subtermlinks-section"
      name={subTerm.name}
      forceOpen={forceOpen}
    >
      <ul>
        {subTerm.list.map(function(item, idx) {
          return (
            <li key={idx}>
              <a
                className="subtermlinks-link"
                target="_blank"
                rel="noopener noreferrer"
                href={item.url}
              >
                {item.name ? item.name : item.url}
              </a>
            </li>
          )
        })}
      </ul>
    </ChevronPane>
  )
}

SubTermLinks.propTypes = {
  subTerm: PropTypes.object.isRequired,
  forceOpen: PropTypes.bool,
}

export default SubTermLinks
