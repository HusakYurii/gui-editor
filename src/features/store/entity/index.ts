import { TEntityData, TEntityType, TComponentTypes } from "../../../types/entities/store/entity";

export const getEntityData = (
    name: string,
    type: TEntityType,
    components: TComponentTypes[]
): TEntityData => {
    return {
        name,
        tags: [],
        type,
        components
    };
};