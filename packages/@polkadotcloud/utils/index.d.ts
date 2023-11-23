import BigNumber from "bignumber.js";
import type { MutableRefObject, RefObject } from "react";
import { AnyJson, AnyObject } from "./types";
/**
 * IMPORTANT: Rollup treats this file as the entry point for the package, the build of which is
 * configured with a separate tsconfig.json file that treats `lib` as the `baseUrl` of the project.
 * This is to build `lib` files at the top-level of the final bundled package.
 *
 * Because of this relative file paths should be used in this directory.
 */
/**
 * @name clipAddress
 * @summary Clips an address to the first 6 and last 6 characters.
 */
export declare const clipAddress: (val: string) => string;
/**
 * @name remToUnit
 * @summary Converts a rem string to a number.
 */
export declare const remToUnit: (rem: string) => number;
/**
 * @name planckToUnit
 * @summary
 * Converts an on chain balance value in BigNumber planck to a decimal value in token unit. (1 token
 * = 10^units planck).
 * @summary convert planck to the token unit.
 */
export declare const planckToUnit: (val: BigNumber, units: number) => BigNumber;
/**
 * @name unitToPlanck
 * @summary
 * Converts a balance in token unit to an equivalent value in planck by applying the chain decimals
 * point. (1 token = 10^units planck).
 * @summary Convert the token unit to planck.
 */
export declare const unitToPlanck: (val: string, units: number) => BigNumber;
/**
 * @name rmCommas
 * @summary Removes the commas from a string.
 */
export declare const rmCommas: (val: string) => string;
/**
 * @name greaterThanZero
 * @summary Returns whether a BigNumber is greater than zero.
 */
export declare const greaterThanZero: (val: BigNumber) => boolean;
/**
 * @name isNotZero
 * @summary Returns whether a BigNumber is zero.
 */
export declare const isNotZero: (val: BigNumber) => boolean;
/**
 * @name shuffle
 * @summary Shuffle a set of objects.
 */
export declare const shuffle: <T>(array: T[]) => T[];
/**
 * @name pageFromUri
 * @summary Use url variables to load the default components upon the first page visit.
 */
export declare const pageFromUri: (pathname: string, fallback: string) => string;
/**
 * @name capitalizeFirstLetter
 * @summary Capitalize the first letter of a string.
 */
export declare const capitalizeFirstLetter: (string: string) => string;
/**
 * @name setStateWithRef
 * @summary Synchronize React state and its reference with the provided value.
 */
export declare const setStateWithRef: <T>(value: T, setState: (_state: T) => void, ref: MutableRefObject<T>) => void;
/**
 * @name localStorageOrDefault
 * @summary Retrieve the local stroage value with the key, return defult value if it is not
 * found.
 */
export declare const localStorageOrDefault: <T>(key: string, _default: T, parse?: boolean) => string | T;
/**
 * @name isValidAddress
 * @summary Return whether an address is valid Substrate address.
 */
export declare const isValidAddress: (address: string) => boolean;
/**
 * @name determinePoolDisplay
 * @summary A pool will be displayed with either its set metadata or its address.
 */
export declare const determinePoolDisplay: (adddress: string, batchItem: AnyJson) => any;
/**
 * @name extractUrlValue
 * @summary Extracts a URL value from a URL string.
 */
export declare const extractUrlValue: (key: string, url?: string) => string;
/**
 * @name camelize
 * @summary Converts a string of text to camelCase.
 */
export declare const camelize: (str: string) => string;
/**
 * @name varToUrlHash
 * @summary
 * Since url variables are added to the hash and are not treated as URL params, the params are split
 * and parsed into a `URLSearchParams`.
 * @summary Puts a variable into the URL hash as a param.
 */
export declare const varToUrlHash: (key: string, val: string, addIfMissing: boolean) => void;
/**
 * @name removeVarFromUrlHash
 * @summary
 * Removes a variable `key` from the URL hash if it exists. Removes dangling `?` if no URL variables
 * exist.
 */
export declare const removeVarFromUrlHash: (key: string) => void;
/**
 * @name sortWithNull
 * @summary Sorts an array with nulls last.
 */
export declare const sortWithNull: (ascending: boolean) => (a: AnyJson, b: AnyJson) => 0 | 1 | -1;
/**
 * @name applyWidthAsPadding
 * @summary Applies width of subject to paddingRight of container.
 */
export declare const applyWidthAsPadding: (subjectRef: RefObject<HTMLDivElement>, containerRef: RefObject<HTMLDivElement>) => void;
/**
 * @name unescape
 * @summary Replaces \” with “
 */
export declare const unescape: (val: string) => string;
/**
 * @name inChrome
 * @summary Whether the application is rendering in Chrome.
 */
export declare const inChrome: () => boolean;
/**
 * @name addedTo
 * @summary Given 2 objects and some keys, return items in the fresh object that do not exist in the
 * stale object by matching the given common key values of both objects.
 */
export declare const addedTo: (fresh: AnyObject[], stale: AnyObject[], keys: string[]) => AnyObject[];
/**
 * @name removedFrom
 * @summary Given 2 objects and some keys, return items in the stale object that do not exist in the
 * fresh object by matching the given common key values of both objects.
 */
export declare const removedFrom: (fresh: AnyObject[], stale: AnyObject[], keys: string[]) => AnyObject[];
/**
 * @name matchedProperties
 * @summary Given 2 objects and some keys, return items in object 1 that also exist in object 2 by
 * matching the given common key values of both objects.
 */
export declare const matchedProperties: (objX: AnyObject[], objY: AnyObject[], keys: string[]) => AnyObject[];
/**
 * @name isValidHttpUrl
 * @summary Give a string, return whether it is a valid http URL.
 * @param string  - The string to check.
 */
export declare const isValidHttpUrl: (string: string) => boolean;
/**
 * @name makeCancelable
 * @summary Makes a promise cancellable.
 * @param promise  - The promise to make cancellable.
 */
export declare const makeCancelable: (promise: Promise<AnyObject>) => {
    promise: Promise<unknown>;
    cancel: () => void;
};
