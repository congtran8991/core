import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Test from "../Component/Test";
const timeout = (ms) => {
  const promise = new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
  return promise;
};

const ComponentA = lazy(async () => {
  await timeout(2000);
  return import("../Component/ComponentA");
});
const ComponentB = lazy(() => import("../Component/ComponentB"));
const ComponentC = lazy(() => import("../Component/ComponentC"));

const routes = [
  {
    path: "/",
    exact: false,
    element: <Navigate to="/A" />,
  },
  {
    path: "/A",
    exact: false,
    element: <Test />,
  },
  {
    path: "/A/:id",
    exact: false,
    element: <ComponentA />,
  },
  {
    path: "/B",
    element: <ComponentB />,
  },
  {
    path: "/C",
    element: <ComponentC />,
  },
  {
    path: "*",
    element: <div>Not found</div>,
  },
];

export const routers = createBrowserRouter(routes);
