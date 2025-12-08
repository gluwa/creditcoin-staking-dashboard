/// <reference types="react" />
import { ComponentBase } from "../types";
import { EntryProps, RowProps, SideProps, PageTitleProps, RowSectionProps, TxProps } from "./types";
/**
 * @name Entry
 * @summary The outer-most wrapper that hosts core tag styling.
 */
export declare const Entry: ({ children, style, mode, network }: EntryProps) => import("react/jsx-runtime").JSX.Element;
/**
 * @name Body
 * @summary An element that houses Side and Main.
 */
export declare const Body: ({ children, style }: ComponentBase) => import("react/jsx-runtime").JSX.Element;
/**
 * @name Main
 * @summary A column flex wrapper that hosts the main page content.
 */
export declare const Main: import("react").ForwardRefExoticComponent<ComponentBase & import("react").RefAttributes<HTMLDivElement>>;
/**
 * @name Page
 * @summary
 * A motion.div that wraps every page. Transitions can be applied to this wrapper that will affect
 * the entire page.
 */
export declare const Page: ({ children, style }: ComponentBase) => import("react/jsx-runtime").JSX.Element;
/**
 * @name Side
 * @summary An element that houses the side menu and transitions to a toggle-able fixed overlay
 * on smaller screens.
 * @summary Handles maximised and minimised transitions.
 */
export declare const Side: ({ children, style, open, minimised }: SideProps) => import("react/jsx-runtime").JSX.Element;
/**
 * @name PageTitle
 * @summary
 * The element that wraps a page title. Determines the padding and position relative to top of
 * screen when the element is stuck.
 */
export declare const PageTitle: {
    ({ title, button, tabs }: PageTitleProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
/**
 * @name PageTitleTabs
 * @summary The element in a page title. Inculding the ButtonTab.
 */
export declare const PageTitleTabs: ({ sticky, tabs }: PageTitleProps) => import("react/jsx-runtime").JSX.Element;
/**
 * @name HideScrollable
 * @summary
 * A fixed block that is used to hide scrollable content on smaller screens when a PageTitle is
 * fixed. Purely cosmetic. Applied in PageTitle.
 */
export declare const HideScrollable: ({ children, style }: ComponentBase) => import("react/jsx-runtime").JSX.Element;
/**
 * @name PageRow
 * @summary Used to separate page content based on rows. Commonly used with RowPrimary and
 * RowSecondary.
 */
export declare const PageRow: ({ children, style, yMargin }: RowProps) => import("react/jsx-runtime").JSX.Element;
/**
 * @name Separator
 * @summary A horizontal spacer with a bottom border. General spacer for separating content by
 * row.
 */
export declare const Separator: ({ children, style }: ComponentBase) => import("react/jsx-runtime").JSX.Element;
/**
 * @name PageHeading
 * @summary Positioned under titles for a Go Back button and other page header info.
 */
export declare const PageHeading: ({ children, style }: ComponentBase) => import("react/jsx-runtime").JSX.Element;
/**
 * @name ButtonRow
 * @summary A flex container for a row of buttons.
 */
export declare const ButtonRow: ({ children, style, yMargin }: RowProps) => import("react/jsx-runtime").JSX.Element;
/**
 * @name RowSection
 * @summary The primary/secondary module in a PageRow.
 */
export declare const RowSection: ({ children, style, vLast, hLast, secondary, }: RowSectionProps) => import("react/jsx-runtime").JSX.Element;
/**
 * @name Tx
 * @summary A wrapper to handle transaction submission.
 */
export declare const Tx: ({ margin, label, name, notEnoughFunds, dangerMessage, SignerComponent, }: TxProps) => import("react/jsx-runtime").JSX.Element;
