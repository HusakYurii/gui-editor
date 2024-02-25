import { TEntitiesDataMap, COMPONENT_TYPES } from "./entity";
import { TAssetsDataMap } from "./assets";
import { TContainersDataMap } from "./container";
import { TGraphicsDataMap } from "./graphics";
import { TMasksDataMap } from "./mask";
import { TNineSpliceSpritesDataMap } from "./nineSliceSprite";
import { TSpritesDataMap } from "./sprite";
import { TTextDataMap } from "./text";
import { TNodeData } from "./tree";

/* 
    The main rule is that the entity id must be equal to id in each component's map
    For example if we create new entity type of "sprite", we must
    1) Create a node for it, of course
    2) Create an entity, set its type to sprite
    3) Create a container and use the entity's id as the id for container data in TContainersDataMap
    4) Create a sprite and do the same with id what was done for container
*/
export type TSharedStore = {
    tree: TNodeData;
    entities: TEntitiesDataMap;
    assets: TAssetsDataMap;
    components: {
        [COMPONENT_TYPES.CONTAINER]: TContainersDataMap;
        [COMPONENT_TYPES.SPRITE]: TSpritesDataMap;
        [COMPONENT_TYPES.NINE_SLICE_SPRITE]: TNineSpliceSpritesDataMap;
        [COMPONENT_TYPES.TEXT]: TTextDataMap;
        [COMPONENT_TYPES.GRAPHICS]: TGraphicsDataMap;
        [COMPONENT_TYPES.MASK]: TMasksDataMap;
    }
}