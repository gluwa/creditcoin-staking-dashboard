import { ComponentBase, ButtonCommonProps } from "../types";
export type ButtonTabProps = ComponentBase & ButtonCommonProps & {
    active?: boolean;
    title: string;
    badge?: string | number;
};
/**
 * @name ButtonTab
 * @description Tab button used throughout dashboard apps.
 */
export declare const ButtonTab: ({ disabled, onClick, style, active, title, badge, }: ButtonTabProps) => import("react/jsx-runtime").JSX.Element;
