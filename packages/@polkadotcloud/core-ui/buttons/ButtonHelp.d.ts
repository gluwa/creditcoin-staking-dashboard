import { ButtonCommonProps, ComponentBase } from "../types";
export type ButtonHelpProps = ComponentBase & ButtonCommonProps & {
    backgroundSecondary?: boolean;
};
/**
 * @name ButtonHelp
 * @description Help button used throughout dashboard apps.
 */
export declare const ButtonHelp: ({ disabled, onClick, marginLeft, marginRight, marginX, backgroundSecondary, style, }: ButtonHelpProps) => import("react/jsx-runtime").JSX.Element;
