import { TContainerData } from "../../../types/entities/store/container";

export const getContainerData = (): TContainerData => {
    return {
        positionX: 0,
        positionY: 0,
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        alpha: 1
    };
};