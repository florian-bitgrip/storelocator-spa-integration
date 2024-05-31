import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import EmptyPage from "./components/EmptyPage";
import StoreFinder from "./components/StoreFinder";

function App() {
  const [isStoreFinderBundleLoaded, setIsStoreFinderBundleLoaded] =
    useState(false);

  return (
    <div className="page-wrapper">
      <div className="nav-bar">
        <NavLink to="/">Page without Store Locator</NavLink>
        <NavLink to="/with-store-locator-1">Page with Store Locator 1 (Germany)</NavLink>
        <NavLink to="/with-store-locator-2">Page with Store Locator 2 (Netherlands)</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<EmptyPage />} />
        <Route
          path="/with-store-locator-1"
          element={
            <StoreFinder
              isStoreFinderBundleLoaded={isStoreFinderBundleLoaded}
              setIsStoreFinderBundleLoaded={setIsStoreFinderBundleLoaded}
              dataKey={"DE_Gebaeudetechnik_1075535"} // stores in Germany
            />
          }
        />
        <Route
          path="/with-store-locator-2"
          element={
            <StoreFinder
              isStoreFinderBundleLoaded={isStoreFinderBundleLoaded}
              setIsStoreFinderBundleLoaded={setIsStoreFinderBundleLoaded}
              dataKey={"KZQl4uVmMNAfozAHFe0qflB503OwlQ"} // stores in Netherlands
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
