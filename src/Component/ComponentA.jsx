import React, { useEffect } from "react";
import RenderBreadcrumb from "./RenderBreadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { AXIOS } from "../Utils/axios";
import {
  decrement,
  increment,
  selectCountValue1,
  incrementAsync,
} from "../Redux/reducer/countSlice";
import { fetchApi, dataCallApi } from "../Redux/reducer/callApiSlice";
import { updateTheme, themeValue } from "../Redux/reducer/themeSlice";
const ComponentA = () => {
  const dispatch = useDispatch();
  const count1 = useSelector(selectCountValue1);
  const dataFetchApi = useSelector(dataCallApi);
  const theme = useSelector(themeValue);
  console.log("dataFetchApi", dataFetchApi);

  useEffect(() => {
    const abcde123 = async () => {
      const dataParam = {
        overrideDomain: "https://jsonplaceholder.typicode.com/users",
      };
      const dataApi = await AXIOS(dataParam);
      console.log("dataApi:", dataApi);
    };
    abcde123();
  }, []);

  return (
    <div>
      <RenderBreadcrumb />
      ComponentA: {count1}{" "}
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        BtnA decrement
      </button>{" "}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        BtnA increment
      </button>
      <button
        onClick={() => {
          dispatch(incrementAsync(3));
        }}
      >
        BtnA IncrementAsync
      </button>
      <button
        onClick={() => {
          dispatch(fetchApi());
        }}
      >
        BtnA CallApi
      </button>
      <div className="bg-brown-300 dark:bg-brown-800">Color</div>
      <button
        onClick={() => {
          const resultTheme = theme === "light" ? "dark" : "light";
          localStorage.setItem("theme-App", resultTheme);
          dispatch(updateTheme(resultTheme));
        }}
      >
        Toggle Theme {theme}
      </button>
    </div>
  );
};

export default ComponentA;
