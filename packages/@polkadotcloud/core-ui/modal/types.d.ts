/// <reference types="react" />
import { ComponentBase } from "../types";
import { AnimationProps } from "framer-motion";
export type AnyObject = any;
export type ActionItemProps = ComponentBase & {
    text: string;
    toggled?: boolean;
    disabled?: boolean;
    onToggle?: (val: boolean) => void;
    inactive?: boolean;
    inlineButton?: React.ReactNode;
};
export type ModalPaddingProps = ComponentBase & {
    verticalOnly?: boolean;
    horizontalOnly?: boolean;
};
export type ModalNotesProps = ComponentBase & {
    withPadding?: boolean;
};
export type ModalWarningsProps = ComponentBase & {
    withMargin?: boolean;
};
export type ModalFixedTitleProps = ComponentBase & {
    withStyle?: boolean;
};
export type ModalSectionProps = ComponentBase & {
    type: "tab" | "carousel";
};
export type ModalHeightProps = ComponentBase & {
    size: string;
};
export type ModalAnimationProps = ComponentBase & AnimationProps;
