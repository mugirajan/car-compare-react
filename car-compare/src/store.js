import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import slice from "./slice";

export const stores=configureStore({
    reducer:{
        allDetail:slice
    }
})

