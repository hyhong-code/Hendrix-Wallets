import React, { Fragment, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";

const ScrollToTop = ({ location }) => {
  const prevLocation = usePrevious(location);
  useEffect(() => {
    if (location !== prevLocation) {
      window.scrollTo(0, 0);
    }
  });

  return <Fragment></Fragment>;
};

// Hook
function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export default withRouter(ScrollToTop);
