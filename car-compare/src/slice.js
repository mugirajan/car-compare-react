import { createSlice } from "@reduxjs/toolkit";
import { allCarDetails } from "./allDetails";

const slice=createSlice({
    name:'cars',
    initialState:{
        allDetails:allCarDetails,
        car1:'Brezza',
        car2:'Brezza',
        firstCarAunthetication:false,
        secondCarAunthetication:false,

    },
    reducers:{
        setCar1:(state,action)=>{
            state.car1=action.payload
        },
        setCar2:(state,action)=>{
            state.car2=action.payload
        },
        setfirstCarAunthetication:(state,action)=>{
            state.firstCarAunthetication=action.payload
        },
        setsecondCarAunthetication:(state,action)=>{
            state.secondCarAunthetication=action.payload
        },
    }
})

export const {setCar1,setCar2,setfirstCarAunthetication,setsecondCarAunthetication}=slice.actions
export default slice.reducer;