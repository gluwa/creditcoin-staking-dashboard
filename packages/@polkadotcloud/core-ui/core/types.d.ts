import { ComponentBase, Network, ThemeMode } from "../types";
import React from "react";
export type EntryProps = ComponentBase & {
    mode: ThemeMode;
    network: Network;
};
export type SideProps = ComponentBase & {
    open: boolean;
    minimised: boolean;
};
export type PageTitleProps = PageTitleTabsProps & {
    title?: string;
    button?: {
        title: string;
        onClick: () => void;
    };
};
export type PageTitleTabsProps = {
    sticky?: boolean;
    tabs?: Array<PageTitleTabProps>;
};
export type PageTitleTabProps = {
    sticky?: boolean;
    title: string;
    active: boolean;
    onClick: () => void;
    badge?: string | number;
};
export type RowProps = ComponentBase & {
    yMargin?: boolean;
};
export type RowSectionProps = ComponentBase & {
    vLast?: boolean;
    hLast?: boolean;
    secondary?: boolean;
};
export type TxProps = {
    margin?: boolean;
    label: string;
    name: string;
    notEnoughFunds: boolean;
    dangerMessage: string;
    SignerComponent: React.ReactElement;
};
