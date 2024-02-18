
export const FONT_FAMILIES = Object.freeze({
    ARIAL: "Arial",
    ARIAL_BLACK: "Arial Black",
    COMIC_SANS_MS: "Comic Sans MS",
    COURIER_NEW: "Courier New",
    GEORGIA: "Georgia",
    HELVETICA: "Helvetica",
    IMPACT: "Impact",
    TAHOMA: "Tahoma",
    TIMES_NEW_ROMAN: "Times New Roman",
    VERDANA: "Verdana",
});

export const FONT_STYLE = Object.freeze({
    NORMAL: "normal",
    ITALIC: "italic",
    OBLIQUE: "oblique",
});

export const FONT_VARIANT = Object.freeze({
    NORMAL: "normal",
    SMALL_CAPS: "small-caps",
});

export const FONT_WEIGHT = Object.freeze({
    NORMAL: "normal",
    BOLD: "bold",
    BOLDER: "bolder",
    LIGHTER: "lighter",
    WEIGHT_100: 100,
    WEIGHT_200: 200,
    WEIGHT_300: 300,
    WEIGHT_400: 400,
    WEIGHT_500: 500,
    WEIGHT_600: 600,
    WEIGHT_700: 700,
    WEIGHT_800: 800,
    WEIGHT_900: 900,
});

export const FONT_LINE_JOINT = Object.freeze({
    MITER: "miter",
    ROUND: "round",
    BEVEL: "bevel"
});

export const TEXT_ALIGN = Object.freeze({
    LEFT: "left",
    CENTER: "center",
    RIGHT: "right"
});

export const TEXT_WHITE_SPACE = Object.freeze({
    NORMAL: "normal",
    PRE: "pre",
    PRE_LINE: "pre-line",
});

export type TTextData = {
    anchorX: number;
    anchorY: number;
    fill: string;
    text: string;
    fontFamily: string;
    fontSize: number;
    fontStyle: string;
    fontVariant: string;
    fontWeight: string | number;

    // stroke properties are optional and may not exist in the data if disabled
    hasStroke?: boolean;
    lineJoin?: string;
    miterLimit?: number;
    stroke?: string;
    strokeThickness?: number;

    // shadow props are optional and may NOT exist in the data if disabled
    dropShadow?: boolean;
    dropShadowAlpha?: number;
    dropShadowAngle?: number;
    dropShadowBlur?: number;
    dropShadowColor?: string;
    dropShadowDistance?: number;

    // multi-line props are optional and may NOT exist in the data if disabled
    align?: string;
    wordWrap?: boolean;
    breakWords?: boolean;
    leading?: number;
    lineHeight?: number;
    wordWrapWidth?: number
    whiteSpace?: string;
}

export type TTextDataMap = Record<string, TTextData>;