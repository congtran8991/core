import React, { useEffect } from "react";
import RenderBreadcrumb from "./RenderBreadcrumb";
import { useSelector, useDispatch } from "react-redux";
import { AXIOS } from "../Commons/Helpers/axios.helper";
import {
  decrement,
  increment,
  selectCountValue1,
  incrementAsync,
} from "../Redux/reducer/countSlice";
import { fetchApi, dataCallApi } from "../Redux/reducer/callApiSlice";
const ComponentA = () => {
  const dispatch = useDispatch();
  const count1 = useSelector(selectCountValue1);
  const dataFetchApi = useSelector(dataCallApi);
  console.log("dataFetchApi", dataFetchApi);

  useEffect(() => {
    const abcde12 = async () => {
      const dataParam = {
        overrideDomain: "https://jsonplaceholder.typicode.com/users",
      };
      const dataApi = await AXIOS(dataParam);
      console.log("dataApi:", dataApi);
    };
    abcde12();
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
    </div>
  );
};

export default ComponentA;
