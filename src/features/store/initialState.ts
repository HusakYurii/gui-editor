import { EComponentTypes, TSharedStore } from "../../types/entities/store";

/**
 * Must be used by store only!
 * @deprecated
 */
export const initialState: TSharedStore = {
    assets: {},
    tree: {
        id: "234123",
        entityId: "1",
        parentId: null,
        children: [],
    },
    entities: {
        "1": {
            name: "Scene",
            tags: [],
            components: [
                EComponentTypes.CONTAINER
            ]
        }
    },
    components: {
        container: {
            "1": {
                positionX: 0,
                positionY: 0,
                scaleX: 1,
                scaleY: 1,
                rotation: 0,
                alpha: 1
            }
        },
        sprite: {},
        nineSliceSprite: {},
        text: {},
        graphics: {},
        mask: {},
    }
};
