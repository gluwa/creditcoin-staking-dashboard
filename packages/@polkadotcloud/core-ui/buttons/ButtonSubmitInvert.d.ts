import { ButtonIconProps, ButtonCommonProps, ComponentBase } from "../types";
export type ButtonSubmitInvertProps = ComponentBase & ButtonIconProps & ButtonCommonProps & {
    text: string;
};
/**
 * @name ButtonSubmitInvert
 * @description Invert submit button style used in modals.
 */
export declare const ButtonSubmitInvert: ({ disabled, grow, iconLeft, iconRight, iconTransform, onClick, marginLeft, marginRight, marginX, style, text, }: ButtonSubmitInvertProps) => import("react/jsx-runtime").JSX.Element;
