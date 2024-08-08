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
        <NavLink to="/">No Store Locator</NavLink>
        <NavLink to="/with-store-locator-1">Store Locator 1</NavLink>
        <NavLink to="/with-store-locator-2">Store Locator 2</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<EmptyPage />} />
        <Route
          path="/with-store-locator-1"
          element={
            <StoreFinder
              isStoreFinderBundleLoaded={isStoreFinderBundleLoaded}
              setIsStoreFinderBundleLoaded={setIsStoreFinderBundleLoaded}
              dataKey={"AnRI9bQVEf7Vaiomh5qZCm1NNrJExo"} // stores in Germany
            />
          }
        />
        <Route
          path="/with-store-locator-2"
          element={
            <StoreFinder
              isStoreFinderBundleLoaded={isStoreFinderBundleLoaded}
              setIsStoreFinderBundleLoaded={setIsStoreFinderBundleLoaded}
              dataKey={"s8DAy2ux3eEuBt5K8EkMJVC9MLCEBf"} // stores in Netherlands
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
