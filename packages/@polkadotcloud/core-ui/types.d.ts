/// <reference types="react" />
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
export type ThemeMode = "light" | "dark";
export type Network = "polkadot" | "kusama" | "westend";
export interface ComponentBase {
    children?: React.ReactNode;
    style?: React.CSSProperties;
}
export type ComponentBaseWithClassName = ComponentBase & {
    className?: string;
};
export interface ButtonCommonProps {
    disabled?: boolean;
    onClick?: () => void;
    marginLeft?: boolean;
    marginRight?: boolean;
    marginX?: boolean;
    grow?: boolean;
}
export interface ButtonIconProps {
    iconLeft?: IconProp | IconDefinition;
    iconRight?: IconProp | IconDefinition;
    iconTransform?: string;
}
