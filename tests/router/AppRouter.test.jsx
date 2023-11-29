import {render, screen} from "@testing-library/react";
import {AppRouter} from "../../src/router/index.js";
import {AuthContext} from "../../src/auth/index.js";
import {MemoryRouter} from "react-router-dom";

describe('Pruebas en AppRouter.jsx', () => {
  test('Debe de mostrar el login si no está autenticado', () => {
    const contextValue = {logged: false}
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter/>
        </AuthContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getByText('Login')).toBeTruthy()
  })

  test('Debe mostrar el componente Marvel si está autenticado.', () => {
    const contextValue = {logged: true, user: {id: 1, name: 'John'}}
    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter/>
        </AuthContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getAllByText('Marvel Comics').length).toBeGreaterThanOrEqual(1)
  })
});