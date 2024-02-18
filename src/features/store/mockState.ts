import { TSharedStore, EComponentTypes } from "../../types/entities/store";

/**
 * Must be used by store only!
 * @deprecated
 */
export const mockState: TSharedStore = {
    assets: {},
    tree: {
        id: "234123",
        entityId: "1",
        parentId: null,
        isRootNode: true,
        children: [
            {
                id: "230413",
                entityId: "2",
                parentId: "234123",
                children: [],
            },
            {
                id: "200413",
                entityId: "3",
                parentId: "234123",
                children: [
                    {
                        id: "200419",
                        entityId: "4",
                        parentId: "200413",
                        children: [],
                    }
                ],
            }
        ],
    },
    entities: {
        "1": {
            name: "Scene",
            tags: [],
            components: [
                EComponentTypes.CONTAINER
            ]
        },
        "2": {
            name: "Header",
            tags: [],
            components: [
                EComponentTypes.CONTAINER
            ]
        },
        "3": {
            name: "Footer",
            tags: [],
            components: [
                EComponentTypes.CONTAINER
            ]
        },
        "4": {
            name: "Footer Text",
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
