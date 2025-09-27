import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  schools: [],
};

const superAdminSlice = createSlice({
  name: 'superAdmin',
  initialState,
  reducers: {
    setSchools(state, action) {
      state.schools = action.payload;
    },
  },
});

export const { setSchools } = superAdminSlice.actions;
export default superAdminSlice.reducer;
