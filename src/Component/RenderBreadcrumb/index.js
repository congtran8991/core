import React from "react";
import { Client } from "../../Utils";
const newListKey = Client.listKeyBreadcrumbs();
const RenderBreadcrumb = () => {
  console.log("listKeyBreadcrumbs", newListKey);
  return <div>RenderBreadcrumb</div>;
};

export default RenderBreadcrumb;
