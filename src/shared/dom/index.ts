import { camelCase } from "lodash";

/**
 * Use only constants like data-my-key-here
 * It will return myKeyHere so it will match how browser parses data attributes and
 * stores them in HTMLElement.dataset
 */
export const getDataAttribute = (key: string, node: HTMLElement): string | undefined => {
    const fixedKey = camelCase(key.replace("data-", ""));
    return node.dataset[fixedKey];
};