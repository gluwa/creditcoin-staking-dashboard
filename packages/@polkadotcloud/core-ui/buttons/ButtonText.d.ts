import { ButtonIconProps, ButtonCommonProps, ComponentBase } from "../types";
export type ButtonMonoProps = ComponentBase & ButtonIconProps & ButtonCommonProps & {
    text: string;
};
/**
 * @name ButtonText
 * @description Plain button style used within the main interface of dashboards.
 */
export declare const ButtonText: ({ disabled, grow, iconLeft, iconRight, iconTransform, onClick, marginLeft, marginRight, marginX, style, text, }: ButtonMonoProps) => import("react/jsx-runtime").JSX.Element;
