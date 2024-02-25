import { TSharedStore } from "../../types/entities/store";
import { COMPONENT_TYPES, ENTITY_TYPES } from "../../types/entities/store/entity";
import { getContainerData } from "./container";
import { getEntityData } from "./entity";
import { getNodeData } from "./tree";

/**
 * Must be used by store only!
 * @deprecated
 */
export const initialState: TSharedStore = {
    assets: {},
    tree: getNodeData("root", "0", null, true),
    entities: {
        "0": getEntityData("Scene", ENTITY_TYPES.CONTAINER, [COMPONENT_TYPES.CONTAINER])
    },
    components: {
        container: {
            "0": getContainerData()
        },
        sprite: {},
        nineSliceSprite: {},
        text: {},
        graphics: {},
        mask: {},
    }
};
