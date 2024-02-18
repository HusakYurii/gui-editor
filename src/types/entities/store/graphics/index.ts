export type TBaseGraphicsData = {
    x: number;
    y: number;
    color: number;
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