import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { BooksSlice } from "./books/reducer";

const rootReducer = combineReducers({
  booksData: BooksSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
