import { ButtonIconProps, ButtonCommonProps, ComponentBase } from "../types";
export type ButtonPrimaryInvertProps = ComponentBase & ButtonIconProps & ButtonCommonProps & {
    colorSecondary?: boolean;
    lg?: boolean;
    text: string;
};
/**
 * @name ButtonPrimaryInvert
 * @description Invert primary button style.
 */
export declare const ButtonPrimaryInvert: ({ colorSecondary, disabled, grow, iconLeft, iconRight, iconTransform, lg, onClick, marginLeft, marginRight, marginX, style, text, }: ButtonPrimaryInvertProps) => import("react/jsx-runtime").JSX.Element;
