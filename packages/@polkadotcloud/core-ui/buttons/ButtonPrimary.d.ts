import { ButtonIconProps, ButtonCommonProps, ComponentBase } from "../types";
export type ButtonPrimaryProps = ComponentBase & ButtonIconProps & ButtonCommonProps & {
    colorSecondary?: boolean;
    lg?: boolean;
    text: string;
};
/**
 * @name ButtonPrimary
 * @description Primary button style used within the main interface of dashboards.
 */
export declare const ButtonPrimary: ({ colorSecondary, disabled, grow, iconLeft, iconRight, iconTransform, onClick, lg, marginLeft, marginRight, marginX, style, text, }: ButtonPrimaryProps) => import("react/jsx-runtime").JSX.Element;
