import {
    TBaseGraphicsData,
    TRectangleData,
    TRoundedRectangleData,
    TCircleData,
    TGraphicsTypes,
    IGraphicsData,
    GRAPHICS_TYPES
} from "../../../types/entities/store/graphics";

const baseGraphicsProps: TBaseGraphicsData = {
    x: 0,
    y: 0,
    color: "0x000000",
    alpha: 1
};


const getRectangleData = (): TRectangleData => {
    return {
        width: 100,
        height: 100,
        ...baseGraphicsProps
    };
};


const getRoundedRectangleData = (): TRoundedRectangleData => {
    return {
        width: 100,
        height: 100,
        cornerRadius: 20,
        ...baseGraphicsProps
    };
};


const getCircleData = (): TCircleData => {
    return {
        radius: 50,
        ...baseGraphicsProps
    };
};

export const getGraphicsData = (type: TGraphicsTypes): IGraphicsData => {
    switch (type) {
        case GRAPHICS_TYPES.RECTANGLE: return getRectangleData();
        case GRAPHICS_TYPES.ROUNDED_RECTANGLE: return getRoundedRectangleData();
        case GRAPHICS_TYPES.CIRCLE: return getCircleData();
        default:
            throw new Error("Graphics type is not found: " + type);
    }
};