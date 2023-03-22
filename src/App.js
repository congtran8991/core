import React, { Suspense } from "react";
import Navigation from "./Navigation";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navigation />
    </Suspense>
  );
}

export default App;
