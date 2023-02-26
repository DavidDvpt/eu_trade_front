"use client";

import { Provider } from "react-redux";
import store from "./store";

interface IReduxProviderProps {
  children: React.ReactNode;
}

function ReduxProvider({ children }: IReduxProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
