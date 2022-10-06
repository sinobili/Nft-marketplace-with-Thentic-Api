import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    account: null,
    myNFTS:null
}

export const accountsSlice = createSlice({
    name: "accounts",
    initialState,
    reducers:{
        setAccounts: (state, action) => {
            state.account = action.payload;
        },
        setMyNFTs:(state,action) => {
            state.account=action.payload;
        }
    }
})

export const {setAccounts, setMyNFTs}= accountsSlice.actions;
export default accountsSlice.reducer;