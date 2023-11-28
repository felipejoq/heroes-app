import {AuthContext} from "./AuthContext.js";
import {useReducer} from "react";
import {authReducer} from "./authReducer.js";

const initialState = {
  logged: false
}

const init = () => initialState;

export const AuthProvider = ({children}) => {

  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  );
};