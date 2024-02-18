/* 
    Basically those are the components which can be attached to an entity.
*/
export enum EComponentTypes {
    /* @TODO
    The container is essential for all of the component types because it 
    has all basic values any component type must have. Think if it has to be renamed to based
    and moved to the entity itself ?
    On the other hand, I want the entity to work more as an object with all meta values.
    It is more like a composition of metadata
    */
    CONTAINER = "container",
    SPRITE = "sprite",
    NINE_SLICE_SPRITE = "nineSliceSprite",
    TEXT = "text",
    GRAPHICS = "graphics",
    MASK = "mask"
}

export type TEntityData = {
    name: string;
    tags: string[];
    components: EComponentTypes[]
};

export type TEntitiesDataMap = Record<string, TEntityData>;