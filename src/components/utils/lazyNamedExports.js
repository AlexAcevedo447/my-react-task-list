import { lazy } from "react";

export default function (caller, componentName) {
    return lazy(async () => {
        const module = await caller();
        return { default: module[componentName] };
    })
}