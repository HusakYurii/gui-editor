
export const ENTITY_TYPES = Object.freeze({
    CONTAINER: "container",
    SPRITE: "sprite",
    NINE_SLICE_SPRITE: "nineSliceSprite",
    TEXT: "text",
    GRAPHICS: "graphics",
});

/* 
    Basically those are the components which can be attached to an entity.
    Some components overlap with the entity types because they are essentially about the same things
*/
export const COMPONENT_TYPES = Object.freeze({
    ...ENTITY_TYPES,
    MASK: "mask",
    // more things like collision box, filters etc
});


export type TEntityType = typeof ENTITY_TYPES[keyof typeof ENTITY_TYPES];
export type TComponentTypes = typeof COMPONENT_TYPES[keyof typeof COMPONENT_TYPES];

export type TEntityData = {
    name: string;
    tags: string[];
    type: TEntityType;
    components: TComponentTypes[]
};

export type TEntitiesDataMap = Record<string, TEntityData>;