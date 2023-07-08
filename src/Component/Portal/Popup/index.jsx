import React, { forwardRef, useImperativeHandle, useState } from "react";

const Popup = forwardRef((_, ref) => {
  const [data, setData] = useState([]);

  useImperativeHandle(
    ref,
    () => ({
      open: (params) => {
        setData((pre) => [...pre, params]);
      },
      dismiss: () => {
        setData((pre) => pre.pop());
      },
      dismissAll: () => {
        setData([]);
      },
    }),
    []
  );

  console.log(data);
  const abc = (v) => {
    console.log();
  };

  if (!(data && data.length)) {
    return null;
  }

  return (
    <div>
      {data.map((item, index) => (
        <form key={index} onSubmit={item.handleOnclick}>
          {item?.content}
          <button type="submit">Click dialog</button>
        </form>
      ))}
    </div>
  );
});
export default Popup;
