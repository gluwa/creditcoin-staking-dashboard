import { ButtonIconProps, ButtonCommonProps, ComponentBase } from "../types";
export type ButtonSecondaryProps = ComponentBase & ButtonIconProps & ButtonCommonProps & {
    lg?: boolean;
    text: string;
};
/**
 * @name ButtonSecondary
 * @description Secondary button style used within the main interface of dashboards.
 */
export declare const ButtonSecondary: ({ disabled, grow, iconLeft, iconRight, iconTransform, lg, onClick, marginLeft, marginRight, marginX, style, text, }: ButtonSecondaryProps) => import("react/jsx-runtime").JSX.Element;
