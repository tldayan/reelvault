import React, { useState, useEffect } from 'react';

export default function EntityCardComponent(OriginalCardComponent) {
  const UpdatedEntityCardComponent = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [posterLoaded, setPosterLoaded] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setImageLoaded(true);
      }, 500);

      return () => clearTimeout(timer);
    }, []);

    function handlePosterLoaded() {
      setPosterLoaded(true);
    }

    return <OriginalCardComponent {...props} imageLoaded={imageLoaded} posterLoaded={posterLoaded} handlePosterLoaded={handlePosterLoaded} />;
  };

  return UpdatedEntityCardComponent;
}
