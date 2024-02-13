import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { entitiesDataSliceReducer } from './entities'


export const store = configureStore({
    reducer: {
        entities: entitiesDataSliceReducer
    }
});

export type TStoreState = ReturnType<typeof store.getState>;
export type TStoreDispatch = typeof store.dispatch;

export const useStoreDispatch: () => TStoreDispatch = useDispatch;
export const useStoreSelector: TypedUseSelectorHook<TStoreState> = useSelector