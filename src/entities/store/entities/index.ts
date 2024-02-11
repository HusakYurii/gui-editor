import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getId } from "../../../shared/uidGenerator"
import { TEntitiesMap, TEntity } from "../../../types/entities/store/entities"

const initialState: TEntitiesMap = {
    '-1': {
        id: '-1',
        name: 'Root',
        tags: []
    }
}

export const entitiesDataSlice = createSlice({
    name: "Entities",
    initialState,
    reducers: {
        create(state) {
            const id = getId();
            state[id] = {
                id,
                name: 'New Entity',
                tags: []
            };
        },
        update(state, action: PayloadAction<{ id: string, props: TEntity }>) {
            const entity = state[action.payload.id];
            state[action.payload.id] = { ...entity, ...action.payload.props };
        },
        delete(state, action: PayloadAction<{ id: string }>) {
            delete state[action.payload.id];
        }
    }
});

export const entitiesDataSliceActins = entitiesDataSlice.actions;
export const entitiesDataSliceReducer = entitiesDataSlice.reducer;
