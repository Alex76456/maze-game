import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateType } from "./../../types/stateType";
import { BookCardType } from "../../types/bookCardType";

const initialState: StateType = {
  cart: [],
  favourites: [],
  searchTerm: "",
};

export const BooksSlice = createSlice({
  name: "Books",
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<BookCardType[]>) => {
      state.cart = action.payload;
    },

    updateFavourites: (state, action: PayloadAction<BookCardType[]>) => {
      state.favourites = action.payload;
    },

    updateSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { updateFavourites, updateCart } = BooksSlice.actions;
