import React from "react"
import PropTypes from "prop-types"
import ChevronPane from "./ChevronPane"
import "./SubTermList.css"

const SubTermList = ({subTerm, forceOpen}) => {
  return (
    <ChevronPane
      classBase="subtermlist"
      classButton="subtermlist-button"
      classLabel="subtermlist-label"
      classContent="subtermlist-section"
      name={subTerm.name}
      forceOpen={forceOpen}
    >
      {subTerm.ordered ? (
        <ol>
          {subTerm.list.map(function(item, idx) {
            return <li key={idx}>{item.description}</li>
          })}
        </ol>
      ) : (
        <ul>
          {subTerm.list.map(function(item, idx) {
            return <li key={idx}>{item.description}</li>
          })}
        </ul>
      )}
    </ChevronPane>
  )
}

SubTermList.propTypes = {
  subTerm: PropTypes.object.isRequired,
  forceOpen: PropTypes.bool,
}

export default SubTermList
