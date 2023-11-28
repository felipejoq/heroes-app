import {authReducer} from "../../../src/auth/index.js";
import {types} from "../../../src/auth/types/types.js";

describe('Pruebas en authReducer.js', () => {
  const initialState = {logged: false};

  test('debe retornar el estado por defecto', () => {
    const state = authReducer(initialState, {});
    expect(state).toEqual(initialState);
  });

  test('debe llamar al login y establecer al usuario', () => {
    const action = {
      type: types.login,
      payload: { id: 1,  name: 'John' }
    }
    const state = authReducer(initialState, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload
    });
  });

  test('debe llamar logout y borrar usuario establecer false', () => {
    const state = {logged: true, user: {id: 1, name: 'John'}}
    const action = {type: types.logout}
    const logoutState = authReducer(state, action);
    expect(logoutState).toEqual(initialState)
  });
});