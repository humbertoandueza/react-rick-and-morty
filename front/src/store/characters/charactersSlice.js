import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    items: [],
    info: {
      "count": null,
      "pages": null,
      "next": null,
      "prev": null
    }
  },
  reducers: {
    setCharacters: ( state, { payload } ) => {
      state.items = payload?.results;
      state.info = payload?.info;
    }
  }
})

export const { setCharacters } = charactersSlice.actions