import { type HTMLProps } from "react";
export interface ReactOdometerProps extends HTMLProps<HTMLDivElement> {
    /**
     * Change how long the javascript expects the CSS animation to take.
     * @default 2000
     */
    duration?: number;
    value: number;
    decimals?: number;
}
