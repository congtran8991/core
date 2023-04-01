import React, { Suspense, useEffect, useCallback } from "react";
import Navigation from "./Navigation";
import { useSelector, useDispatch } from "react-redux";
import { updateTheme, themeValue } from "./Redux/reducer/themeSlice";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector(themeValue);
  const stableDispatch = useCallback(dispatch, [dispatch]);
  useEffect(() => {
    const themeLocal = localStorage.getItem("theme-App") || "light";
    stableDispatch(updateTheme(themeLocal));
    console.log("hchhschs")
  }, [stableDispatch]);
  return (
    <div className={theme}>
      {/* Header */}
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
      </Suspense>
      {/* Footer */}
    </div>
  );
}

export default App;
