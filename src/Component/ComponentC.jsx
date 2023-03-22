import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCountValue2 } from "../Redux/reducer/countSlice";
const ComponentC = () => {
  const count = useSelector(selectCountValue2);
  const dispatch = useDispatch();
  console.log("ComponentC")
  return (
    <div>
      ComponentC: {count.value2}{" "}
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        BtnC decrement
      </button>{" "}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        BtnC increment
      </button>
    </div>
  );
};

export default ComponentC;
