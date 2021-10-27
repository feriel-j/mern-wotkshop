import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const userAdd = createAsyncThunk("user/add", async (user) => {
  try {
    let result = axios.post("http://localhost:5000/person/", user);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const userGet = createAsyncThunk("user/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/person/");
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const userDel = createAsyncThunk("user/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/person/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const userUpdt = createAsyncThunk(
  "user/update",
  async ({ id, updated }) => {
    try {
      let result = axios.put(`http://localhost:5000/person/${id}`, updated);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  user: null,
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [userAdd.pending]: (state) => {
      state.status = "pending";
    },
    [userAdd.fulfilled]: (state) => {
      state.status = "success";
    },
    [userAdd.rejected]: (state) => {
      state.status = "fail";
    },
    [userGet.pending]: (state) => {
      state.status = "pending";
    },
    [userGet.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.data?.persons;
    },
    [userGet.rejected]: (state) => {
      state.status = "fail";
    },
    [userDel.pending]: (state) => {
      state.status = "pending";
    },
    [userDel.fulfilled]: (state) => {
      state.status = "success";
    },
    [userDel.rejected]: (state) => {
      state.status = "fail";
    },
    [userUpdt.pending]: (state) => {
      state.status = "pending";
    },
    [userUpdt.fulfilled]: (state) => {
      state.status = "success";
    },
    [userUpdt.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
