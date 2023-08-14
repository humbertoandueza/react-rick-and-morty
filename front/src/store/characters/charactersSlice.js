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
    },
    filters: {
      status: '',
      gender: '',
      search: '',
      currentPage: 1
    }
  },
  reducers: {
    setCharacters: (state, { payload }) => {
      state.items = payload?.results;
      state.info = payload?.info;
    },
    setFilters: (state, { payload }) => {
      state.filters = { ...state.filters, ...payload }
    }
  }
})

export const { setCharacters, setFilters } = charactersSlice.actions