import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload, // Change action.name to action.payload
      };
      state.users.push(data);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
