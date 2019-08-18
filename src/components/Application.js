import React, { useState, useEffect } from 'react';
//import _ from "lodash";
import About from './About';
import Term from './Term';
import './Application.css';

const Application = (props) => {
  const [ currentTerms, setCurrentTerms ] = useState([]);
  const [ next, setNext ] = useState(0);

  useEffect(() => {
    setCurrentTerms(TermsFromData(props.data));
  },[]);

  const TermsFromData = (data) => {
    let newTerms = [];
    let length = data.allSiteTermsJson.edges.length;

    for (let i = 0; i < length; i++) {
      if (data.allSiteTermsJson.edges[i].node.name)
        newTerms.push(data.allSiteTermsJson.edges[i].node);
    }
    return newTerms;
  }

  const handleOpenAll = () => {
    let terms = currentTerms;

    let newTerms = [];
    terms.map(function (term) {
      term['forceOpen'] = true;
      newTerms.push(term);
      return 0;
    });
    setCurrentTerms(newTerms);
  }

  const handleCloseAll = () => {
    let terms = currentTerms;

    let newTerms = [];
    terms.map(function (term) {
      term['forceOpen'] = false;
      newTerms.push(term);
      return 0;
    });
    setCurrentTerms(newTerms);
  }

  const handleRandom = () => {
    let terms = TermsFromData(props.data);

    let min=0; 
    let max=terms.length;  
    var random =Math.floor(Math.random() * (+max - +min)) + +min;

    let newTerms = [];
    for (let i = 0; i < terms.length; i++) {
      if (i === random) {
        terms[i]['forceOpen'] = true;
        newTerms.push(terms[i]);
        break;
      }
    }
    setCurrentTerms(newTerms);
  }

  const handlePrev = () => {
    let terms = TermsFromData(props.data);
    let newNext = next;

    newNext -= 1;
    if (newNext < 0)
    newNext = terms.length-1;

    let newTerms = [];
    for (let i = 0; i < terms.length; i++) {
      if (i === newNext) {
        terms[i]['forceOpen'] = true;
        newTerms.push(terms[i]);
        break;
      }
    }
    setNext(newNext);
    setCurrentTerms(newTerms);
  }

  const handleNext = () => {
    let terms = TermsFromData(props.data);
    let newNext = next;

    let newTerms = [];
    for (let i = 0; i < terms.length; i++) {
      if (i === newNext) {
        terms[i]['forceOpen'] = true;
        newTerms.push(terms[i]);
        break;
      }
    }

    newNext += 1;
    if (newNext === terms.length)
    newNext = 0;
    setNext(newNext);
    setCurrentTerms(newTerms);
  }

  const handleReset = () => {
    let terms = TermsFromData(props.data);
    terms.map(function (term) {
      term['forceOpen'] = false;
      return 0;
    });
    setNext(0);
    setCurrentTerms(terms);
  }

  return (
    <div className="Application">
      <About 
        handleOpenAll={handleOpenAll}
        handleCloseAll={handleCloseAll}
        handleRandom={handleRandom}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleReset={handleReset}
        />
      { currentTerms.map(function(term, idx) {
        return(
          <Term term={term} key={idx}/>
        );
    })}
    </div>
  );  

}

export default Application;
