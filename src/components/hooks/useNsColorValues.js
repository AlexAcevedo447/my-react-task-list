import { useContext } from "react"
import { PortalContext } from "../context/portalContext"

export const useNsColorValues = () => {
    const { colorModeValues } = useContext(PortalContext);
    const { bg, fontColor } = colorModeValues;

    return { bg, fontColor }
}