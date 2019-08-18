import React from 'react';
import PropTypes from "prop-types"
import ChevronPane from './ChevronPane';
import './SubTermSimple.css';

const SubTermSimple = ({subTerm, forceOpen}) => {
  return (
    <ChevronPane
      classBase='subtermsimple'
      classButton='subtermsimple-button'
      classLabel='subtermsimple-label'
      classContent='subtermsimple-section'
      name={subTerm.name}
      forceOpen = {forceOpen}
    >
      {subTerm.description}
    </ChevronPane>
  );
}

SubTermSimple.propTypes = {
  subTerm: PropTypes.object.isRequired,
  forceOpen: PropTypes.bool,
}

export default SubTermSimple;
