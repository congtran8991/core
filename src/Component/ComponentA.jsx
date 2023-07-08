import React, { useEffect, useCallback } from "react";
import RenderBreadcrumb from "./RenderBreadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { ApiManager } from "../Utils";
import {
  decrement,
  increment,
  selectCountValue1,
  incrementAsync,
} from "../Redux/reducer/countSlice";
import { fetchApi, dataCallApi } from "Redux/reducer/callApiSlice";
import { updateTheme, themeValue } from "Redux/reducer/themeSlice";

import { Portal } from "../Utils";
import { updateAuthorizationToken } from "Constants/query";

import { popupRef } from "Constants";

import DuyenGa from "./ComponentDuyenga";
// import

const ComponentA = () => {
  const dispatch = useDispatch();
  const count1 = useSelector(selectCountValue1);
  const dataFetchApi = useSelector(dataCallApi);
  const theme = useSelector(themeValue);
  console.log("dataFetchApi", dataFetchApi);

  updateAuthorizationToken("vs");

  useEffect(() => {
    const abcde123 = async () => {
      const dataParam = {
        overrideDomain: "https://jsonplaceholder.typicode.com/users",
      };
      const dataApi = await ApiManager.request({
        url: dataParam.overrideDomain,
      });
      console.log("dataApi:", dataApi);
    };
    abcde123();
  }, []);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log("hvhvhs1", username, password);
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
        onClick={(e) => {
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
      <div
        onClick={() => {
          popupRef.current?.open({
            id: "123",
            content: <DuyenGa />,
            handleOnclick: handleClick,
          });
          // Portal.popup.open({
          //   id: '123',
          //   content: 'Trần Công'
          // })
        }}
      >
        Show popup
      </div>
      <button>xoá popup</button>
    </div>
  );
};

export default ComponentA;
