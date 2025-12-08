/// <reference types="react" />
import { ComponentBase } from "../types";
import { ActionItemProps, ModalNotesProps, ModalWarningsProps, ModalSectionProps, ModalAnimationProps, ModalHeightProps } from "./types";
/**
 * @name ModalBackground
 * @summary Modal background wrapper.
 */
export declare const ModalBackground: ({ children, ...rest }: ModalAnimationProps) => import("react/jsx-runtime").JSX.Element;
/**
 * @name ModalContainer
 * @summary Modal container wrapper.
 */
export declare const ModalContainer: ({ children, ...rest }: ModalAnimationProps) => import("react/jsx-runtime").JSX.Element;
/**
 * @name ModalHeight
 * @summary Used for modal window height.
 */
export declare const ModalHeight: ({ size, children, style }: ModalHeightProps) => import("react/jsx-runtime").JSX.Element;
/**
 * @name ModalFooter
 * @summary Used for extrinsics forms.
 */
export declare const ModalFooter: ({ children, style }: ComponentBase) => import("react/jsx-runtime").JSX.Element;
/**
 * @name ActionItem
 * @summary A call to action item as a header.
 * @param {string} text - The text to display.
 */
export declare const ActionItem: ({ style, text, toggled, disabled, onToggle, inactive, inlineButton, }: ActionItemProps) => import("react/jsx-runtime").JSX.Element;
/**
 * @name ModalPadding
 * @summary Generic wrapper for modal padding.
 */
export declare const ModalPadding: import("react").ForwardRefExoticComponent<ComponentBase & {
    verticalOnly?: boolean;
    horizontalOnly?: boolean;
} & import("react").RefAttributes<HTMLDivElement>>;
/**
 * @name ModalFixedTitle
 * @summary Fixed the title.
 */
export declare const ModalFixedTitle: import("react").ForwardRefExoticComponent<ComponentBase & {
    withStyle?: boolean;
} & import("react").RefAttributes<HTMLDivElement>>;
/**
 * @name ModalSeparator
 * @summary A line to separate the content.
 */
export declare const ModalSeparator: () => import("react/jsx-runtime").JSX.Element;
/**
 * @name ModalNotes
 * @summary Note styling.
 */
export declare const ModalNotes: ({ children, style, withPadding, }: ModalNotesProps) => import("react/jsx-runtime").JSX.Element;
/**
 * @name ModalWarnings
 * @summary Warnings styling.
 */
export declare const ModalWarnings: ({ children, style, withMargin, }: ModalWarningsProps) => import("react/jsx-runtime").JSX.Element;
/**
 * @name ModalCustomHeader
 * @summary The header section along with the title.
 */
export declare const ModalCustomHeader: ({ children, style }: ComponentBase) => import("react/jsx-runtime").JSX.Element;
/**
 * @name  ModalSection
 * @summary Section wrapper.
 */
export declare const ModalSection: ({ children, style, type }: ModalSectionProps) => import("react/jsx-runtime").JSX.Element;
/**
 * @name ModalMotionTwoSection
 * @summary Two section wrapper with motion animation.
 */
export declare const ModalMotionTwoSection: ({ children, ...rest }: ModalAnimationProps) => import("react/jsx-runtime").JSX.Element;
/**
 * @name ModalMotionThreeSection
 * @summary Three section wrapper with motion animation.
 */
export declare const ModalMotionThreeSection: ({ children, ...rest }: ModalAnimationProps) => import("react/jsx-runtime").JSX.Element;
