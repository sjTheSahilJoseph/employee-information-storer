import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  // Reset the progress bar when the location changes (navigation starts)
  useEffect(() => {
    setProgress(0);
  }, [location]);

  // Simulate loading progress
  useEffect(() => {
    let interval;
    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 90 ? 100 : prevProgress + 70
        );
      }, 50);
    }
    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return <LoadingBar color="#ffaa11" progress={progress} />;
};

export default Loading;
