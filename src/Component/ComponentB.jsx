import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCountValue1 } from "../Redux/reducer/countSlice";
const ComponentB = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCountValue1);
  console.log("ComponentB")
  return (
    <div>
      ComponentB: {count.value1}{" "}
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        BtnB decrement
      </button>{" "}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        BtnB increment
      </button>
    </div>
  );
};

export default ComponentB;
