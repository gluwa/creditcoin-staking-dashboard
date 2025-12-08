import { ButtonIconProps, ButtonCommonProps, ComponentBase } from "../types";
export type ButtonSubmitProps = ComponentBase & ButtonIconProps & ButtonCommonProps & {
    colorSecondary?: boolean;
    text: string;
    pulse?: boolean;
};
/**
 * @name ButtonSubmit
 * @description Submit button style used within modals to submit transactions.
 */
export declare const ButtonSubmit: ({ colorSecondary, disabled, grow, iconLeft, iconRight, iconTransform, onClick, marginLeft, marginRight, marginX, style, text, pulse, }: ButtonSubmitProps) => import("react/jsx-runtime").JSX.Element;
