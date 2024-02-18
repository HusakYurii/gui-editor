import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

import { appStoreReducer, appStoreActins } from "./store";


export const store = configureStore({
    reducer: appStoreReducer
});

export type TAppStoreState = ReturnType<typeof store.getState>;
export type TAppStoreDispatch = typeof store.dispatch;

export const useAppStoreDispatch: () => TAppStoreDispatch = useDispatch;
export const useAppStoreSelector: TypedUseSelectorHook<TAppStoreState> = useSelector;
export const { createNode, updateEntity } = appStoreActins;