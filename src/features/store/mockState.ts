import { TSharedStore } from "../../types/entities/store";
import { ENTITY_TYPES, COMPONENT_TYPES } from "../../types/entities/store/entity";
import { getContainerData } from "./container";
import { getEntityData } from "./entity";
import { getTextData } from "./text";
import { getNodeData } from "./tree";

/**
 * Must be used by store only!
 * @deprecated
 */
export const mockState: TSharedStore = {
    assets: {},
    tree: getNodeData("root", "1", null, true, [
        getNodeData("230413", "2", "root"),
        getNodeData("200413", "3", "root", false, [
            getNodeData("200419", "4", "200413")
        ]),
    ]),
    entities: {
        "1": getEntityData("Scene", ENTITY_TYPES.CONTAINER, [COMPONENT_TYPES.CONTAINER]),
        "2": getEntityData("Header", ENTITY_TYPES.CONTAINER, [COMPONENT_TYPES.CONTAINER]),
        "3": getEntityData("Footer", ENTITY_TYPES.CONTAINER, [COMPONENT_TYPES.CONTAINER]),
        "4": getEntityData("Footer Text", ENTITY_TYPES.TEXT, [COMPONENT_TYPES.CONTAINER, COMPONENT_TYPES.TEXT])
    },
    components: {
        container: {
            "1": getContainerData(),
            "2": {
                positionX: 0,
                positionY: -100,
                scaleX: 1,
                scaleY: 1,
                rotation: 0,
                alpha: 1
            },
            "3": {
                positionX: 0,
                positionY: 200,
                scaleX: 1,
                scaleY: 1,
                rotation: 0,
                alpha: 1
            },
        },
        sprite: {},
        nineSliceSprite: {},
        text: {
            "4": getTextData()
        },
        graphics: {},
        mask: {},
    }
};
