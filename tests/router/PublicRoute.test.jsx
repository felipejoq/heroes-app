import {render, screen} from "@testing-library/react";
import {PublicRoute} from "../../src/router";
import {AuthContext} from "../../src/auth/index.js";
import {MemoryRouter, Route, Routes} from "react-router-dom";

describe('Pruebas en el PublicRoute.jsx', () => {

  test('Debe mostrar el children si no está autenticado', () => {
    const contextValue = {logged: false}
    render(
      <AuthContext.Provider value={contextValue}>
        <PublicRoute>
          <h1>Ruta Pública</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Ruta Pública')).toBeTruthy();
  })

  test('Debe navegar si está autenticado', () => {
    const contextValue = {logged: true, user: {id: 1, name: 'John'}}
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path="/login" element={
              <PublicRoute>
                <h1>Ruta Pública</h1>
              </PublicRoute>
            }/>
            <Route path="/marvel" element={<h1>Página de Marvel</h1>}/>
          </Routes>

        </MemoryRouter>
      </AuthContext.Provider>
    )

    expect(screen.getByText('Página de Marvel')).toBeTruthy()

  })

});