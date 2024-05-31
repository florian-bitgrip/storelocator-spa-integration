import React, { useEffect, useLayoutEffect } from "react";

const StoreFinder = ({
  isStoreFinderBundleLoaded,
  setIsStoreFinderBundleLoaded,
  dataKey,
}) => {
  // we need to use useLayoutEffect here and not useEffect, because
  // we first have to unmount the DOM element and after update the screen
  // useEffect does this asynchronously, which throws then errors
  useLayoutEffect(() => {
    return () => {
      window.UberallStorefinderUnmount();
      console.log("Storefinder Unmount", dataKey);
    };
  }, [dataKey]); // data key is provided to force the hook to run again when the data key changes, as if the component would fully reload

  useEffect(() => {
    if (!isStoreFinderBundleLoaded) {
      // This is the first time we render the store finder. We need to call window.UberallStorefinderStart
      // because we need to fetch the storefinder script and load it into the browsers memory
      window.UberallStorefinderStart();
      console.log("Storefinder Start", dataKey);
      setIsStoreFinderBundleLoaded(true);
    } else {
      // When the storefinder bundle is already loaded into the browsers memory, we need to call
      // window.UberallStorefinderRestart to only update the screen again
      window.UberallStorefinderRestart();
      console.log("Storefinder Restart", dataKey);
    }
  }, [dataKey]); // data key is provided to force the hook to run again when the data key changes, as if the component would fully reload

  return (
    <div
      id="store-finder-widget"
      data-key={dataKey}
      data-language="en"
      data-baseurl="https://uberall.com/"
      data-showheader="true"
      data-showbrands="true"
      data-showservices="true"
      data-footertext="Uberall Storefinder Test Footer"
      data-title="Uberall Storefinder"
      data-filters="services"
      data-widgetoriginurl=""
    ></div>
  );
};

export default StoreFinder;