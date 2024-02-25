export const GRAPHICS_TYPES = Object.freeze({
    RECTANGLE: "rectangle",
    ROUNDED_RECTANGLE: "rounded_rectangle",
    CIRCLE: "circle"
});

export type TGraphicsTypes = typeof GRAPHICS_TYPES[keyof typeof GRAPHICS_TYPES]

export type TBaseGraphicsData = {
    x: number;
    y: number;
    color: string;
    alpha: number;
}

export type TRectangleData = TBaseGraphicsData & {
    width: number;
    height: number;
};

export type TRoundedRectangleData = TRectangleData & {
    cornerRadius: number;
}

export type TCircleData = & TBaseGraphicsData & {
    radius: number;
};

export type IGraphicsData =
    TRoundedRectangleData |
    TRectangleData |
    TCircleData;


export type TGraphicsDataMap = Record<string, IGraphicsData>;