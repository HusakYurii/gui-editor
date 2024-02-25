import { TTextData, FONT_FAMILIES, FONT_STYLE, FONT_VARIANT, FONT_WEIGHT } from "../../../types/entities/store/text";

export const getTextData = (): TTextData => {
    return {
        anchorX: 0,
        anchorY: 0,
        text: "No text",
        fill: "#000000",
        fontFamily: FONT_FAMILIES.ARIAL,
        fontStyle: FONT_STYLE.NORMAL,
        fontVariant: FONT_VARIANT.NORMAL,
        fontWeight: FONT_WEIGHT.NORMAL,
        fontSize: 40
    };
};