import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GRAPHICS_TYPES } from "../../types/entities/store/graphics";
import {
    COMPONENT_TYPES,
    ENTITY_TYPES,
    TEntityData,
    TEntityType
} from "../../types/entities/store/entity";
import { getNodeById } from "../../shared/store/tree";
import { getId } from "../../shared/uidGenerator";
// import { initialState } from "./initialState";
import { mockState } from "./mockState";

import { getNineSliceSpriteData } from "./nineSliceSprite";
import { getContainerData } from "./container";
import { getGraphicsData } from "./graphics";
import { getEntityData } from "./entity";
import { getSpriteData } from "./sprite";
import { getTextData } from "./text";
import { getNodeData } from "./tree";

export const mainStoreDataSlice = createSlice({
    name: "MainStore",
    initialState: mockState,
    reducers: {
        createNode(state, { payload }: PayloadAction<{ parentNodeId: string, entityType: TEntityType }>) {
            const parentNode = getNodeById(state.tree, payload.parentNodeId);
            if (!parentNode) {
                throw new Error("Can't add a node to a parent with id: " + payload.parentNodeId);
            }

            const id = getId();
            const entityId = getId();

            const entity = getEntityData(
                "New Entity",
                payload.entityType,
                [COMPONENT_TYPES.CONTAINER]
            );
            state.entities[entityId] = entity;

            const containerData = getContainerData();
            state.components.container[entityId] = containerData;

            if (payload.entityType === ENTITY_TYPES.SPRITE) {
                state.components[COMPONENT_TYPES.SPRITE][entityId] = getSpriteData();
                entity.components.push(COMPONENT_TYPES.SPRITE);
            }
            else if (payload.entityType === ENTITY_TYPES.NINE_SLICE_SPRITE) {
                state.components[COMPONENT_TYPES.NINE_SLICE_SPRITE][entityId] = getNineSliceSpriteData();
                entity.components.push(COMPONENT_TYPES.NINE_SLICE_SPRITE);
            }
            else if (payload.entityType === ENTITY_TYPES.TEXT) {
                state.components[COMPONENT_TYPES.TEXT][entityId] = getTextData();
                entity.components.push(COMPONENT_TYPES.TEXT);
            }
            else if (payload.entityType === ENTITY_TYPES.GRAPHICS) {
                state.components[COMPONENT_TYPES.GRAPHICS][entityId] = getGraphicsData(GRAPHICS_TYPES.RECTANGLE);
                entity.components.push(COMPONENT_TYPES.GRAPHICS);
            }
            else {
                throw new Error("Can't create finish creating node for: " + payload.entityType);
            }

            const node = getNodeData(id, entityId, payload.parentNodeId);
            parentNode.children.push(node);
        },

        updateEntity(state, action: PayloadAction<{ id: string, props: TEntityData }>) {
            const entity = state.entities[action.payload.id];
            state.entities[action.payload.id] = { ...entity, ...action.payload.props };
        },
    }
});

export const appStoreActins = mainStoreDataSlice.actions;
export const appStoreReducer = mainStoreDataSlice.reducer;
