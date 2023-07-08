import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  selectCountValue2,
} from "Redux/reducer/countSlice";
import { useQueryClient } from '@tanstack/react-query';

import { useReactQuery1 } from "Hooks/reactQuery";
const ComponentC = () => {
  const { dataRQuery } = useReactQuery1();

  const queryClient = useQueryClient()
  console.log("dataRQuery", dataRQuery)
  const count = useSelector(selectCountValue2);
  const dispatch = useDispatch();
  console.log("ComponentC");
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
          // dispatch(increment());
          queryClient.setQueryData(["todo1", 5], { key: 100 })
        }}
      >
        BtnC increment
      </button>
    </div>
  );
};

export default ComponentC;
