import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TEntityData } from "../../types/entities/store/entity";
import { TNodeData } from "../../types/entities/store/tree";
import { getNodeById } from "../../shared/store/tree";
import { getId } from "../../shared/uidGenerator";
import { initialState } from "./initialState";
import { mockState } from "./mockState";

export const mainStoreDataSlice = createSlice({
    name: "MainStore",
    initialState: mockState,
    reducers: {
        createNode(state, { payload }: PayloadAction<{ parentNodeId: string }>) {
            const parentNode = getNodeById(state.tree, payload.parentNodeId);
            if (!parentNode) {
                throw new Error("Can't add a node to a parent with id: " + payload.parentNodeId);
            }

            const id = getId();
            const entityId = getId();
            const entity: TEntityData = {
                name: "New Entity",
                tags: [],
                components: []
            };
            const node: TNodeData = {
                id,
                entityId,
                parentId: payload.parentNodeId,
                children: []
            };
            state.entities[entityId] = entity;
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
