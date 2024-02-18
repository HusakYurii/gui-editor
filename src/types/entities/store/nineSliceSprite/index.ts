export type TNineSpliceSpriteData = {
    A: number;
    B: number;
    C: number;
    D: number;
    anchorX: number;
    anchorY: number;
    width: number;
    height: number;
    resourceID: string | null;
}

export type TNineSpliceSpritesDataMap = Record<string, TNineSpliceSpriteData>;