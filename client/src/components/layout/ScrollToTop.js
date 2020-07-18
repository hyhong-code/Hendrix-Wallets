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

function usePrevious(value) {
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      ref.current = value;
    }
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line
  }, [value]); // Only re-run if value changes

  // Return previous value
  return ref.current;
}

export default withRouter(ScrollToTop);
