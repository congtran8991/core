import React from "react";
import { listKeyBreadcrumbs } from "../../Utils/client"
const newListKey = listKeyBreadcrumbs()
const RenderBreadcrumb = () => {
    console.log("listKeyBreadcrumbs", newListKey)
    return <div>RenderBreadcrumb</div>
}

export default RenderBreadcrumb