import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCountValue1 } from "Redux/reducer/countSlice";
import { useReactQuery } from "Hooks/reactQuery"
const ComponentB = () => {
  const dispatch = useDispatch();
  const testQuery = useReactQuery()
  console.log("TestQuery", testQuery.dataRQuery, testQuery.isFetching)
  const count = useSelector(selectCountValue1);
  return (
    <div>
      ComponentB: {count.value1}{" "}
      <button
        onClick={() => {
          testQuery.refetch()
          // dispatch(decrement());
        }}
      >
        BtnB Refetch {testQuery.dataRQuery[0].key}
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
