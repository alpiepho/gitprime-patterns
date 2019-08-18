import React, { useState } from 'react';
import PropTypes from "prop-types"
import { FaChevronRight, FaChevronDown } from "react-icons/fa"

const ChevronPane = (props) => {
  const [arrow, setArrow] = useState(
    "right"
  );
  const [show, setShow] = useState(
    false
  );

  const handleClick = event => {
    if (arrow === 'right') {
      setArrow('down');
      setShow(true);
    }
    else {
      setArrow('right');
      setShow(false);
    }
  }

  return (
    <div className={props.classBase}>
      <button className={props.classButton} onClick={handleClick}>
        <h3 className={props.classLabel}>
          { (arrow === 'down' || props.forceOpen) ? <FaChevronDown /> : <FaChevronRight /> }
          {' '}{props.name}
        </h3>
      </button>
      { (show | props.forceOpen) ?
      <div className={props.classContent}>
          {props.children}
      </div>
      : null }
    </div>
  );
}

ChevronPane.propTypes = {
  classBase: PropTypes.string.isRequired,
  classButton: PropTypes.string.isRequired,
  classLabel: PropTypes.string.isRequired,
  classContent: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  forceOpen: PropTypes.bool,
}

export default ChevronPane;
