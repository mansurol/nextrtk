"use client";
import React from "react"; // Import React if not already imported
const { Provider } = require("react-redux");
import { store } from "./store";

export function Providers({ children }) {
  return <Provider store={store}> {children}</Provider>;
}
