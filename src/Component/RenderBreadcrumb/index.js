import React from "react";
import { listKeyBreadcrumbs } from "../../Utils"
const newListKey = listKeyBreadcrumbs()
const RenderBreadcrumb = () => {
    console.log("listKeyBreadcrumbs", newListKey)
    return <div>RenderBreadcrumb</div>
}

export default RenderBreadcrumb