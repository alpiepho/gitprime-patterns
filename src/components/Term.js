import React from "react"
import PropTypes from "prop-types"
import ChevronPane from "./ChevronPane"
import SubTermSimple from "./SubTermSimple"
import SubTermList from "./SubTermList"
import SubTermLinks from "./SubTermLinks"
import SubTermGoogle from "./SubTermGoogle"
import "./Term.css"

const Term = ({term}) => {
  return (
    <ChevronPane
      classBase="term"
      classButton="term-button"
      classLabel="term-label"
      classContent="term-section"
      name={term.name}
      forceOpen={term.forceOpen}
    >
      {term.imagePre ? (
        <img
          className="term-imagepre"
          src={term.imagePre}
          alt="term imagepre"
        />
      ) : null}

      <div className="term-description">{term.description}</div>
      {term.imagePost ? (
        <img
          className="term-imagepost"
          src={term.imagePost}
          alt="term imagepost"
        />
      ) : null}

      <div>
        {term.subtermsimple ? (
          <SubTermSimple
            subTerm={term.subtermsimple}
            forceOpen={term.forceOpen}
          />
        ) : null}
      </div>

      <div>
        {term.subtermlist ? (
          <SubTermList
            subTerm={term.subtermlist}
            forceOpen={term.forceOpen}
          />
        ) : null}
      </div>

      <div>
        {term.subtermlinks ? (
          <SubTermLinks
            subTerm={term.subtermlinks}
            forceOpen={term.forceOpen}
          />
        ) : null}
      </div>

      <div>
        {term.subtermgoogle ? (
          <SubTermGoogle
            subTerm={term.subtermgoogle}
            forceOpen={term.forceOpen}
          />
        ) : null}
      </div>
    </ChevronPane>
  )
}

Term.propTypes = {
  term: PropTypes.object.isRequired,
}

export default Term
