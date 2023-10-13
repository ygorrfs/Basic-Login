import { createContext, useReducer } from "react";

import { reducerActionType } from "../types/reducerActionType";
import { ThemeType, themeInitialState, themeReducer } from '../reducers/ThemeReducer';

type initialStateType = {
    theme: ThemeType;
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>
}

const initialState = {
    theme: themeInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    ...state, 
    theme: themeReducer(state.theme, action)
  });
  

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={ {state, dispatch}}>
            {children}
        </Context.Provider>
    );
}