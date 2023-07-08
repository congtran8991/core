import { popupRef } from "Constants"

export default class UtilsPortal {
    static popup = {
        open: (params) => {
            popupRef.current?.open(params)
        },
        dismiss: () => {
            popupRef.current?.dismiss()
        },
        dismissAll: () => {
            popupRef.current?.dismissAll()
        }
    } 
}