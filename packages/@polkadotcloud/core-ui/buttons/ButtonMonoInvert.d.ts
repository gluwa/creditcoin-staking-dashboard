import { ButtonIconProps, ButtonCommonProps, ComponentBase } from "../types";
export type ButtonMonoProps = ComponentBase & ButtonIconProps & ButtonCommonProps & {
    lg?: boolean;
    text: string;
};
/**
 * @name ButtonMonoInvert
 * @description Inverted monotone button style used within the main interface of dashboards.
 */
export declare const ButtonMonoInvert: ({ disabled, grow, iconLeft, iconRight, iconTransform, onClick, lg, marginLeft, marginRight, marginX, style, text, }: ButtonMonoProps) => import("react/jsx-runtime").JSX.Element;
